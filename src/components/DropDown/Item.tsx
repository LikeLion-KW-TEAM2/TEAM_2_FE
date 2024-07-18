import { ChildrenType } from '@/types/common'

const Item = ({ children }: ChildrenType) => {
  return (
    <p className="mx-3 w-max border-b border-secondary-300 px-3 py-2 first:pt-0 last:border-none last:pb-0">
      {children}
    </p>
  )
}

export default Item
