import defaultImg from '@/assets/images/default.svg'

const profileImage = (image?: string) => {
  if (!image || image !== 'default') return image
  return defaultImg
}

export default profileImage
