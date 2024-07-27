import ErrorMessage from '@/components/ErrorMessage'
import SubHeader from '@/components/SubHeader'
import { useCompleteHabits } from '@/services/mypage/useMypageService'
import dayjs from 'dayjs'

const CompleteHabit = () => {
  const { data: habits, status } = useCompleteHabits()

  if (status === 'pending') return null

  return (
    <div className="flexColumn h-full">
      <SubHeader hidden>개선된 습관 목록</SubHeader>

      <div className="flexColumn flex-1 gap-3 overflow-y-scroll pb-3 scrollbar-hide">
        {habits?.map(({ name, startDate, endDate }, index) => (
          <div
            className="flexColumn gap-[10px] rounded-2xl border border-secondary-100 p-4 shadow-sm"
            key={index}
          >
            <p className="text-medium font-bold text-secondary-900">{name}</p>
            <p className="text-xsmall text-secondary-700">
              {dayjs(startDate).format('YYYY/MM/DD')} -
              {dayjs(endDate).format('YYYY/MM/DD')}
            </p>
          </div>
        ))}
        {!habits && <ErrorMessage>개선된 습관 목록이 없습니다.</ErrorMessage>}
      </div>
    </div>
  )
}

export default CompleteHabit
