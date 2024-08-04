import HeaderWithProfile from '@/components/HeaderWithProfile'
import HabitCalendar from './components/HabitCalander'
import NavLayout from '@/components/NavLayout'
import { useHabitsByDate, useRecord } from '@/services/record/useRecordService'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import HabitList from './HabitList'
import Loading from '@/components/Loading'
import ErrorMessage from '@/components/ErrorMessage'

const Record = () => {
  dayjs.locale('ko')
  const now = dayjs().format('YYYY-MM-DD')
  const [selectedDate, setSelectedDate] = useState<string>(now)
  const {
    data: recordData,
    isFetching: recordFetching,
    isError: recordError,
  } = useRecord()
  const {
    data: habitsByDateData,
    isFetching: habitsByDateFetching,
    isError: habitsByDateError,
    refetch,
  } = useHabitsByDate(selectedDate || now)

  useEffect(() => {
    if (selectedDate) refetch()
  }, [selectedDate, refetch])

  if (recordFetching || habitsByDateFetching) return <Loading />

  return (
    <NavLayout>
      <HeaderWithProfile src={recordData?.myImage} />
      <HabitCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      {recordError || habitsByDateError ? (
        <div className="mt-[60px]">
          <ErrorMessage>습관 목록이 없습니다.</ErrorMessage>
        </div>
      ) : (
        <HabitList
          list={recordData?.habits || []}
          habitsData={habitsByDateData?.habits}
          selectedDate={selectedDate}
          refetch={refetch}
        />
      )}
    </NavLayout>
  )
}

export default Record
