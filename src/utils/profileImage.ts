import defaultImg from '@/assets/images/default.svg'

const profileImage = (image?: string) => {
  console.log(image)
  if (image && image !== 'default') return image
  return defaultImg
}

export default profileImage
