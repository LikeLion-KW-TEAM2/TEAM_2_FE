import HeaderWithProfile from '@/components/HeaderWithProfile'
import NavLayout from '@/components/NavLayout'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import ModalMyIcecream from './components/ModalMyIcecream'
import { useModal } from '@/hooks/useModal'

const Icecream = () => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <NavLayout>
        <HeaderWithProfile />
        <div className="flexBetweenAlign">
          <div className="flexColumn gap-1 text-large font-medium">
            <p>나만의 습관 아이스크림이 녹지 않도록</p>
            <p>도와주세요!</p>
          </div>
          <AiOutlineQuestionCircle
            size={20}
            className="text-primary-600"
            onClick={openModal}
          />
        </div>

        <section className="mt-4">
          <div className="aspect-icecream bg-slate-300" />
        </section>
      </NavLayout>
      <ModalMyIcecream isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default Icecream
