import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import { Dispatch, SetStateAction } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputTabType {
  setCurrentTab: Dispatch<SetStateAction<number>>
}

const SignupInputTab = ({ setCurrentTab }: InputTabType) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext()

  const handleClickNextButton = async () => {
    const isValid = await trigger(['nickname', 'id', 'password', 'confirm'])
    if (isValid) {
      console.log('성공')
      setCurrentTab(1)
    } else console.log('실패')
  }

  return (
    <>
      <div className="flexColumn mb-16 gap-4">
        <InputField>
          <InputField.Label error={errors?.nickname}>닉네임</InputField.Label>
          <InputField.Input
            type="text"
            register={register('nickname')}
            placeholder="닉네임을 입력해주세요."
          />
        </InputField>

        <InputField>
          <InputField.Label error={errors?.id}>아이디</InputField.Label>
          <div className="flex gap-4">
            <InputField.Input
              type="text"
              register={register('id')}
              placeholder="아이디를 입력해주세요."
            />
            <Button size="small">중복 확인</Button>
          </div>
        </InputField>

        <InputField>
          <InputField.Label error={errors?.password}>비밀번호</InputField.Label>
          <InputField.Input
            type="password"
            register={register('password')}
            placeholder="비밀번호를 입력해주세요."
          />
        </InputField>

        <InputField>
          <InputField.Label error={errors?.confirm}>
            비밀번호 확인
          </InputField.Label>
          <InputField.Input
            type="password"
            register={register('confirm')}
            placeholder="비밀번호 확인을 입력해주세요."
          />
        </InputField>
      </div>

      <Button width="w-full" size="large" handleClick={handleClickNextButton}>
        다음 단계
      </Button>
    </>
  )
}

export default SignupInputTab
