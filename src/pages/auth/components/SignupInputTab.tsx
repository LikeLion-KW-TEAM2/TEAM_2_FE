import Button from '@/components/Button'
import { InputField } from '@/components/InputField'

const SignupInputTab = () => {
  return (
    <div className="flexColumn mb-24 gap-4">
      <InputField>
        <InputField.Label>닉네임</InputField.Label>
        <InputField.Input type="text" placeholder="닉네임을 입력해주세요." />
      </InputField>

      <InputField>
        <InputField.Label>아이디</InputField.Label>
        <div className="flex gap-4">
          <InputField.Input type="text" placeholder="아이디를 입력해주세요." />
          <Button size="small">중복 확인</Button>
        </div>
      </InputField>

      <InputField>
        <InputField.Label>비밀번호</InputField.Label>
        <InputField.Input type="password" placeholder="비밀번호를 입력해주세요." />
      </InputField>

      <InputField>
        <InputField.Label>비밀번호 확인</InputField.Label>
        <InputField.Input type="text" placeholder="비밀번호 확인을 입력해주세요." />
      </InputField>
    </div>
  )
}

export default SignupInputTab
