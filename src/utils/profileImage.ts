import defaultImg from '@/assets/images/default.svg'

const profileImage = (image?: string) => {
  if (image && image !== 'default') return `${image}?${new Date().getTime()}`
  return defaultImg
}

export default profileImage
