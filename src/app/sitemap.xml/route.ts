import { NextResponse } from 'next/server'
import PHOTOS from '@/constants/photos.json'
import xmlFormat from 'xml-formatter';

type XmlNode = {
  tag: string
  attrs: Record<string, string>
  children: (XmlNode | string)[]
}

const h = (tag: string, attrs: Record<string, string> = {}, children: (XmlNode | string)[] = []): XmlNode => ({
  tag,
  attrs,
  children
})

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function nodeToXml(node: XmlNode | string, indent = ''): string {
  if (typeof node === 'string') {
    return escapeXml(node)
  }

  const { tag, attrs, children } = node
  const attributes = Object.entries(attrs)
    .map(([k, v]) => ` ${k}="${escapeXml(v)}"`)
    .join('')

  if (children.length === 0) {
    return `${indent}<${tag}${attributes}/>`
  }

  // Check if all children are strings (text-only content)
  const isTextOnly = children.length === 1 && typeof children[0] === 'string'

  if (isTextOnly) {
    return `${indent}<${tag}${attributes}>${escapeXml(children[0] as string)}</${tag}>`
  }

  const childrenXml = children
    .map(child => nodeToXml(child, indent))
    .join('')

  return `${indent}<${tag}${attributes}>${childrenXml}${indent}</${tag}>`
}

export async function GET() {
  const imageUpdatedAtList = PHOTOS.filter(p => p.updatedAt).map(p => new Date(p.updatedAt as string).getTime())
  if (imageUpdatedAtList.length === 0) {
    imageUpdatedAtList.push(new Date().getTime())
  }
  const imageLastMod = new Date(Math.max(...imageUpdatedAtList)).toISOString()

  const sitemap = h('urlset',
    {
      xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
      'xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1'
    },
    [
      h('url', {}, [
        h('loc', {}, ['https://minojiro.com']),
        h('lastmod', {}, [imageLastMod]),
        h('changefreq', {}, ['weekly']),
        h('priority', {}, ['1.0']),
        ...PHOTOS.map(p =>
          h('image:image', {}, [
            h('image:loc', {}, [`https://minojiro.com${p.image.urlS}`]),
            h('image:caption', {}, [[p.modelNameJa || '', p.modelName || ''].filter(Boolean).join(' - ')])
          ]))
      ]),
      h('url', {}, [
        h('loc', {}, ['https://minojiro.com/profile']),
        h('lastmod', {}, ['2025-07-19T10:37:14.969Z']),
        h('changefreq', {}, ['yearly']),
        h('priority', {}, ['0.8']),
      ]),
      h('url', {}, [
        h('loc', {}, ['https://minojiro.com/request']),
        h('lastmod', {}, ['2025-07-19T10:37:14.969Z']),
        h('changefreq', {}, ['yearly']),
        h('priority', {}, ['0.6']),
      ])
    ]
  )

  const xml = xmlFormat(`<?xml version="1.0" encoding="UTF-8"?>${nodeToXml(sitemap)}`, {
    indentation: '  ',
    collapseContent: true,
    lineSeparator: '\n'
  })

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}

export const dynamic = 'force-static'