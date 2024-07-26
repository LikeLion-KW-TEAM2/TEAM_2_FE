import Button from '@/components/Button'
import { Modal } from '@/components/modal/Modal'
import { ModalType } from '@/types/common'

const ModalAddFriend = ({ isOpen, closeModal }: ModalType) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h4 className="mb-6 font-bold">친구 추가되었습니다.</h4>

      <Button width="w-full" size="small" handleClick={closeModal}>
        확인
      </Button>
    </Modal>
  )
}

export default ModalAddFriend
