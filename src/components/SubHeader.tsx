import { ReactNode } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'

interface ISubHeader {
  hidden?: boolean
  children: ReactNode
}

const SubHeader = ({ hidden = false, children }: ISubHeader) => {
  return (
    <div className="flexBetweenAlign mb-3 p-4">
      <AiOutlineLeft size={24} />
      <h4 className="font-bold text-primary-900">{children}</h4>
      <p className="text-medium font-medium text-error-primary">
        {!hidden && '삭제'}
      </p>
    </div>
  )
}

export default SubHeader
