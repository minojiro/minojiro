import axios from 'axios'

export default axios.create({
  baseURL: 'https://minojiro.microcms.io/api/v1/',
  timeout: 1000,
  headers: {
    'X-API-KEY': process.env.X_API_KEY,
    'X-WRITE-API-KEY': process.env.X_WRITE_API_KEY,
  },
})
