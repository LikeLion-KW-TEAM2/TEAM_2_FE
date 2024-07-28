import SubHeader from '@/components/SubHeader'
import { useModal } from '@/hooks/useModal'
import ModalCompleteHabit from './components/ModalCompleteHabit'
import { useDeleteHabit, useEditPage } from '@/services/record/useRecordService'
import { useNavigate, useParams } from 'react-router-dom'
import EditPageForm from './components/EditPageForm'
import ModalEdit from './components/ModalEdit'
import ErrorPage from '@/components/ErrorPage'
import Loading from '@/components/Loading'

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

  const { mutate: deleteHabit } = useDeleteHabit()
  const navigate = useNavigate()
  const { id } = useParams()
  const habitId = parseInt(id as string)
  const { data: editPage, isPending, isError } = useEditPage(habitId)

  const handleDeleteHabit = () => {
    deleteHabit(habitId)
    navigate('/')
  }

  if (isError) return <ErrorPage />

  return (
    <div>
      <SubHeader handleClickDelete={handleDeleteHabit}>수정하기</SubHeader>
      {isPending ? (
        <Loading />
      ) : (
        <EditPageForm
          id={editPage.id}
          dday={editPage.dday}
          name={editPage.name}
          periodType={editPage.periodType}
          privacy={editPage.privacy}
          openOvercomModal={openOvercomModal}
          openSuccessModal={openSuccessModal}
        />
      )}
      <ModalCompleteHabit
        isOpen={isOvercomModalOpen}
        closeModal={closeOvercomModal}
      />

      <ModalEdit isOpen={isSuccessModalOpen} closeModal={closeSuccessModal} />
    </div>
  )
}

export default RecordEdit
