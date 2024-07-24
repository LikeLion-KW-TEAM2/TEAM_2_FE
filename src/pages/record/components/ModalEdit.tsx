import Button from '@/components/Button'
import { Modal } from '@/components/modal/Modal'
import { ModalType } from '@/types/common'

const ModalEdit = ({ isOpen, closeModal }: ModalType) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h4 className="mb-6 font-bold">수정이 완료되었습니다.</h4>
      <Button
        width="w-full"
        className="flex-1"
        size="small"
        handleClick={closeModal}
      >
        닫기
      </Button>
    </Modal>
  )
}

export default ModalEdit
