import Button from '@/components/Button'
import { InputField } from '@/components/InputField'
import { FormProvider } from 'react-hook-form'
import SelectPeriod from './SelectPeriod'
import SelectPrivacy from './SelectPrivacy'
import { useEditForm } from '@/hooks/schema/useEditForm'
import { useEditHabit } from '@/services/record/useRecordService'
import { IEditForm, EditFormType } from '@/types/record'

const EditPageForm = ({
  id,
  dday,
  name,
  periodType,
  privacy,
  openOvercomModal,
  openSuccessModal,
}: EditFormType) => {
  const IS_COMPLETED = dday === 0
  const { mutate: editHabit } = useEditHabit()

  const formMethod = useEditForm({
    name: name || '',
    periodType: periodType || 5,
    privacy: privacy || 0,
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = formMethod

  const handleSubmitEditHabit = (formData: IEditForm) => {
    editHabit({ habitId: id, formData })
    openSuccessModal()
  }

  return (
    <FormProvider {...formMethod}>
      <form
        className="flexColumn gap-[40px]"
        onSubmit={handleSubmit(handleSubmitEditHabit)}
      >
        <InputField>
          <InputField.Label error={errors?.name}>NOT-TO-DO</InputField.Label>
          <InputField.Input type="text" register={register('name')} />
        </InputField>

        <SelectPeriod setValue={setValue} />
        <SelectPrivacy setValue={setValue} />

        <div className="flexColumn absolute bottom-10 left-4 right-4 gap-4">
          <Button type="submit" width="w-full" size="medium">
            완료
          </Button>
          <Button
            width="w-full"
            size="medium"
            handleClick={openOvercomModal}
            disabled={!IS_COMPLETED}
          >
            {dday === 0 ? '습관 극복 완료' : `습관 극복 완료 (D-${dday})`}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default EditPageForm
