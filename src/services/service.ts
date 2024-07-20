import axios, { AxiosRequestConfig } from 'axios'

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
): Promise<T> {
  const response = await instance.post(endpoint, data, config)
  return response.data
}

export async function postFormData<T, U>(
  endpoint: string,
  data: U,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await instance.post(endpoint, data, config)
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
