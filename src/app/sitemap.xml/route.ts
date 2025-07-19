import { NextResponse } from 'next/server'
import PHOTOS from '@/constants/photos.json'

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
    .map(child => nodeToXml(child, indent + '  '))
    .join('\n')

  return `${indent}<${tag}${attributes}>\n${childrenXml}\n${indent}</${tag}>`
}

export async function GET() {
  const pages = [
    { url: 'https://minojiro.com', priority: '1.0', changefreq: 'weekly' },
    { url: 'https://minojiro.com/profile', priority: '0.8', changefreq: 'yearly' },
    { url: 'https://minojiro.com/request', priority: '0.6', changefreq: 'yearly' }
  ]

  const sitemap = h('urlset',
    {
      xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
      'xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1'
    },
    pages.map(page =>
      h('url', {}, [
        h('loc', {}, [page.url]),
        h('lastmod', {}, [new Date().toISOString()]),
        h('changefreq', {}, [page.changefreq]),
        h('priority', {}, [page.priority]),
        ...(page.url === 'https://minojiro.com'
          ? PHOTOS.map(p =>
            h('image:image', {}, [
              h('image:loc', {}, [`https://minojiro.com${p.image.urlS}`]),
              h('image:caption', {}, [[p.modelNameJa || '', p.modelName || ''].filter(Boolean).join(' - ')])
            ])
          )
          : []
        )
      ])
    )
  )

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n${nodeToXml(sitemap)}`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}

export const dynamic = 'force-static'