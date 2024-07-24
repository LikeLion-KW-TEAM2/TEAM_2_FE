import HeaderWithProfile from '@/components/HeaderWithProfile'
import HabitCalendar from './components/HabitCalander'
import NavLayout from '@/components/NavLayout'
import { useHabitsByDate, useRecord } from '@/services/record/useRecordService'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import HabitList from './HabitList'

const Record = () => {
  dayjs.locale('ko')
  const now = dayjs().format('YYYY-MM-DD')
  const [selectedDate, setSelectedDate] = useState<string>(now)
  const { data: recordData, status } = useRecord()
  const { data: habitsData, refetch } = useHabitsByDate(selectedDate || now)

  useEffect(() => {
    if (selectedDate) refetch()
  }, [selectedDate, refetch])

  if (status === 'pending') return null
  if (status === 'error') return null

  return (
    <NavLayout>
      <HeaderWithProfile src={recordData.mylmage} />
      <HabitCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <HabitList
        list={recordData.habits}
        habitsData={habitsData?.habits}
        selectedDate={selectedDate}
      />
    </NavLayout>
  )
}

export default Record
