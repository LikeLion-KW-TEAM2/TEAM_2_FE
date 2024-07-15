import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import { useLoginForm } from '@/hooks/useLoginForm'
import { FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {
  const formMethod = useLoginForm()
  const { handleSubmit } = formMethod
  const onSubmit = () => {}

  return (
    <div className="flexColumn h-full">
      <h1 className="my-[106px] text-center font-bold text-primary-900">
        돈두댓
      </h1>

      <FormProvider {...formMethod}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flexColumn flex-1 gap-7"
        >
          <InputField>
            <InputField.Label section="login">아이디</InputField.Label>
            <InputField.Input
              type="text"
              section="login"
              placeholder="아이디를 입력해주세요."
            />
          </InputField>

          <InputField>
            <InputField.Label section="password">비밀번호</InputField.Label>
            <InputField.Input
              type="password"
              section="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </InputField>
        </form>
      </FormProvider>

      <section className="flexColumn mb-11 gap-3">
        <Button size="large" width="w-full">
          로그인
        </Button>
        <Link to={'/signup'}>
          <Button size="large" width="w-full">
            회원가입
          </Button>
        </Link>
      </section>
    </div>
  )
}

export default Login
