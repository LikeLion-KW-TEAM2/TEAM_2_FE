import axios, { AxiosInstance, AxiosResponse } from 'axios'

let baseURL = ''
if (import.meta.env.VITE_REACT_APP_MOCK !== 'development') {
  baseURL = import.meta.env.VITE_SERVER_URL
} else {
  baseURL = import.meta.env.VITE_BACKEND_LOCAL_URL
}

const config = {
  baseURL: baseURL,
  withCredentials: true,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
}

function setInterceptors(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      const { data, headers } = response
      return { ...data, headers }
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  return instance
}

function createInstance() {
  const instance = axios.create(config)
  return setInterceptors(instance)
}

function createInstanceWithoutAuth() {
  const instance = axios.create(config)
  return instance
}

export const instance = createInstance()
export const instanceWithoutAuth = createInstanceWithoutAuth()
