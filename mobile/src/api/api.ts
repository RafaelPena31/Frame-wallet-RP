import axios from 'axios'

const api = axios.create({
  baseURL: 'https://us-central1-framewallet-a7d2a.cloudfunctions.net/api'
})

export default api
