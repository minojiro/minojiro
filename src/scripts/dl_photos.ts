import * as fs from 'node:fs'
import { createHash } from 'node:crypto'
import * as path from 'node:path'
import { getPhotoPosts } from '../repositories/photos'
import {
  getOptimizedImageUrl,
  type Option as OptimizeImageOption,
} from '@/lib/microCmsImage'

const writeFile = (fname: string, data: string | Buffer) => {
  return fs.writeFileSync(
    path.join('./data/', fname),
    data as unknown as string,
  )
}

const downloadImage = async (url: string, fname: string) => {
  const res = await fetch(url)
  // バイナリデータはarrayBufferメソッドを叩いて取り出す
  const arrayBuffer = await res.arrayBuffer()
  // Uint8ContentsのArrayBuffer型 -> Buffer型に変換
  const buffer = Buffer.from(arrayBuffer)
  writeFile(fname, buffer)
}

const OPTIMIZE_IMAGE_OPTIONS: Record<string, Partial<OptimizeImageOption>> = {
  s: {
    fm: 'webp',
    w: 600,
    q: 40,
  },
  m: {
    fm: 'webp',
    w: 800,
    q: 40,
  },
  l: {
    fm: 'jpg',
    w: 800,
    q: 60,
  },
}

const main = async () => {
  const photos = await getPhotoPosts()
  const photoImageMap: Record<string, string> = {}
  writeFile('data.json', JSON.stringify(photos))

  for (const photo of photos) {
    const photoBaseUrl = photo.image.url
    for (const key in OPTIMIZE_IMAGE_OPTIONS) {
      const option = OPTIMIZE_IMAGE_OPTIONS[key]
      const imageUrl = getOptimizedImageUrl(photoBaseUrl, option)
      const fname = `${createHash('md5').update(imageUrl).digest('hex')}.${option.fm}`
      await downloadImage(imageUrl, `${fname}`)
      photoImageMap[[photo.id, key].join('__')] = fname
    }
    // break
  }
  writeFile('photoImageMap.json', JSON.stringify(photoImageMap))
}
main()
