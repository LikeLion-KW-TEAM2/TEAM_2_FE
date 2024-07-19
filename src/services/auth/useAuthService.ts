import { useMutation } from '@tanstack/react-query'
import authService from './authService'
import { RequestLoginForm } from '@/types/auth'

export function useLogin() {
  return useMutation({
    mutationFn: ({ id, password }: RequestLoginForm) =>
      authService.POST.login({ id, password }),
    onError: (error: any) => {
      console.error('error', error)
    },
  })
}
