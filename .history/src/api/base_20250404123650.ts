import axios from 'axios'

const instance = axios.create({
  baseURL: 'api/',
  //   timeout: 1000,
  //   headers: { 'X-Custom-Header': 'foobar' },
})
// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    console.log('response', response)
    const { data: _data } = response
    const { code, data, msg } = _data
    if (code !== 200) {
      console.error(msg)
      return Promise.reject(msg)
    }
    return data
  },
  (error) => {
    return Promise.reject(error)
  },
)
export default instance
