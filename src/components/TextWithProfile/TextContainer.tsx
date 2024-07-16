import { ChildrenType } from '@/types/common'

const TextContainer = ({ children }: ChildrenType) => {
  return (
    <div className="flexCenter">
      <div className="flexColumn gap-1 text-xsmall">{children}</div>
    </div>
  )
}

export default TextContainer
