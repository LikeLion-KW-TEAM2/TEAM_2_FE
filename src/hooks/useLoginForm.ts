import { RequestLoginForm } from '@/types/auth'
import { useForm } from 'react-hook-form'

export const useLoginForm = () => {
  const formMethod = useForm<RequestLoginForm>({
    defaultValues: {
      userId: '',
      password: '',
    },
  })
  return formMethod
}
