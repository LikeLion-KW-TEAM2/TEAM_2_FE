import { FaCheck } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import CheckInput from './CheckInput'

const SignupCheckTab = () => {
  return (
    <div className="text-secondary-900">
      <CheckInput />
      <div className="flexAlign">
        <input type="checkbox" className="hidden" />
        <FaCheck size={16} className="mr-2 text-secondary-400" />
        <label className="flex-1 text-medium font-medium">사용자 이용 약관 동의</label>
        <IoIosArrowForward size={20} />
      </div>
    </div>
  )
}

export default SignupCheckTab
