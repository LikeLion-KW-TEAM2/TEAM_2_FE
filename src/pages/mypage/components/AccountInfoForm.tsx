import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import { FormProvider } from 'react-hook-form'
import { AccountInfoResponse, EditAccountInfoRequest } from '@/types/mypage'
import { useAccountInfoForm } from '@/hooks/schema/useAccountInfoForm'
import {
  useEditAccountInfo,
  useUploadImage,
} from '@/services/mypage/useMypageService'
import { useModal } from '@/hooks/useModal'
import ModalUpdate from '@/components/ModalUpdate'
import profileImage from '@/utils/profileImage'
import { useRef, useState } from 'react'

const AccountInfoForm = ({ name, myImage }: AccountInfoResponse) => {
  const formMethod = useAccountInfoForm({
    name: name || '',
    myImage: profileImage(myImage),
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = formMethod
  const { mutate: editAccount } = useEditAccountInfo()
  const { mutate: uploadImage } = useUploadImage()
  const { isOpen, openModal, closeModal } = useModal()
  const [image, setImage] = useState(profileImage(myImage))

  const onSubmit = ({ name, myImage }: EditAccountInfoRequest) => {
    editAccount({ name, myImage }, { onSuccess: () => openModal() })
  }

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList
    const sendImgData = new FormData()
    sendImgData.append('image', files[0])

    uploadImage(sendImgData, {
      onSuccess: (res) => {
        setValue('myImage', res.myImage)
        setImage(res.myImage)
      },
    })
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
