import axios from 'axios'

const instance = axios.create({
  baseURL: 'api/',
  //   timeout: 1000,
  //   headers: { 'X-Custom-Header': 'foobar' },
})
// 添加响应拦截器
instance.interceptors.response.use((response) => {
  const { data: _data } = response
  const { code, data, msg } = _data
  if (code !== 0) {
    return Promise.reject(msg)
  }
  return data
})
export default instance
