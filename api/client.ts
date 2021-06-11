import axios from 'axios'

export const microcmsClient = axios.create({
  baseURL: 'https://minojiro.microcms.io/api/v1/',
  timeout: 1000,
  headers: {
    'X-API-KEY': process.env.X_API_KEY,
  },
})

