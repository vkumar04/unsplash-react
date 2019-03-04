import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3708e7f80bb42f70347f2c98f34acc36db3df07431a2b74f4492e527c07f6aaf'
  }
})
