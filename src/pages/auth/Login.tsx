import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import { useLoginForm } from '@/hooks/schema/useLoginForm'
import { useLogin } from '@/services/auth/useAuthService'
import { LoginFormRequest } from '@/types/auth'
import { FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {
  const formMethod = useLoginForm()
  const { mutate: loginMutate, isError, error } = useLogin()
  const { handleSubmit, register } = formMethod

  const handleLoginFormSubmit = (loginForm: LoginFormRequest) => {
    const formData = new FormData()
    formData.append('userId', loginForm.userId)
    formData.append('password', loginForm.password)
    loginMutate(loginForm)
  }

  return (
    <div className="flexColumn h-full">
      <h1 className="my-[106px] text-center font-bold text-primary-900">
        돈두댓
      </h1>

      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(handleLoginFormSubmit)}>
          <div className="flexColumn flex-1 gap-7">
            <InputField>
              <InputField.Label>아이디</InputField.Label>
              <InputField.Input
                type="text"
                register={register('userId')}
                placeholder="아이디를 입력해주세요."
              />
            </InputField>

            <InputField>
              <InputField.Label>비밀번호</InputField.Label>
              <InputField.Input
                type="password"
                register={register('password')}
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
      </FormProvider>
    </div>
  )
}

export default Login
