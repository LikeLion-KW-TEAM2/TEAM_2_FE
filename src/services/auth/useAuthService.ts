import { useMutation } from '@tanstack/react-query'
import authService from './authService'
import {
  RequestDuplicationId,
  RequestLoginForm,
  RequestSignupForm,
} from '@/types/auth'
import { instance } from '../service'
import { useNavigate } from 'react-router-dom'
import { useTokenActions } from '@/store/token'

export function useLogin() {
  const navigate = useNavigate()
  const { setToken } = useTokenActions()

  return useMutation({
    mutationFn: (loginData: RequestLoginForm) => {
      const formData = new FormData()
      formData.append('userId', loginData.userId)
      formData.append('password', loginData.password)
      return authService.POST.login(formData)
    },
    onSuccess: (res: any) => {
      instance.defaults.headers.common['Authorization'] = res.authorization
      setToken(res.authorization)
      navigate('/record')
    },
    onError: (error: any) => {
      console.error('error', error)
    },
  })
}

export function useSignup() {
  return useMutation({
    mutationFn: (signupData: RequestSignupForm) =>
      authService.POST.signup(signupData),
    onError: (error: any) => {
      console.error('error', error)
    },
  })
}

export function useCheckOfDuplicationId() {
  return useMutation({
    mutationFn: (userId: RequestDuplicationId) =>
      authService.POST.idValidate(userId),
    onError: (error: any) => {
      console.error('error', error)
    },
  })
}
