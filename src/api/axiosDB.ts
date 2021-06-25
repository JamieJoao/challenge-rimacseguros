import axios from 'axios'

export const axiosDB = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})