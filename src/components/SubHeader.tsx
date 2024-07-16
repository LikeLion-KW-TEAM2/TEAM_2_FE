import { ChildrenType } from '@/types/common'
import { AiOutlineLeft } from 'react-icons/ai'

const SubHeader = ({ children }: ChildrenType) => {
  return (
    <div className="flexBetween p-4">
      <AiOutlineLeft />
      <h4 className="font-bold text-primary-900">{children}</h4>
      <p className="text-small font-bold text-error-primary">삭제</p>
    </div>
  )
}

export default SubHeader
