import SignupInputTab from './components/SignupInputTab'
import SignupCheckTab from './components/SignupCheckTab'
import { useState } from 'react'

const SIGNUP_HEADER = [
  '돈두댓에서 사용할 정보를 기입해주세요.',
  '돈두댓 서비스 이용 약관에 동의해주세요.',
]

const Signup = () => {
  const [currentTab, setCurrentTab] = useState<number>(0)

  return (
    <div className="flexColumn">
      <h4 className="text-primary-900 my-12 w-[260px] font-bold">{SIGNUP_HEADER[0]}</h4>

      <p className="text-small mb-2 text-end font-medium">({currentTab + 1}/2) Step</p>

      {currentTab === 0 && <SignupInputTab setCurrentTab={setCurrentTab} />}
      {currentTab === 1 && <SignupCheckTab />}
    </div>
  )
}

export default Signup
