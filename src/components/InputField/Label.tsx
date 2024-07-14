import { ChildrenType } from '@/types/common'

const Label = ({ children }: ChildrenType) => {
  return <h5 className="text-secondary-700 font-bold">{children}</h5>
}

export default Label
