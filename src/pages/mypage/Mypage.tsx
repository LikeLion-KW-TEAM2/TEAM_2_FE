import SubHeader from '@/components/SubHeader'
import defaultImg from '@/assets/images/default.svg'
import { IoIosArrowForward } from 'react-icons/io'

const MYPAGE_LIST = [
  '비밀번호 변경',
  '개선한 습관 목록',
  '친구 목록 관리',
  '서비스 이용 약관',
  '자주 묻는 질문',
]

const Mypage = () => {
  return (
    <div>
      <SubHeader hidden>마이페이지</SubHeader>
      <div className="flexAlign shadow-small mb-7 mt-8 gap-3 rounded-2xl border border-secondary-200 px-4 py-6">
        <img
          src={defaultImg}
          className="h-[52px] w-[52px] rounded-full border-[0.5px] border-secondary-200"
          alt="profile-img"
        />
        <div className="flexColumn mr-auto gap-1">
          <p className="text-medium font-medium">고롷케</p>
          <p className="text-xsmall">프로필 수정하기</p>
        </div>
        <IoIosArrowForward className="text-secondary-400" size={24} />
      </div>

      <ul className="flexColumn gap-7 px-2">
        {MYPAGE_LIST.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <li className="text-error-primary">계정 탈퇴</li>
      </ul>
    </div>
  )
}

export default Mypage
