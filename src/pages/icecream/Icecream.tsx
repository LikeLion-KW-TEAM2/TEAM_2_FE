import HeaderWithProfile from '@/components/HeaderWithProfile'
import NavLayout from '@/components/NavLayout'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import ModalMyIcecream from './components/ModalMyIcecream'
import { useModal } from '@/hooks/useModal'
import bgIcecream from '@/assets/images/icecream-bg.svg'
import icecream from '@/assets/images/icecream-1.svg'

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
          <div className="relative">
            <img src={bgIcecream} className="w-full" alt="bg" />
            <img
              src={icecream}
              className="absolute bottom-16 left-2/4 -translate-x-1/2 transition-all hover:-translate-y-4"
              alt="icecream"
            />
          </div>
        </section>
      </NavLayout>
      <ModalMyIcecream isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default Icecream
