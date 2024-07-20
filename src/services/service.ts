import axios, { AxiosRequestConfig, AxiosResponseHeaders } from 'axios'

export const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function getData<T>(endpoint: string): Promise<T> {
  const response = await instance.get(endpoint)
  return response.data
}

export async function postData<T, U>(
  endpoint: string,
  data: U,
  config?: AxiosRequestConfig,
  returnHeader?: boolean,
): Promise<T | AxiosResponseHeaders> {
  const response = await instance.post(endpoint, data, config)

  if (returnHeader) return response.headers as AxiosResponseHeaders
  return response.data
}

export async function putData<T, U>(endpoint: string, data: U): Promise<T> {
  const response = await instance.put(endpoint, data)
  return response.data
}

export async function deleteData<T>(endpoint: string): Promise<T> {
  const response = await instance.delete(endpoint)
  return response.data
}
