import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { useState } from 'react'

const HabitCalendar = () => {
  dayjs.locale('ko')
  const now = dayjs()
  const [year, setYear] = useState(now.get('year'))
  const [month, setMonth] = useState(now.get('month') + 1)
  const [date, setDate] = useState(now.get('date'))
  const daysInMonth = dayjs(`${year}-${month}`).daysInMonth()

  const CURRENT_DAY_STYLE = `bg-primary-300 rounded-full `

  return (
    <div className="margin-auto h-[450px] w-full">
      <p className="mb-4 text-large font-bold text-primary-700">{month}월</p>
      <div className="flex flex-nowrap overflow-x-scroll">
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = dayjs(`${year}-${month}-${i}`).format('dd')
          return (
            <div
              key={i}
              className={`flexColumnAlign ${day === '토' && 'text-primary-600'} ${day === '일' && 'text-error-primary'} ${now.format('YYYY-M-DD') === `${year}-${month}-${i + 1}` && CURRENT_DAY_STYLE} h-12 w-12 flex-shrink-0`}
            >
              <p className={`text-small`}>{day}</p>
              <p key={i + 1} className="text-large font-bold">
                {i + 1}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HabitCalendar
