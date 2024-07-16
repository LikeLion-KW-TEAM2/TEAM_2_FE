import Button from '@/components/Button'
import HeaderWithProfile from '@/components/HeaderWithProfile'
import { Modal } from '@/components/modal/Modal'
import NavLayout from '@/components/NavLayout'
import { useModal } from '@/hooks/useModal'
import { BiTrash } from 'react-icons/bi'
import ModalGuestbook from './components/ModalGuestbook'

const MESSAGES = [
  { name: '고롷케', content: '얼마 안남았다 조금만 버텨', date: '7/28' },
  {
    name: '고롷냐',
    content: '짝다리 짚는거 진짜 나도 빨리 고쳐야하는데.. 잘해보자',
    date: '7/8',
  },
  {
    name: '크로롱',
    content: '아이스크림이 엄청 화려하구만ㅋㅋㅋ',
    date: '6/13',
  },
]

const Guestbook = () => {
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <>
      <NavLayout>
        <HeaderWithProfile />

        <section className="flexColumn gap-4">
          {MESSAGES.map((message, index) => (
            <div
              key={index}
              className="flexColumn justify-end gap-3 rounded-2xl bg-secondary-100 px-4 py-3"
            >
              <p className="text-medium font-medium">{message.content}</p>
              <div className="flexAlign gap-1 self-end">
                <p className="text-xsmall font-medium text-primary-600">
                  {message.date} {message.name}
                </p>
                <BiTrash
                  size={12}
                  className="text-error-primary"
                  onClick={openModal}
                />
              </div>
            </div>
          ))}
        </section>
      </NavLayout>
      <ModalGuestbook isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default Guestbook
