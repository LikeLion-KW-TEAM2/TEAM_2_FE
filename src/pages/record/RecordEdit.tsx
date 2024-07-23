import SubHeader from '@/components/SubHeader'
import { useModal } from '@/hooks/useModal'
import ModalCompleteHabit from './components/ModalCompleteHabit'
import { useEditPage } from '@/services/record/useRecordService'
import { useParams } from 'react-router-dom'
import EditPageForm from './components/EditPageForm'
import { Modal } from '@/components/modal/Modal'
import Button from '@/components/Button'

const RecordEdit = () => {
  const {
    isOpen: isOvercomModalOpen,
    openModal: openOvercomModal,
    closeModal: closeOvercomModal,
  } = useModal()
  const {
    isOpen: isSuccessModalOpen,
    openModal: openSuccessModal,
    closeModal: closeSuccessModal,
  } = useModal()

  const { id: habitId } = useParams()
  const { data: editPage, status } = useEditPage(parseInt(habitId as string))

  if (status === 'pending') return null
  if (status === 'error') return null

  return (
    <div>
      <SubHeader>수정하기</SubHeader>
      <EditPageForm
        id={editPage.id}
        overcome={editPage.overcome}
        name={editPage.name}
        periodType={editPage.periodType}
        privacy={editPage.privacy}
        openOvercomModal={openOvercomModal}
        openSuccessModal={openSuccessModal}
      />
      <ModalCompleteHabit
        isOpen={isOvercomModalOpen}
        closeModal={closeOvercomModal}
      />

      <Modal isOpen={isSuccessModalOpen} closeModal={closeSuccessModal}>
        <h4 className="mb-6 font-bold">수정이 완료되었습니다.</h4>
        <Button
          width="w-full"
          className="flex-1"
          size="small"
          handleClick={closeSuccessModal}
        >
          닫기
        </Button>
      </Modal>
    </div>
  )
}

export default RecordEdit
