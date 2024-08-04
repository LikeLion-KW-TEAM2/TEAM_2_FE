import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import { FormProvider } from 'react-hook-form'
import { AccountInfoResponse } from '@/types/mypage'
import { useAccountInfoForm } from '@/hooks/schema/useAccountInfoForm'
import {
  useUploadDefaultImage,
  useUploadImage,
} from '@/services/mypage/useMypageService'
import { useModal } from '@/hooks/useModal'
import ModalUpdate from '@/components/ModalUpdate'
import useImageUpload from '@/hooks/useImageUpload'

const AccountInfoForm = ({ name, myImage }: AccountInfoResponse) => {
  const formMethod = useAccountInfoForm({
    name: name || '',
    myImage: myImage,
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
  } = formMethod

  const {
    fileInputRef,
    image,
    handleUploadClick,
    handleChangeImage,
    handleChangeDefaultImage,
  } = useImageUpload({ myImage, setValue })

  const { mutate: uploadImage } = useUploadImage()
  const { mutate: uploadDefaultImage } = useUploadDefaultImage()
  const { isOpen, openModal, closeModal } = useModal()

  const onSubmit = () => {
    const name = getValues('name')
    const myImage = getValues('myImage')

    if (myImage === 'default') {
      uploadDefaultImage({ name, myImage }, { onSuccess: () => openModal() })
    } else {
      const sendForm = new FormData()
      sendForm.append('name', name)
      sendForm.append('image', myImage as File)

      uploadImage(sendForm, { onSuccess: () => openModal() })
    }
  }

  return (
    <>
      <FormProvider {...formMethod}>
        <form className="flexColumn flex-1" onSubmit={handleSubmit(onSubmit)}>
          <div className="flexColumn flex-1 gap-7">
            <InputField>
              <InputField.Label error={errors?.name}>닉네임</InputField.Label>
              <InputField.Input type="text" register={register('name')} />
            </InputField>

            <InputField>
              <InputField.Label>프로필 이미지</InputField.Label>
              <div className="flexBetweenAlign mt-4">
                <img
                  src={image}
                  className="ml-8 h-[92px] w-[92px] rounded-full border-[0.9px] border-secondary-200"
                  alt="profile-img"
                />
                <div className="flexColumn w-[130px] gap-3">
                  <input
                    ref={fileInputRef}
                    className="-m-[1px] h-[1px] w-[1px] overflow-hidden border-none p-0"
                    type="file"
                    id="profile-image"
                    name="profile-image"
                    accept="image/*"
                    onChange={handleChangeImage}
                  />
                  <Button
                    width="w-full"
                    size="xsmall"
                    handleClick={handleUploadClick}
                  >
                    이미지 업로드
                  </Button>
                  <Button
                    width="w-full"
                    size="xsmall"
                    handleClick={handleChangeDefaultImage}
                  >
                    기본 이미지로 변경
                  </Button>
                </div>
              </div>
            </InputField>
          </div>

          <Button
            type="submit"
            className="mb-[70px] mt-10 self-end"
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
