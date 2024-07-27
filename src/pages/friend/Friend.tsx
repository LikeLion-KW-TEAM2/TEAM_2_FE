import HeaderWithProfile from '@/components/HeaderWithProfile'
import FriendItem from './components/FriendItem'
import NavLayout from '@/components/NavLayout'
import SearchInput from './components/SearchInput'
import { useFriendPageList } from '@/services/friend/useFriendService'

const Friend = () => {
  const { data: friendData, status } = useFriendPageList()

  if (status === 'pending') return null

  return (
    <NavLayout>
      <HeaderWithProfile src={friendData?.myImage} />
      <SearchInput />

      <div className="flexColumn flex-1 overflow-y-scroll scrollbar-hide">
        {friendData?.friends.map((friend) => (
          <FriendItem friend={friend} key={friend.userId} />
        ))}
        {friendData?.friends.length === 0 && (
          <p className="text-center text-secondary-500">
            친구 목록이 없습니다.
          </p>
        )}
      </div>
    </NavLayout>
  )
}

export default Friend
