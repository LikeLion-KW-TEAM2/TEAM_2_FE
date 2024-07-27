import { InputField } from '@/components/InputField'
import { FormProvider } from 'react-hook-form'
import { useAddHabit } from '@/services/record/useRecordService'
import { IAddForm } from '@/types/record'
import SelectPeriod from './SelectPeriod'
import SelectPrivacy from './SelectPrivacy'
import Button from '@/components/Button'
import { useAddForm } from '@/hooks/useAddForm'

const AddPageForm = ({ openModal }: { openModal: () => void }) => {
  const { mutate: addHabit } = useAddHabit()
  const formMethod = useAddForm()

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = formMethod

  const handleSubmitAddHabit = (formData: IAddForm) => {
    addHabit(formData)
    openModal()
  }
  return (
    <FormProvider {...formMethod}>
      <form
        className="flexColumn gap-[40px]"
        onSubmit={handleSubmit(handleSubmitAddHabit)}
      >
        <InputField>
          <InputField.Label error={errors?.name}>NOT-TO-DO</InputField.Label>
          <InputField.Input
            type="text"
            placeholder="고치고 싶은 습관을 적어주세요."
            register={register('name')}
          />
        </InputField>

        <SelectPeriod setValue={setValue} />
        <SelectPrivacy setValue={setValue} />

        <div className="flexColumn absolute bottom-10 left-4 right-4 gap-4">
          <Button type="submit" width="w-full" size="medium">
            완료
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default AddPageForm
