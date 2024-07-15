import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import { useLoginForm } from '@/hooks/useLoginForm'
import { FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {
  const formMethod = useLoginForm()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = formMethod
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
            <InputField.Label error={errors?.login}>아이디</InputField.Label>
            <InputField.Input
              type="text"
              register={register('login')}
              placeholder="아이디를 입력해주세요."
            />
          </InputField>

          <InputField>
            <InputField.Label error={errors?.password}>
              비밀번호
            </InputField.Label>
            <InputField.Input
              type="password"
              register={register('password')}
              placeholder="비밀번호를 입력해주세요."
            />
          </InputField>
        </form>
      </FormProvider>

      <section className="flexColumn mb-11 gap-3">
        <Link to={'/record'}>
          <Button size="large" width="w-full">
            로그인
          </Button>
        </Link>

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
