import client from './client'

class ApiPhotos {
  async getPhotos() {
    const res = await client.get('photos')
    return res.data.contents.map(photo => ({
      id: photo.id,
      src: photo.image.url,
      model: photo.model_name,
      staff: photo.staff,
    }))
  }
}

export default new ApiPhotos()
