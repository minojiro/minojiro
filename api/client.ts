import axios from 'axios'

export const microcmsClient = axios.create({
  baseURL: "https://minojiro.microcms.io/api/v1/",
  timeout: 2000,
  headers: {
    "X-MICROCMS-API-KEY": process.env.X_API_KEY,
  },
})

