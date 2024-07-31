import profileImage from '@/utils/profileImage'
import { Link } from 'react-router-dom'

interface IHeaderWithProfile {
  src?: string
}

const HeaderWithProfile = ({ src }: IHeaderWithProfile) => {
  return (
    <div className="flexBetweenAlign mb-10 mt-6">
      <Link to={'/record'}>
        <h1 className="font-bold text-primary-900">돈두댓</h1>
      </Link>
      <Link to={'/mypage'}>
        <img
          src={profileImage(src)}
          className="h-14 w-14 rounded-full border-[0.5px] border-secondary-200 bg-secondary-50 object-cover"
          alt="default-img"
        />
      </Link>
    </div>
  )
}

export default HeaderWithProfile
