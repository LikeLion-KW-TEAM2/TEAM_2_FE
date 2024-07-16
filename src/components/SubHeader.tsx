import { ChildrenType } from '@/types/common'
import { AiOutlineLeft } from 'react-icons/ai'

const SubHeader = ({ children }: ChildrenType) => {
  return (
    <div className="flexBetweenAlign p-4">
      <AiOutlineLeft size={24} />
      <h4 className="font-bold text-primary-900">{children}</h4>
      <p className="text-medium font-medium text-error-primary">삭제</p>
    </div>
  )
}

export default SubHeader
