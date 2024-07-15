import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flexColumn h-full">
      <h1 className="my-[106px] text-center font-bold text-primary-900">돈두댓</h1>

      <section className="flexColumn flex-1 gap-7">
        <InputField>
          <InputField.Label>아이디</InputField.Label>
          <InputField.Input type="text" placeholder="아이디를 입력해주세요." />
        </InputField>

        <InputField>
          <InputField.Label>비밀번호</InputField.Label>
          <InputField.Input type="password" placeholder="비밀번호를 입력해주세요." />
        </InputField>
      </section>

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
