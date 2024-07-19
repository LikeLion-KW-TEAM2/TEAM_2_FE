import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import useInput from '@/hooks/useInput'
import { useLogin } from '@/services/auth/useAuthService'
import { FormEvent, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const { input, onChange } = useInput({ id: '', password: '' })
  const { mutate: loginMutate, isSuccess, isError, error } = useLogin()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginMutate(input)
  }

  useEffect(() => {
    if (isSuccess) navigate('/record')
  }, [isSuccess])

  return (
    <div className="flexColumn h-full">
      <h1 className="my-[106px] text-center font-bold text-primary-900">
        돈두댓
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flexColumn flex-1 gap-7">
          <InputField>
            <InputField.Label>아이디</InputField.Label>
            <InputField.Input
              type="text"
              name="id"
              value={input.id}
              onChange={onChange}
              placeholder="아이디를 입력해주세요."
            />
          </InputField>

          <InputField>
            <InputField.Label>비밀번호</InputField.Label>
            <InputField.Input
              type="password"
              name="password"
              value={input.password}
              onChange={onChange}
              placeholder="비밀번호를 입력해주세요."
            />
          </InputField>
        </div>
        {isError && error && (
          <p className="mt-2 text-small text-error-primary">
            아이디와 비밀번호를 다시 확인해주세요.
          </p>
        )}

        <div className="flexColumn absolute bottom-10 left-4 right-4 gap-3">
          <Button type="submit" size="large" width="w-full">
            로그인
          </Button>

          <Link to={'/signup'}>
            <Button size="large" width="w-full">
              회원가입
            </Button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
