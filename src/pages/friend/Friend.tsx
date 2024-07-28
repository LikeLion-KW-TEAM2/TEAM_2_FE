import HeaderWithProfile from '@/components/HeaderWithProfile'
import FriendItem from './components/FriendItem'
import NavLayout from '@/components/NavLayout'
import SearchInput from './components/SearchInput'
import { useFriendPageList } from '@/services/friend/useFriendService'
import Loading from '@/components/Loading'

const Friend = () => {
  const { data: friendData, isPending } = useFriendPageList()

  return (
    <NavLayout>
      <HeaderWithProfile src={friendData?.myImage} />
      <SearchInput />

      {isPending ? (
        <Loading />
      ) : (
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
      )}
    </NavLayout>
  )
}

export default Friend
