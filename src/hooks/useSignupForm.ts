import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z
  .object({
    nickname: z.string().min(3, { message: '닉네임은 3글자 이상입니다.' }),
    id: z
      .string()
      .min(6, { message: '아이디는 6글자 이상입니다.' })
      .max(12, { message: '아이디는 12글자 이하입니다.' })
      .regex(/^[a-z0-9]+$/, {
        message: '영문 소문자와 숫자만 가능합니다.',
      }),
    password: z
      .string()
      .min(8, { message: '비밀번호는 8글자 이상입니다.' })
      .max(16, { message: '비밀번호는 16글자 이하입니다.' })
      .regex(/^(?=.*[a-zA-Z])(?=.*\d).+$/, {
        message: '영문자와 숫자를 모두 포함해야 합니다.',
      }),
    confirm: z.string(),
  })
  .partial()
  .refine((data) => data.password === data.confirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirm'],
  })

export const useSignupForm = () => {
  const formMethod = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  return formMethod
}
