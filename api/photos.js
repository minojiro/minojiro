class ApiPhotos {
  getPhotos() {
    const items = Array.from({length: 10}, (_,id) => ({
      id,
      src: '//placehold.jp/100x100.png',
      model: 'model',
      staff: 'staff',
    }))
    return new Promise(res => {
      setTimeout(() => res(items), 500)
    })
  }
}

export default new ApiPhotos()
