import HeaderWithProfile from '@/components/HeaderWithProfile'
import FriendItem from './components/FriendItem'
import NavLayout from '@/components/NavLayout'
import SearchInput from './components/SearchInput'
import { useNavigate } from 'react-router-dom'
import { useModal } from '@/hooks/useModal'
import { Modal } from '@/components/modal/Modal'
import { BsSend } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import ModalIceCream from './components/ModalIceCream'

const Friend = () => {
  const navigate = useNavigate()
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <NavLayout>
      <HeaderWithProfile />

      <section className="mb-8" onClick={() => navigate('/friend/search')}>
        <SearchInput />
      </section>

      <section className="flexColumn gap-5">
        {[...Array(7)].map((_, i) => (
          <FriendItem key={i} openModal={openModal} />
        ))}
      </section>

      <ModalIceCream isOpen={isOpen} closeModal={closeModal} />
    </NavLayout>
  )
}

export default Friend
