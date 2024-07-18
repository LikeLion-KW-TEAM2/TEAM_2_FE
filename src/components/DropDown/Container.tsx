import { ChildrenType } from '@/types/common'

const Container = ({ children }: ChildrenType) => {
  return (
    <div className="flexColumn absolute right-0 top-full z-10 rounded-2xl border border-secondary-200 bg-white py-3">
      {children}
    </div>
  )
}

export default Container
