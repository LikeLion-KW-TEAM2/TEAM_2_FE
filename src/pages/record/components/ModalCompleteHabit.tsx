import Button from '@/components/Button'
import { Modal } from '@/components/modal/Modal'
import { ModalType } from '@/types/common'

const ModalCompleteHabit = ({ isOpen, closeModal }: ModalType) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h4 className="mb-6 font-bold">우와 극복하셨다고요?!</h4>
      <div className="flexColumn mb-6">
        <p>고생하셨어요.</p>
        <p>앞으로도 쭉 이어 나가셨으면 좋겠어요.</p>
        <p>힘내서 다른 습관도 극복해볼까요!</p>
      </div>
      <div className="flexColumn mb-6">
        <p>극복한 습관의 정보는 마이페이지에서</p>
        <p>확인하실 수 있어요!</p>
      </div>

      <div className="flex gap-3">
        <Button className="flex-1" size="small" handleClick={closeModal}>
          닫기
        </Button>
        <Button className="flex-1" size="small">
          보러가기
        </Button>
      </div>
    </Modal>
  )
}

export default ModalCompleteHabit
