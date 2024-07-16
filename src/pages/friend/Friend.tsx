import HeaderWithProfile from '@/components/HeaderWithProfile'
import FriendItem from './components/FriendItem'
import NavLayout from '@/components/NavLayout'
import SearchInput from './components/SearchInput'

const Friend = () => {
  return (
    <NavLayout>
      <HeaderWithProfile />
      <SearchInput />

      <div className="flexColumn gap-5">
        {[...Array(7)].map((_, i) => (
          <FriendItem key={i} />
        ))}
      </div>
    </NavLayout>
  )
}

export default Friend
