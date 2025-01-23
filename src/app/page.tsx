import { getPhotoPosts, PhotoPost } from '@/repositories/photos'
import photos from '../../data/data.json'
import { PhotoList } from '@/components/PhotoList'
import Image from 'next/image'
import Hoge from './10.jpg'

export default async function Home() {
  // PhotoPost[]
  return (
    <main className="">
      <PhotoList photos={photos as PhotoPost[]} />
    </main>
  )
}
