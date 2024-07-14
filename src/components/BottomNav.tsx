import { ReactNode } from 'react'
import { TbPencilCheck } from 'react-icons/tb'
import { PiIceCreamBold, PiUsersThreeBold } from 'react-icons/pi'
import { BiBookHeart } from 'react-icons/bi'

const NAV_ITEMS = [
  { name: '기록', icon: <TbPencilCheck size={24} /> },
  { name: '아이스크림', icon: <PiIceCreamBold size={24} /> },
  { name: '친구', icon: <PiUsersThreeBold size={24} /> },
  { name: '방명록', icon: <BiBookHeart size={24} /> },
]

interface Item {
  item: {
    name: string
    icon: ReactNode
  }
}

const NavItem = ({ item }: Item) => {
  return (
    <div className="flexColumnAlign text-secondary-400 font-medium">
      {item.icon}
      <p className="text-xsmall">{item.name}</p>
    </div>
  )
}

const BottomNav = () => {
  return (
    <div className="flexAlign justify-evenly py-5">
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.name} item={item} />
      ))}
    </div>
  )
}

export default BottomNav
