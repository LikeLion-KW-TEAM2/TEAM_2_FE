import HeaderWithProfile from '@/components/HeaderWithProfile'
import NavLayout from '@/components/NavLayout'
import { useModal } from '@/hooks/useModal'
import { BiTrash } from 'react-icons/bi'
import ModalGuestbook from './components/ModalGuestbook'

const MESSAGES = [
  {
    date: '24/07/17',
    content: [
      { name: '고로케', message: '얼마 안남았다 조금만 버텨' },
      {
        name: '고로냐',
        message: '짝다리 짚는거 진짜 나도 빨리 고쳐야하는데.. 잘해보자',
      },
    ],
  },
  {
    date: '24/07/15',
    content: [
      { name: '고로케', message: '얼마 안남았다 조금만 버텨' },
      {
        name: '고로냐',
        message: '짝다리 짚는거 진짜 나도 빨리 고쳐야하는데.. 잘해보자',
      },
    ],
  },
]

const Guestbook = () => {
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <>
      <NavLayout>
        <HeaderWithProfile />

        <section className="flexColumn gap-4">
          {MESSAGES.map(({ date, content }) => (
            <div key={date} className="flexColumn mb-7 gap-2">
              <h6 className="font-bold text-primary-600">{date}</h6>
              {content.map(({ name, message }, index) => (
                <div
                  key={index}
                  className="flexColumn justify-end gap-3 rounded-2xl border border-secondary-100 px-4 py-3 shadow-small"
                >
                  <p className="text-medium font-medium text-secondary-800">
                    {message}
                  </p>
                  <div className="flexAlign gap-1 self-end">
                    <p className="text-xsmall font-medium text-primary-500">
                      {name}
                    </p>
                    <BiTrash
                      size={12}
                      className="text-error-primary"
                      onClick={openModal}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>
      </NavLayout>
      <ModalGuestbook isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default Guestbook
