import { ReactNode } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

interface ISubHeader {
  hidden?: boolean
  children: ReactNode
}

const SubHeader = ({ hidden = false, children }: ISubHeader) => {
  const navigate = useNavigate()

  return (
    <div className="flexCenter relative mb-3 p-4">
      <AiOutlineLeft
        size={20}
        className="absolute left-4 top-5 cursor-pointer text-secondary-400"
        onClick={() => navigate(-1)}
      />
      <h5 className="font-bold text-primary-900">{children}</h5>
      <p className="absolute right-4 top-5 cursor-pointer text-medium font-bold text-error-primary">
        {!hidden && '삭제'}
      </p>
    </div>
  )
}

export default SubHeader
