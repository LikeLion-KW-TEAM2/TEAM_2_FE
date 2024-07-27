import dayjs from 'dayjs'
import { useState } from 'react'

const useCalendar = () => {
  dayjs.locale('ko')
  const now = dayjs()

  const [year, setYear] = useState(now.get('year'))
  const [month, setMonth] = useState(now.get('month') + 1)

  const daysInMonth = dayjs(`${year}-${month}`).daysInMonth()

  const handlePreviousMonth = () => {
    if (month === 1) {
      setMonth(12)
      setYear(year - 1)
    } else {
      setMonth(month - 1)
    }
  }

  const handleNextMonth = () => {
    if (month === 12) {
      setMonth(1)
      setYear(year + 1)
    } else {
      setMonth(month + 1)
    }
  }

  return {
    now,
    year,
    month,
    daysInMonth,
    handlePreviousMonth,
    handleNextMonth,
  }
}

export default useCalendar
