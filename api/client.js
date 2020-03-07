import axios from 'axios'

export default axios.create({
  baseURL: 'https://minojiro.microcms.io/api/v1/',
  timeout: 1000,
  headers: {
    'X-API-KEY': 'd14b0939-18cd-411b-88d3-c93091949671',
    'X-WRITE-API-KEY': '88e092fa-39ed-43ae-a05f-8ae0523deaaf',
  },
})
