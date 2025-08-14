import axios from 'axios'

// Initialize axios, add middlewares
export function initAxios() {
  axios.defaults.headers.common['User-Agent'] = 'pan.baidu.com'

  axios.interceptors.response.use(
    function onFulfilled(response) {
      if (response?.data?.errno) {
        // 有错误码且不为0
        return Promise.reject(response.data)
      } else {
        return response.data
      }
    },
    function onRejected(error) {
      return Promise.reject(error)
    }
  )
}
