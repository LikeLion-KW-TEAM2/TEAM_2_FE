import CheckInput from './CheckInput'
import { BsCheckSquareFill } from 'react-icons/bs'
import useCheckClick from '@/hooks/useCheckClick'

const AGREE_LIST = [
  '사용자 이용 약관 동의',
  '개인정보 수집 및 이용 동의',
  '광고성 정보 수신 동의 (선택)',
]

const SignupCheckTab = () => {
  const { isChecked, isAllChecked, handleCheckClick, handleAllCheckClick } =
    useCheckClick()

  return (
    <div className="text-secondary-900">
      <div className="flexAlign mb-8 gap-2" onClick={handleAllCheckClick}>
        <BsCheckSquareFill
          size={24}
          className={`${isAllChecked ? 'text-primary-600' : 'text-secondary-400'}`}
        />
        <h5 className="font-bold">모두 동의합니다.</h5>
      </div>

      <div className="flexColumn gap-5">
        {AGREE_LIST.map((item, index) => (
          <CheckInput
            key={index}
            isChecked={isChecked[index]}
            handleClick={() => handleCheckClick(index)}
          >
            {item}
          </CheckInput>
        ))}
      </div>
    </div>
  )
}

export default SignupCheckTab
