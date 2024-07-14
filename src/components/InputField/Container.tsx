import { ChildrenType } from '@/types/common'

const Container = ({ children }: ChildrenType) => {
  return <div className="flexColumn gap-2">{children}</div>
}

export default Container
