class ApiContacts {
  postContact() {
    return new Promise((res, rej) => {
      setTimeout(() => res({}), 500)
    })
  }
}

export default new ApiContacts()
