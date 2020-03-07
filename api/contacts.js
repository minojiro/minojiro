import client from './client'

class ApiContacts {
  async postContact(params) {
    await client.post('contacts', {
      name: params.name,
      email: params.email,
      message: params.message,
    })
  }
}

export default new ApiContacts()
