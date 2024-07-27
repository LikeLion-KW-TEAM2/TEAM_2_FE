import useCalendar from '@/hooks/useCalendar'
import useScroll from '@/hooks/useScroll'
import { IHabitCalendar } from '@/types/record'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const HabitCalendar = ({ selectedDate, setSelectedDate }: IHabitCalendar) => {
  const {
    now,
    year,
    month,
    daysInMonth,
    handlePreviousMonth,
    handleNextMonth,
  } = useCalendar()

  const {
    todayRef,
    containerRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUpOrLeave,
    handleDateClick,
  } = useScroll(setSelectedDate)

  const CURRENT_DAY_STYLE = `bg-primary-400 rounded-full`
  const SELECTED_DAY_STYLE = `bg-primary-200 rounded-full`

  return (
    <div className="margin-auto w-full">
      <div className="flexBetweenAlign mb-4 w-[170px]">
        <IoIosArrowBack
          size={20}
          className="cursor-pointer text-secondary-300"
          onClick={handlePreviousMonth}
        />
        <p className="text-large font-bold text-primary-700">
          {year}년 {month}월
        </p>
        <IoIosArrowForward
          size={20}
          className="cursor-pointer text-secondary-300"
          onClick={handleNextMonth}
        />
      </div>
      <div
        className="flex flex-nowrap overflow-x-scroll scrollbar-hide"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {Array.from({ length: daysInMonth }, (_, i) => {
          const date = `${year}-${month}-${i + 1}`
          const day = dayjs(date).format('dd')
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
