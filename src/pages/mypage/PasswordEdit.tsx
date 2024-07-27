import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import ModalUpdate from '@/components/ModalUpdate'
import SubHeader from '@/components/SubHeader'
import { useEditPasswordForm } from '@/hooks/schema/useEditPasswordForm'
import { useModal } from '@/hooks/useModal'
import { useEditPassword } from '@/services/mypage/useMypageService'
import { FormProvider } from 'react-hook-form'

const PasswordEdit = () => {
  const formMethod = useEditPasswordForm()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = formMethod
  const { mutate: editPassword } = useEditPassword()
  const { isOpen, openModal, closeModal } = useModal()

  const onSubmit = ({ password }: { password: string }) => {
    editPassword(password, { onSuccess: () => openModal() })
  }

  return (
    <>
      <SubHeader hidden>비밀번호 변경</SubHeader>

      <FormProvider {...formMethod}>
        <form
          className="flexColumn mt-8 gap-7"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField>
            <InputField.Label error={errors?.password}>
              새로운 비밀번호
            </InputField.Label>
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

          <Button
            type="submit"
            className="absolute bottom-[70px] right-4"
            size="medium"
          >
            수정 완료
          </Button>
        </form>
      </FormProvider>
      <ModalUpdate isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default PasswordEdit
