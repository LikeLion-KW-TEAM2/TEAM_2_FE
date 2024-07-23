import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import SubHeader from '@/components/SubHeader'
import { useModal } from '@/hooks/useModal'
import ModalCompleteHabit from './components/ModalCompleteHabit'
import { useEditPage } from '@/services/record/useRecordService'
import { useParams } from 'react-router-dom'
import { useEditForm } from '@/hooks/useEditForm'
import { FormProvider } from 'react-hook-form'
import SelectPeriod from './components/SelectPeriod'
import SelectPrivacy from './components/SelectPrivacy'

const RecordEdit = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const { id: habitId } = useParams()
  const { data: editPage, status } = useEditPage(parseInt(habitId as string))

  if (status === 'pending') return null
  if (status === 'error') return null

  const { id, dDay, name, periodType, privacy } = editPage

  const formMethod = useEditForm({
    name: name || '',
    periodType: periodType || 5,
    privacy: privacy || 0,
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = formMethod

  const handleSubmitEditHabit = () => {}

  return (
    <div>
      <SubHeader>수정하기</SubHeader>
      <FormProvider {...formMethod}>
        <form
          className="flexColumn gap-[40px]"
          onSubmit={handleSubmit(handleSubmitEditHabit)}
        >
          <InputField>
            <InputField.Label error={errors?.name}>NOT-TO-DO</InputField.Label>
            <InputField.Input type="text" register={register('name')} />
          </InputField>

          <SelectPeriod />
          <SelectPrivacy />

          <div className="flexColumn absolute bottom-10 left-4 right-4 gap-4">
            <Button type="submit" width="w-full" size="medium">
              완료
            </Button>
            <Button width="w-full" size="medium" handleClick={openModal}>
              습관 극복 완료
            </Button>
          </div>
        </form>
      </FormProvider>

      <ModalCompleteHabit isOpen={isOpen} closeModal={closeModal} />
    </div>
  )
}

export default RecordEdit
