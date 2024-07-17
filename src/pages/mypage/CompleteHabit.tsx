import SubHeader from '@/components/SubHeader'

const CompleteHabit = () => {
  return (
    <div>
      <SubHeader hidden>개선된 습관 목록</SubHeader>

      <div className="flexColumn gap-3">
        {[...Array(7)].map((_, i) => (
          <div
            className="flexColumn gap-[10px] rounded-2xl border border-secondary-100 p-4 shadow-sm"
            key={i}
          >
            <p className="text-medium font-medium text-secondary-900">
              턱 괴고 졸기
            </p>
            <p className="text-xsmall text-secondary-700">
              24/05/12 - 24/07/10
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompleteHabit
