import { Modal } from '@/components/modal/Modal'
import { ModalType } from '@/types/common'
import { BsSend } from 'react-icons/bs'

const ModalIceCream = ({ isOpen, closeModal }: ModalType) => {
  return (
    <Modal closeBtn isOpen={isOpen} closeModal={closeModal}>
      <h4 className="mb-3 text-center font-bold">고롷케님의 아이스크림</h4>
      <div className="mb-3 h-[280px] bg-slate-300" />
      <p className="mb-1 text-small font-medium">습관 목록</p>
      <ul className="grid list-disc grid-cols-2 items-center text-xsmall">
        <li className="ml-4">다리 꼬기</li>
        <li className="ml-4">짝다리 짚기</li>
      </ul>

      <div className="mb-2 mt-5 text-xsmall text-primary-600">
        <p>응원의 한마디를 남겨주세요!</p>
        <p>친구분의 방명록에 기록됩니다.</p>
      </div>
      <div className="flexAlign rounded-2xl bg-secondary-100 px-3 py-2">
        <input
          className="flex-1 bg-transparent text-secondary-900 placeholder:text-secondary-500 focus:outline-none"
          placeholder="응원의 한마디를 보내주세요."
        />
        <div className="rounded-full bg-secondary-200 p-1 text-secondary-500">
          <BsSend size={16} className="-translate-x-[1px] translate-y-[1px]" />
        </div>
      </div>
    </Modal>
  )
}

export default ModalIceCream
