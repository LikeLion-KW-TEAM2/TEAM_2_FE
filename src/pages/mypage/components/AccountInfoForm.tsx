import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import defaultImg from '@/assets/images/default.svg'
import { FormProvider } from 'react-hook-form'
import { AccountInfoResponse, EditAccountInfoRequest } from '@/types/mypage'
import { useAccountInfoForm } from '@/hooks/schema/useAccountInfoForm'
import { useEditAccountInfo } from '@/services/mypage/useMypageService'
import { useModal } from '@/hooks/useModal'
import ModalUpdate from '@/components/ModalUpdate'

const AccountInfoForm = ({ name, myImage }: AccountInfoResponse) => {
  const formMethod = useAccountInfoForm({
    name: name || '',
    myImage: myImage || defaultImg,
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = formMethod
  const { mutate: editAccount } = useEditAccountInfo()
  const { isOpen, openModal, closeModal } = useModal()

  const onSubmit = ({ name, myImage }: EditAccountInfoRequest) => {
    editAccount({ name, myImage }, { onSuccess: () => openModal() })
  }

  return (
    <>
      <FormProvider {...formMethod}>
        <form className="flexColumn gap-7" onSubmit={handleSubmit(onSubmit)}>
          <InputField>
            <InputField.Label error={errors?.name}>닉네임</InputField.Label>
            <InputField.Input type="text" register={register('name')} />
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

export default AccountInfoForm
