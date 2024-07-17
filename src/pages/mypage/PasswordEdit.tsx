import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import SubHeader from '@/components/SubHeader'

const PasswordEdit = () => {
  return (
    <div>
      <SubHeader hidden>비밀번호 변경</SubHeader>

      <div className="flexColumn mt-8 gap-7">
        <InputField>
          <InputField.Label>새로운 비밀번호</InputField.Label>
          <InputField.Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
        </InputField>

        <InputField>
          <InputField.Label>비밀번호 확인</InputField.Label>
          <InputField.Input
            type="password"
            placeholder="비밀번호 확인을 입력해주세요."
          />
        </InputField>
      </div>

      <Button className="absolute bottom-[70px] right-4" size="medium">
        수정 완료
      </Button>
    </div>
  )
}

export default PasswordEdit
