import profileImage from '@/utils/profileImage'
import { useRef, useState } from 'react'
import defaultImage from '@/assets/images/default.svg'
import { IImageUpload } from '@/types/common'

const useImageUpload = ({ myImage, setValue }: IImageUpload) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<string | undefined>(profileImage(myImage))

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList
    setValue('myImage', files[0])

    if (files && files[0]) {
      const reader = new FileReader()

      reader.onload = (event) => {
        setImage(event.target?.result as string)
      }

      reader.readAsDataURL(files[0])
    }
  }

  const handleChangeDefaultImage = () => {
    setImage(defaultImage)
    setValue('myImage', defaultImage)
  }

  return {
    fileInputRef,
    image,
    handleUploadClick,
    handleChangeImage,
    handleChangeDefaultImage,
  }
}

export default useImageUpload
