import { useToggle } from '@/hooks/useToggle'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HabitItem = ({ item }: { item: string }) => {
  const [isChecked, handleChecked] = useToggle()

  return (
    <div className="flexAlign gap-3">
      <div className="cursor-pointer" onClick={handleChecked}>
        {isChecked ? (
          <AiOutlineClose size={20} className="text-error-primary" />
        ) : (
          <div className="h-[20px] w-[20px] rounded-full border border-secondary-300 bg-secondary-100" />
        )}
      </div>

      <p className="mr-auto">{item}</p>
      <Link to={'/record/edit'}>
        <p className="cursor-pointer border-b-[0.3px] border-secondary-600 text-xsmall font-bold">
          수정
        </p>
      </Link>
    </div>
  )
}

export default HabitItem
