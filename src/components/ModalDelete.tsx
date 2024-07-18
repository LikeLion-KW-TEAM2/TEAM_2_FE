import Button from '@/components/Button'
import { Modal } from '@/components/modal/Modal'
import { ModalType } from '@/types/common'

const ModalDelete = ({ isOpen, closeModal }: ModalType) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h4 className="mb-6 font-bold">정말로 삭제하실건가요?</h4>
      <div className="flex gap-3">
        <Button size="small">아니야! 미안해</Button>
        <Button size="small" error>
          응! 말리지마
        </Button>
      </div>
    </Modal>
  )
}

export default ModalDelete
