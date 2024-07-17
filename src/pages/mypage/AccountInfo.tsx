import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import SubHeader from '@/components/SubHeader'
import defaultImg from '@/assets/images/default.svg'

const AccountInfo = () => {
  return (
    <div>
      <SubHeader hidden>회원 정보 수정</SubHeader>

      <div className="flexColumn gap-7">
        <InputField>
          <InputField.Label>닉네임</InputField.Label>
          <InputField.Input type="text" />
        </InputField>

        <InputField>
          <InputField.Label>프로필 이미지</InputField.Label>
          <div className="flexBetweenAlign mt-4">
            <img
              src={defaultImg}
              className="ml-8 h-[92px] w-[92px] rounded-full border-[0.9px] border-secondary-200"
              alt="profile-img"
            />
            <div className="flexColumn w-[130px] gap-3">
              <Button width="w-full" size="xsmall">
                이미지 업로드
              </Button>
              <Button width="w-full" size="xsmall">
                기본 이미지로 변경
              </Button>
            </div>
          </div>
        </InputField>
      </div>

      <Button className="absolute bottom-[70px] right-4" size="medium">
        수정 완료
      </Button>
    </div>
  )
}

export default AccountInfo
