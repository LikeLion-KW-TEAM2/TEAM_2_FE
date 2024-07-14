import { useToggle } from '@/hooks/useToggle'
import { FaCheck } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

const CheckInput = () => {
  const [isChecked, handleIsChecked] = useToggle()
  console.log(isChecked)

  return (
    <div className="flexAlign" onClick={handleIsChecked}>
      <input type="checkbox" className="hidden" />
      <FaCheck
        size={16}
        className={`mr-2 ${isChecked ? 'text-primary-600' : 'text-secondary-300'}`}
      />
      <label className="text-medium flex-1 font-medium">사용자 이용 약관 동의</label>
      <IoIosArrowForward size={20} />
    </div>
  )
}

export default CheckInput
