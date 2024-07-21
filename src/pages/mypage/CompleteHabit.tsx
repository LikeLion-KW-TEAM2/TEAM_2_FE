import SubHeader from '@/components/SubHeader'
import { useCompleteHabits } from '@/services/mypage/useMypageService'

const CompleteHabit = () => {
  const { data: habits, status } = useCompleteHabits()

  if (status === 'pending') return null
  if (status === 'error') return null

  return (
    <div className="flexColumn h-full">
      <SubHeader hidden>개선된 습관 목록</SubHeader>

      <div className="flexColumn flex-1 gap-3 overflow-y-scroll pb-3 scrollbar-hide">
        {habits.list.map(({ habits_id, habits_term }, index) => (
          <div
            className="flexColumn gap-[10px] rounded-2xl border border-secondary-100 p-4 shadow-sm"
            key={index}
          >
            <p className="text-medium font-medium text-secondary-900">
              {habits_id}
            </p>
            <p className="text-xsmall text-secondary-700">{habits_term}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompleteHabit
