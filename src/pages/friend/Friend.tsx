import HeaderWithProfile from '@/components/HeaderWithProfile'
import FriendItem from './components/FriendItem'
import NavLayout from '@/components/NavLayout'

const Friend = () => {
  return (
    <NavLayout>
      <HeaderWithProfile />

      <div className="flexColumn gap-5">
        {[...Array(3)].map((_, i) => (
          <FriendItem key={i} />
        ))}
      </div>
    </NavLayout>
  )
}

export default Friend
