import defaultImg from '@/assets/images/default.svg'

const Image = () => {
  return (
    <div className="h-[52px] w-[52px] rounded-full">
      <img
        src={defaultImg}
        className="h-[52px] w-[52px] rounded-full border-[0.5px] border-secondary-200 bg-secondary-50 object-cover"
        alt="default-img"
      />
    </div>
  )
}

export default Image
