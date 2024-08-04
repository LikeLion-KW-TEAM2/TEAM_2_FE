import { IHabits, IHabitList } from '@/types/record'
import HabitItem from './components/HabitItem'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ErrorMessage from '@/components/ErrorMessage'
import Loading from '@/components/Loading'

const HabitList = ({
  list,
  habitsData,
  selectedDate,
  isLoading,
  isError,
  refetch,
}: IHabitList) => {
  const [habitList, setHabitList] = useState<IHabits[]>(list || [])

  useEffect(() => {
    if (habitsData) setHabitList(habitsData)
  }, [habitsData])

  if (isLoading) return <Loading />

  if (isError)
    return (
      <div className="mt-[60px]">
        <ErrorMessage>습관 목록이 없습니다.</ErrorMessage>
      </div>
    )

  return (
    <div className="flexColumn mt-[60px] flex-1 gap-6 overflow-y-scroll scrollbar-hide">
      {habitList.map(({ id, name, status, createdAt }) => (
        <HabitItem
          id={id}
          name={name}
          status={status}
          createdAt={createdAt}
          selectedDate={selectedDate}
          refetch={refetch}
          key={id}
        />
      ))}
      <div className="flexAlign cursor-pointer gap-2 self-center text-secondary-500">
        <AiOutlinePlusCircle size={12} />
        <Link to={'/record/add'}>
          <p className="text-medium">습관 추가하기</p>
        </Link>
      </div>
    </div>
  )
}

export default HabitList
