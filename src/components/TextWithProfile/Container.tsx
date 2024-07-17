import { ChildrenType } from '@/types/common'

const Container = ({ children }: ChildrenType) => {
  return <div className="flex gap-3">{children}</div>
}

export default Container
