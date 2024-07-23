import SubHeader from '@/components/SubHeader'
import { useModal } from '@/hooks/useModal'
import ModalCompleteHabit from './components/ModalCompleteHabit'
import { useEditPage } from '@/services/record/useRecordService'
import { useParams } from 'react-router-dom'
import EditPageForm from './components/EditPageForm'

const RecordEdit = () => {
  const { isOpen, openModal, closeModal } = useModal()
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
        openModal={openModal}
      />
      <ModalCompleteHabit isOpen={isOpen} closeModal={closeModal} />
    </div>
  )
}

export default RecordEdit
