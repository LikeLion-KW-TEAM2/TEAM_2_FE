import profileImage from '@/utils/profileImage'

export interface IImage {
  src?: string
}

const Image = ({ src }: IImage) => {
  return (
    <div className="h-[52px] w-[52px] rounded-full">
      <img
        src={profileImage(src)}
        className="h-[52px] w-[52px] rounded-full border-[0.5px] border-secondary-200 bg-secondary-50 object-cover"
        alt="default-img"
      />
    </div>
  )
}

export default Image
