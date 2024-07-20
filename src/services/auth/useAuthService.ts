import { useMutation } from '@tanstack/react-query'
import authService from './authService'
import { RequestLoginForm, RequestSignupForm } from '@/types/auth'

export function useLogin() {
  return useMutation({
    mutationFn: (loginData: RequestLoginForm) =>
      authService.POST.login(loginData),
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
    mutationFn: (userId: string) => authService.POST.idValidate(userId),
    onError: (error: any) => {
      console.error('error', error)
    },
  })
}
