import { FaCheck } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import CheckInput from './CheckInput'

const SignupCheckTab = () => {
  return (
    <div className="text-secondary-900">
      <CheckInput />
      {/* <div className="flexAlign">
        <input type="checkbox" className="hidden" />
        <FaCheck size={16} className="text-secondary-400 mr-2" />
        <label className="text-medium flex-1 font-medium">사용자 이용 약관 동의</label>
        <IoIosArrowForward size={20} />
      </div> */}
    </div>
  )
}

export default SignupCheckTab
