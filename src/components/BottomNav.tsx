import { NAV_ITEMS } from '@/constants'
import { ReactNode, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface Item {
  item: {
    name: string
    link: string
    icon: ReactNode
  }
  isCurrent: boolean
}

const NavItem = ({ item, isCurrent }: Item) => {
  const currentStyle = isCurrent
    ? 'text-secondary-900 font-bold'
    : 'text-secondary-400 font-medium'
  return (
    <Link to={item.link}>
      <div className={`flexColumnAlign gap-2 ${currentStyle}`}>
        {item.icon}
        <p className="text-xsmall">{item.name}</p>
      </div>
    </Link>
  )
}

const BottomNav = () => {
  const [currentTab, setCurrentTab] = useState<number>(0)
  const { pathname } = useLocation()

  useEffect(() => {
    const currentIndex = NAV_ITEMS.findIndex((item) =>
      item.link.includes(pathname),
    )
    setCurrentTab(currentIndex)
  }, [pathname])

  return (
    <div className="flexAlign justify-around py-5">
      {NAV_ITEMS.map((item, index) => (
        <NavItem key={item.name} item={item} isCurrent={index === currentTab} />
      ))}
    </div>
  )
}

export default BottomNav
