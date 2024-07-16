import HeaderWithProfile from '@/components/HeaderWithProfile'
import FriendItem from './components/FriendItem'
import NavLayout from '@/components/NavLayout'
import SearchInput from './components/SearchInput'
import { useNavigate } from 'react-router-dom'

const Friend = () => {
  const navigate = useNavigate()
  return (
    <NavLayout>
      <HeaderWithProfile />

      <section className="mb-8" onClick={() => navigate('/friend/search')}>
        <SearchInput />
      </section>

      <div className="flexColumn gap-5">
        {[...Array(7)].map((_, i) => (
          <FriendItem key={i} />
        ))}
      </div>
    </NavLayout>
  )
}

export default Friend
