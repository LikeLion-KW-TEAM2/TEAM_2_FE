import { useMutation } from '@tanstack/react-query'
import authService from './authService'
import {
  DuplicationIdRequest,
  LoginFormRequest,
  SignupFormRequest,
} from '@/types/auth'
import { useNavigate } from 'react-router-dom'
import { useTokenActions } from '@/store/token'
import { instance } from '../service'

export function useLogin() {
  const navigate = useNavigate()
  const { setToken } = useTokenActions()

  return useMutation({
    mutationFn: (loginData: LoginFormRequest) => {
      const formData = new FormData()
      formData.append('userId', loginData.userId)
      formData.append('password', loginData.password)
      return authService.POST.login(formData)
    },
    onSuccess: ({ headers }: any) => {
      instance.defaults.headers.common['Authorization'] = headers.authorization
      setToken(headers.authorization)
      navigate('/record')
    },
  })
}

export function useSignup() {
  return useMutation({
    mutationFn: (signupData: SignupFormRequest) =>
      authService.POST.signup(signupData),
  })
}

export function useCheckOfDuplicationId() {
  return useMutation({
    mutationFn: (userId: DuplicationIdRequest) =>
      authService.POST.idValidate(userId),
  })
}
