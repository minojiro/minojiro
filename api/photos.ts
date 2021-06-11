import { microcmsClient } from './client'
import { PhotoPost } from '../types'

export async function getPhotoPosts(): Promise<PhotoPost[]> {
  type ResponseData = {
    contents: {
      id: string
      image: {
        url: string
      }
      model_name: string
      staff: string
    }[]
  }

  const { data } = await microcmsClient.get<ResponseData>(
    'photos',
    {
      params: {limit: 99}
    }
  )

  return data.contents.map(o => ({
    id: o.id,
    src: o.image.url,
    modelName: o.model_name,
    staff: o.staff,
  }))
}
