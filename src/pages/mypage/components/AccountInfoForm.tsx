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

  const onSubmit = (account: EditAccountInfoRequest) => {
    editAccount(account, { onSuccess: () => openModal() })
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
        setImage(res.myImage)
        setValue('myImage', res.myImage)
      },
    })
  }

  const handleChangeDefaultImage = () => {
    const sendImgData = new FormData()

    const emptyBlob = new Blob()
    sendImgData.append('image', 'default')

    uploadImage(sendImgData, {
      onSuccess: (res) => {
        setImage(res.myImage)
        setValue('myImage', res.myImage)
      },
    })
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
                  src={`${image}?${new Date().getTime()}`}
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
