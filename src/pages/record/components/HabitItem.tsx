import { useToggle } from '@/hooks/useToggle'
import { useCheckHabit } from '@/services/record/useRecordService'
import { Record } from '@/types/record'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HabitItem = ({ id, name, status }: Record) => {
  const [isChecked, handleChecked] = useToggle(status === 1)
  const { mutate: checkMutate } = useCheckHabit()
  const handleCheckHabit = () => {
    checkMutate(id, { onSuccess: handleChecked })
  }

  return (
    <div className="flexAlign gap-3">
      <div className="cursor-pointer" onClick={handleCheckHabit}>
        {isChecked ? (
          <AiOutlineClose size={20} className="text-error-primary" />
        ) : (
          <div className="h-[20px] w-[20px] rounded-full border border-secondary-300 bg-secondary-100" />
        )}
      </div>

      <p className="mr-auto">{name}</p>
      <Link to={`/record/edit/${id}`}>
        <p className="cursor-pointer border-b-[0.3px] border-secondary-600 text-xsmall font-bold">
          수정
        </p>
      </Link>
    </div>
  )
}

export default HabitItem
