import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  type Method
} from 'axios'
import type { DataType } from './types'
const serveice: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 20000
})
// 添加请求拦截器
serveice.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    // 在发送请求之前做些什么
    return config
  },
  function (error: AxiosError) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
serveice.interceptors.response.use(
  function (response: AxiosResponse) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.status == 200 && response.data.code == 20000) return response.data
  },
  function (error: AxiosError) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

const request = <T = any>(
  url: string,
  method: Method = 'GET',
  data?: Object,
  options?: InternalAxiosRequestConfig
) => {
  return serveice.request<T, DataType<T>>({
    url,
    method,
    [method === 'GET' ? 'params' : 'data']: data,
    ...options
  })
}

export const get = <T = any>(url: string, data: Object) => {
  return request<T>(url, 'GET', data)
}
export const post = <T = any>(url: string, data: Object) => {
  return request<T>(url, 'POST', data)
}
export const put = <T = any>(url: string, data: Object) => {
  return request<T>(url, 'PUT', data)
}
export const del = <T = any>(url: string, data: Object) => {
  return request<T>(url, 'DELETE', data)
}

export default request
