import HeaderWithProfile from '@/components/HeaderWithProfile'
import FriendItem from './components/FriendItem'
import NavLayout from '@/components/NavLayout'
import SearchInput from './components/SearchInput'
import { useNavigate } from 'react-router-dom'
import { useModal } from '@/hooks/useModal'
import ModalFriendIceCream from './components/ModalFriendIceCream'

const Friend = () => {
  const navigate = useNavigate()
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <NavLayout>
      <HeaderWithProfile />

      <section className="mb-8" onClick={() => navigate('/friend/search')}>
        <SearchInput />
      </section>

      <section className="flexColumn">
        {[...Array(7)].map((_, i) => (
          <FriendItem key={i} openModal={openModal} />
        ))}
      </section>

      <ModalFriendIceCream isOpen={isOpen} closeModal={closeModal} />
    </NavLayout>
  )
}

export default Friend
