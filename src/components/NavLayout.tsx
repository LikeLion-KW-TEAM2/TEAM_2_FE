import { ChildrenType } from '@/types/common'
import BottomNav from './BottomNav'

const NavLayout = ({ children }: ChildrenType) => {
  return (
    <div className="flexColumn h-full">
      <div className="flex-1 overflow-y-scroll scrollbar-hide">{children}</div>
      <BottomNav />
    </div>
  )
}

export default NavLayout
