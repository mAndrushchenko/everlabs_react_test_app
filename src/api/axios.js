const axios = require('axios')

export const getPhotos = ({ albumId }) => {
  const url = 'https://jsonplaceholder.typicode.com/photos?albumId=' + albumId

  return axios.get(url)
}
