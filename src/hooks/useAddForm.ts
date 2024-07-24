import { AddForm } from '@/types/record'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, { message: '이름은 필수 항목입니다.' }),
  periodType: z.number(),
  privacy: z.number(),
})

export const useAddForm = () => {
  const formMethod = useForm<AddForm>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema),
  })
  return formMethod
}