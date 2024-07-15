import { ReactNode } from 'react'
import { FaCheck } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

interface ICheckInput {
  isChecked: boolean
  handleClick: () => void
  children: ReactNode
}

const CheckInput = ({ isChecked, children, handleClick }: ICheckInput) => {
  return (
    <div className="flexAlign" onClick={handleClick}>
      <input type="checkbox" className="hidden" />
      <FaCheck
        size={16}
        className={`mr-2 ${isChecked ? 'text-primary-600' : 'text-secondary-300'}`}
      />
      <label className="flex-1 text-medium font-medium">{children}</label>
      <IoIosArrowForward size={20} className="text-secondary-400" />
    </div>
  )
}

export default CheckInput
