import { ReactNode } from 'react'

interface IItem {
  onClick?: () => void
  children: ReactNode
}

const Item = ({ children, onClick }: IItem) => {
  return (
    <p
      className="mx-3 w-max border-b border-secondary-300 px-3 py-2 first:pt-0 last:border-none last:pb-0"
      onClick={onClick}
    >
      {children}
    </p>
  )
}

export default Item
