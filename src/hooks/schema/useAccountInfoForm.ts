import { AccountInfoRequest } from '@/types/mypage'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(3, { message: '닉네임은 3글자 이상입니다.' }),
  myImage: z.union([z.string(), z.instanceof(File)]),
})

export const useAccountInfoForm = (defaultValues: AccountInfoRequest) => {
  const formMethod = useForm<AccountInfoRequest>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues,
    resolver: zodResolver(schema),
  })

  return formMethod
}
