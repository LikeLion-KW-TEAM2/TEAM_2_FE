import SignupInputTab from './components/SignupInputTab'
import SignupCheckTab from './components/SignupCheckTab'
import { useState } from 'react'
import { useSignupForm } from '@/hooks/schema/useSignupForm'
import { FormProvider } from 'react-hook-form'
import { RequestSignupForm } from '@/types/auth'
import { useSignup } from '@/services/auth/useAuthService'
import { useModal } from '@/hooks/useModal'
import { SIGNUP_HEADER } from '@/constants'

const Signup = () => {
  const formMethod = useSignupForm()
  const { handleSubmit } = formMethod
  const { isOpen, openModal, closeModal } = useModal()
  const [currentTab, setCurrentTab] = useState<number>(0)
  const { mutate: signupMutate } = useSignup()
  const onSubmit = ({ name, userId, password, agree }: RequestSignupForm) => {
    signupMutate(
      { name, userId, password, agree },
      {
        onSuccess: () => openModal(),
      },
    )
  }

  return (
    <div className="flexColumn h-full">
      <h4 className="my-12 w-[260px] font-bold text-primary-900">
        {SIGNUP_HEADER[currentTab]}
      </h4>

      <p className="mb-2 text-end text-small font-medium">
        ({currentTab + 1}/2) Step
      </p>

      <FormProvider {...formMethod}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 overflow-y-scroll scrollbar-hide"
        >
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
