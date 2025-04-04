import axios from './base'

const fetchTest = () => {
  return axios
    .get('/test')
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error(error)
    })
}
export default fetchTest
