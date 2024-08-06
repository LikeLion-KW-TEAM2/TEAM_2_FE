import { Modal } from '@/components/modal/Modal'
import { ModalType } from '@/types/common'

const ModalMyIcecream = ({ isOpen, closeModal }: ModalType) => {
  return (
    <Modal closeBtn isOpen={isOpen} closeModal={closeModal}>
      <h4 className="mb-8 text-center font-bold">나만의 아이스크림</h4>
      <ul className="flexColumn mb-8 list-decimal gap-4 pl-5">
        <li>한달마다 아이스크림이 제공됩니다.</li>
        <li>습관이 체크될 때마다 아이스크림이 녹아요.</li>
        <li>
          한달동안 등록된 습관의 개수에 따라 아이스크림의 녹는 정도가
          결정됩니다.
        </li>
      </ul>

      <div className="my-8 text-center text-[10px]">
        <div className="mb-2">
          <p className="font-bold">환산 점수</p>
          <p>
            100 * ( 1 - ( 이번 달 총 체크 수 / 이번 달 가능한 총 체크의 수 ))
          </p>
        </div>
        <div>
          <p className="font-bold">아이스크림 등급</p>
          <p>(( 환산 점수 - 1) / 20) + 1</p>
        </div>
      </div>

      <p className="text-center text-medium font-bold text-primary-600">
        자 그럼 아이스크림을 지키러 가볼까요?
      </p>
    </Modal>
  )
}

export default ModalMyIcecream
