import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

interface IHabitCalendar {
  selectedDate: string
  setSelectedDate: Dispatch<SetStateAction<string>>
}

const HabitCalendar = ({ selectedDate, setSelectedDate }: IHabitCalendar) => {
  dayjs.locale('ko')
  const now = dayjs()
  const [year, setYear] = useState(now.get('year'))
  const [month, setMonth] = useState(now.get('month') + 1)
  const daysInMonth = dayjs(`${year}-${month}`).daysInMonth()

  const CURRENT_DAY_STYLE = `bg-primary-400 rounded-full`
  const SELECTED_DAY_STYLE = `bg-primary-200 rounded-full`

  const todayRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const [isDragMoved, setIsDragMoved] = useState(false)

  useEffect(() => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center' })
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      isDragging.current = true
      startX.current = e.pageX - containerRef.current.offsetLeft
      scrollLeft.current = containerRef.current.scrollLeft
      setIsDragMoved(false)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    e.preventDefault()
    setIsDragMoved(true)
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft
      const walk = x - startX.current
      containerRef.current.scrollLeft = scrollLeft.current - walk
    }
  }

  const handleMouseUpOrLeave = () => {
    isDragging.current = false
  }

  const handleDateClick = (date: string) => {
    if (!isDragMoved) {
      const formattedDate = dayjs(date).format('YYYY-MM-DD')
      setSelectedDate(formattedDate)
    }
  }
  return (
    <div className="margin-auto w-full">
      <p className="mb-4 text-large font-bold text-primary-700">{month}월</p>
      <div
        className="flex flex-nowrap overflow-x-scroll scrollbar-hide"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = dayjs(`${year}-${month}-${i}`).format('dd')
          const date = `${year}-${month}-${i + 1}`
          const isCurrentDay = now.format('YYYY-M-D') === date
          const isSelectedDay =
            selectedDate === dayjs(date).format('YYYY-MM-DD')
          return (
            <div
              key={i}
              ref={isCurrentDay ? todayRef : null}
              onClick={() => handleDateClick(date)}
              className={`flexColumnAlign ${day === '토' && 'text-primary-600'} ${day === '일' && 'text-error-primary'} ${isCurrentDay && CURRENT_DAY_STYLE} ${isSelectedDay && SELECTED_DAY_STYLE} h-12 w-12 flex-shrink-0 cursor-pointer`}
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
