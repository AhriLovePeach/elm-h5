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
    // 对响应数据做点什么;

    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)
export default instance
