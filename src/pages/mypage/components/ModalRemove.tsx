import Button from '@/components/Button'
import { Modal } from '@/components/modal/Modal'
import { ModalClickType } from '@/types/common'

const ModalRemove = ({ isOpen, closeModal, handleClick }: ModalClickType) => {
  const handleClickDeleteButton = () => {
    try {
      handleClick()
      closeModal()
    } catch {
      console.log('실패')
    }
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h4 className="mb-6 font-bold">정말로 탈퇴하실건가요?</h4>
      <div className="flex gap-3">
        <Button size="small" handleClick={closeModal}>
          아니야! 미안해
        </Button>
        <Button size="small" error handleClick={handleClickDeleteButton}>
          응! 말리지마
        </Button>
      </div>
    </Modal>
  )
}

export default ModalRemove
