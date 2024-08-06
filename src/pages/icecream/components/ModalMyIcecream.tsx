import { Modal } from '@/components/modal/Modal'
import { ModalType } from '@/types/common'

const ModalMyIcecream = ({ isOpen, closeModal }: ModalType) => {
  return (
    <Modal closeBtn isOpen={isOpen} closeModal={closeModal}>
      <h4 className="mb-8 text-center font-bold">나만의 아이스크림</h4>
      <ul className="flexColumn mb-14 list-decimal gap-4 pl-5">
        <li>한달마다 아이스크림이 제공됩니다.</li>
        <li>습관이 체크될 때마다 아이스크림이 녹아요.</li>
        <li>
          한달동안 등록된 습관의 개수에 따라 아이스크림의 녹는 정도가
          결정됩니다.
        </li>
      </ul>

      <p className="text-center text-medium font-bold text-primary-600">
        자 그럼 아이스크림을 지키러 가볼까요?
      </p>
    </Modal>
  )
}

export default ModalMyIcecream
