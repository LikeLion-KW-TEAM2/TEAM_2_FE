import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import { useCheckOfDuplicationId } from '@/services/auth/useAuthService'
import { IInputTab } from '@/types/auth'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

const SignupInputTab = ({ setCurrentTab }: IInputTab) => {
  const {
    register,
    formState: { errors },
    trigger,
    getValues,
    setError,
  } = useFormContext()

  const { mutate: checkDuplicationMutate, isError } = useCheckOfDuplicationId()
  const [successMessage, setSuccessMessage] = useState<string>('')
  const [hasCheckedDuplication, setHasCheckedDuplication] = useState(false)

  const handleClickNextButton = async () => {
    const isValid = await trigger(['name', 'userId', 'password', 'confirm'])
    if (isValid && !isError) setCurrentTab(1)
    else {
      if (!hasCheckedDuplication)
        setError('id', { message: '아이디 중복 확인을 해주세요.' })
    }
  }

  const handleCheckOfDuplicationId = async () => {
    const isValid = await trigger('userId')
    if (isValid) {
      checkDuplicationMutate(
        { userId: getValues('userId') },
        {
          onSuccess: (res) => {
            setHasCheckedDuplication(true)
            setSuccessMessage(res.data)
          },
          onError: () => {
            setError('userId', { message: '이미 존재하는 아이디입니다.' })
            setHasCheckedDuplication(false)
          },
        },
      )
    }
  }

  return (
    <>
      <div className="flexColumn mb-8 gap-4">
        <InputField>
          <InputField.Label error={errors?.name}>닉네임</InputField.Label>
          <InputField.Input
            type="text"
            register={register('name')}
            placeholder="닉네임을 입력해주세요."
          />
        </InputField>

        <InputField>
          <InputField.Label error={errors?.userId} success={successMessage}>
            아이디
          </InputField.Label>
          <div className="flex gap-4">
            <InputField.Input
              type="text"
              register={register('userId')}
              placeholder="아이디를 입력해주세요."
            />
            <Button size="small" handleClick={handleCheckOfDuplicationId}>
              중복 확인
            </Button>
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

      <Button
        width="w-full"
        size="large"
        handleClick={handleClickNextButton}
        className="mb-10"
      >
        다음 단계
      </Button>
    </>
  )
}

export default SignupInputTab
