import SignupInputTab from './components/SignupInputTab'
import SignupCheckTab from './components/SignupCheckTab'
import { useEffect, useState } from 'react'
import { useSignupForm } from '@/hooks/useSignupForm'
import { FormProvider } from 'react-hook-form'
import { RequestSignupForm } from '@/types/auth'
import { useSignup } from '@/services/auth/useAuthService'
import { useModal } from '@/hooks/useModal'

const SIGNUP_HEADER = [
  '돈두댓에서 사용할 정보를 기입해주세요.',
  '돈두댓 서비스 이용 약관에 동의해주세요.',
]

const Signup = () => {
  const formMethod = useSignupForm()
  const { handleSubmit } = formMethod
  const { isOpen, openModal, closeModal } = useModal()
  const [currentTab, setCurrentTab] = useState<number>(0)
  const { mutate: signupMutate, isSuccess } = useSignup()
  const onSubmit = ({ nickname, id, password }: RequestSignupForm) => {
    signupMutate({ nickname, id, password })
  }

  useEffect(() => {
    if (isSuccess) openModal()
  }, [isSuccess])

  return (
    <div className="flexColumn">
      <h4 className="my-12 w-[260px] font-bold text-primary-900">
        {SIGNUP_HEADER[currentTab]}
      </h4>

      <p className="mb-2 text-end text-small font-medium">
        ({currentTab + 1}/2) Step
      </p>

      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-11">
          {currentTab === 0 && <SignupInputTab setCurrentTab={setCurrentTab} />}
          {currentTab === 1 && (
            <SignupCheckTab isOpen={isOpen} closeModal={closeModal} />
          )}
        </form>
      </FormProvider>
    </div>
  )
}

export default Signup
