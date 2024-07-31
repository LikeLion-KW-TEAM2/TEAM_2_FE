import HeaderWithProfile from '@/components/HeaderWithProfile'
import NavLayout from '@/components/NavLayout'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import ModalMyIcecream from './components/ModalMyIcecream'
import { useModal } from '@/hooks/useModal'
import bgIcecream from '@/assets/images/icecream-bg.svg'
import { useIcecreamLevel } from '@/services/icecream/useIcecreamService'
import convertLevelToIcecream from '@/utils/convertLevelToIcecream'
import Loading from '@/components/Loading'
import { useState } from 'react'

const Icecream = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const { data: icecreamData, isPending } = useIcecreamLevel()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  if (isPending) return <Loading />

  return (
    <>
      <NavLayout>
        <HeaderWithProfile src={icecreamData?.myImage} />
        <div className="flexBetweenAlign">
          <div className="flexColumn gap-1 text-large font-medium">
            <p>나만의 습관 아이스크림이 녹지 않도록</p>
            <p>도와주세요!</p>
          </div>
          <AiOutlineQuestionCircle
            size={20}
            className="cursor-pointer text-primary-600"
            onClick={openModal}
          />
        </div>

        <section className="mt-4">
          <div className="relative">
            <img src={bgIcecream} className="w-full" alt="bg" />
            <div className="absolute bottom-16 w-full">
              <img
                src={convertLevelToIcecream(icecreamData?.icecream || 0)}
                className={`mx-auto w-[149px] cursor-pointer ${isAnimating && 'animate-bounce-up-down'}`}
                alt="icecream"
                onClick={handleClick}
              />
            </div>
          </div>
        </section>
      </NavLayout>
      <ModalMyIcecream isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default Icecream
