import HeaderWithProfile from '@/components/HeaderWithProfile'
import FriendItem from './components/FriendItem'
import NavLayout from '@/components/NavLayout'
import SearchInput from './components/SearchInput'
import { useFriendPageList } from '@/services/friend/useFriendService'

const Friend = () => {
  const { data: friendData, status } = useFriendPageList()
  console.log(friendData)

  if (status === 'pending') return null
  if (status === 'error') return null

  return (
    <NavLayout>
      <HeaderWithProfile src={friendData.myImage} />

      <SearchInput />

      <section className="flexColumn flex-1 overflow-y-scroll scrollbar-hide">
        {friendData?.list.map((friend) => (
          <FriendItem friend={friend} key={friend.userId} />
        ))}
      </section>
    </NavLayout>
  )
}

export default Friend
