import { CgClose } from 'react-icons/cg'
import ModalPortal from './ModalPortal'
import { IModal } from '@/types/common'

export function Modal({
  children,
  closeBtn = false,
  isOpen,
  closeModal,
}: IModal) {
  const closeHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    closeModal()
  }

  return (
    <ModalPortal>
      {isOpen ? (
        <>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[#D9D9D9] opacity-80" />
          <div
            className="flexCenter absolute bottom-0 left-0 right-0 top-0"
            onClick={closeHandler}
          >
            <div
              className="z-7 relative rounded-2xl bg-white px-8 py-12"
              onClick={(e: any) => e.stopPropagation()}
            >
              {closeBtn && (
                <CgClose
                  size={16}
                  className="absolute right-4 top-4 cursor-pointer"
                  onClick={closeModal}
                />
              )}
              {children}
            </div>
          </div>
        </>
      ) : null}
    </ModalPortal>
  )
}
