import { useModal } from '@/hooks/useModal'
import { AiOutlineLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import ModalDelete from './ModalDelete'
import { ISubHeader } from '@/types/common'

const SubHeader = ({
  hidden = false,
  children,
  handleClickDelete,
}: ISubHeader) => {
  const navigate = useNavigate()
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <div className="flexCenter relative mb-3 p-4">
        <AiOutlineLeft
          size={20}
          className="absolute left-4 top-5 cursor-pointer text-secondary-400"
          onClick={() => navigate(-1)}
        />
        <h5 className="font-bold text-primary-900">{children}</h5>
        <p
          className="absolute right-4 top-5 cursor-pointer text-medium font-bold text-error-primary"
          onClick={() => {
            !hidden && openModal()
          }}
        >
          {!hidden && '삭제'}
        </p>
      </div>

      {!hidden && handleClickDelete && (
        <ModalDelete
          isOpen={isOpen}
          closeModal={closeModal}
          handleClick={handleClickDelete}
        />
      )}
    </>
  )
}

export default SubHeader
