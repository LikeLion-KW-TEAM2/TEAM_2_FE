import ModalPortal from './ModalPortal'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  closeModal: () => void
}

export function Modal({ children, isOpen, closeModal }: ModalProps) {
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
              className="z-7 rounded-2xl bg-white px-8 py-12"
              onClick={(e: any) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>
        </>
      ) : null}
    </ModalPortal>
  )
}
