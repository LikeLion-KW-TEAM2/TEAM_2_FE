import Button from '@/components/Button'
import { Modal } from '@/components/modal/Modal'
import { ModalType } from '@/types/common'

const ModalAccount = ({ isOpen, closeModal }: ModalType) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h4 className="mb-6 font-bold"> 회원 정보가 변경되었습니다.</h4>

      <Button width="w-full" size="small" handleClick={closeModal}>
        확인
      </Button>
    </Modal>
  )
}

export default ModalAccount
