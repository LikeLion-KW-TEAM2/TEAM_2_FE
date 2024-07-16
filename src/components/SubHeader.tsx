import { ReactNode } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'

interface ISubHeader {
  hidden?: boolean
  children: ReactNode
}

const SubHeader = ({ hidden = false, children }: ISubHeader) => {
  return (
    <div className="flexCenter relative mb-3 p-4">
      <AiOutlineLeft size={24} className="absolute left-4 top-5" />
      <h4 className="font-bold text-primary-900">{children}</h4>
      <p className="absolute right-4 top-5 text-medium font-medium text-error-primary">
        {!hidden && '삭제'}
      </p>
    </div>
  )
}

export default SubHeader
