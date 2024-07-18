interface ICurrentTabWithSetFunc {
  currentTab: number
  onDotClick: (index: number) => void
}

const SectionDot = ({ currentTab, onDotClick }: ICurrentTabWithSetFunc) => {
  return (
    <div className="mb-6 flex gap-2">
      {[...Array(3)].map((_, index) => {
        const dotStyle =
          index === currentTab ? 'w-6 bg-primary-600' : 'w-2 bg-secondary-300'
        return (
          <div
            key={index}
            className={`h-2 cursor-pointer rounded-full opacity-90 ${dotStyle}`}
            onClick={() => onDotClick(index)}
          />
        )
      })}
    </div>
  )
}

export default SectionDot
