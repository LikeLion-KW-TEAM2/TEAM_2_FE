import defaultImg from '@/assets/images/default.svg'
import { Link } from 'react-router-dom'

const HeaderWithProfile = () => {
  return (
    <div className="flexBetweenAlign mb-10 mt-6">
      <h1 className="font-bold text-primary-900">돈두댓</h1>
      <Link to={'/mypage'}>
        <img
          src={defaultImg}
          className="h-14 w-14 rounded-full border-[0.5px] border-secondary-200 bg-secondary-50 object-cover"
          alt="default-img"
        />
      </Link>
    </div>
  )
}

export default HeaderWithProfile
