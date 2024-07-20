import HeaderWithProfile from '@/components/HeaderWithProfile'
import FriendItem from './components/FriendItem'
import NavLayout from '@/components/NavLayout'
import SearchInput from './components/SearchInput'
import { useNavigate } from 'react-router-dom'
import { useFriendPageList } from '@/services/friend/useFriendService'

const Friend = () => {
  const navigate = useNavigate()
  const { data: friendData, status } = useFriendPageList()

  if (status === 'pending') return null
  if (status === 'error') return null

  return (
    <NavLayout>
      <HeaderWithProfile src={friendData.myProfileImage} />

      <section className="mb-8" onClick={() => navigate('/friend/search')}>
        <SearchInput />
      </section>

      <section className="flexColumn flex-1 overflow-y-scroll scrollbar-hide">
        {friendData?.list.map((friend) => (
          <FriendItem friend={friend} key={friend.userId} />
        ))}
      </section>
    </NavLayout>
  )
}

export default Friend
