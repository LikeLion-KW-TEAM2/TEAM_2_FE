import Button from '@/components/Button'
import SubHeader from '@/components/SubHeader'
import { useModal } from '@/hooks/useModal'
import AddPageForm from './components/AddPageForm'
import { Modal } from '@/components/modal/Modal'

const RecordAdd = () => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <div>
      <SubHeader hidden>추가하기</SubHeader>
      <AddPageForm openModal={openModal} />

      <div className="flexColumn absolute bottom-10 left-4 right-4 gap-4">
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <h4 className="mb-6 font-bold">습관이 생성되었습니다.</h4>
          <Button
            type="submit"
            width="w-full"
            className="flex-1"
            size="small"
            handleClick={closeModal}
          >
            고마워
          </Button>
        </Modal>
      </div>
    </div>
  )
}

export default RecordAdd
