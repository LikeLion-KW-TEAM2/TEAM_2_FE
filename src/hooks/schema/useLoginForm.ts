import { LoginFormRequest } from '@/types/auth'
import { useForm } from 'react-hook-form'

export const useLoginForm = () => {
  const formMethod = useForm<LoginFormRequest>({
    defaultValues: {
      userId: 'qwer1234',
      password: 'password2',
    },
  })
  return formMethod
}
