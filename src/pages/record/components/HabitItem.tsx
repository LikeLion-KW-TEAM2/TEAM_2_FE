import { useCheckHabit } from '@/services/record/useRecordService'
import { HabitsByDateResponse, Record } from '@/types/record'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HabitItem = ({
  id,
  name,
  status,
  selectedDate,
  refetch,
}: Record & {
  refetch: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<HabitsByDateResponse, Error>>
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(status === 1)
  const { mutate: checkMutate } = useCheckHabit()
  const handleCheckHabit = () => {
    checkMutate(
      { habitId: id, date: selectedDate as string },
      { onSuccess: () => refetch() },
      // { onSuccess: () => setIsChecked((prev) => !prev) },
    )
  }

  useEffect(() => {
    setIsChecked(status === 1)
  }, [status])

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
