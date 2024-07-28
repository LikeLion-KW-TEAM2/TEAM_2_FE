import { AiOutlineCheckCircle } from 'react-icons/ai'
import onboardingIcecream from '@/assets/images/onboarding.svg'
import { TbPencilCheck } from 'react-icons/tb'
import { PiIceCreamBold, PiUsersThreeBold } from 'react-icons/pi'
import { BiBookHeart } from 'react-icons/bi'

export const ONBOARDING_DATA = [
  {
    image: <AiOutlineCheckCircle className="h-24 w-24 text-primary-500" />,
    header: '나만의 습관 기록',
    first: '안좋은 습관들을 등록하고',
    second: '행동 여부를 체크해보세요.',
  },
  {
    image: <img src={onboardingIcecream} alt="onboarding-img" />,
    header: '아이스크림을 지켜라',
    first: '안좋은 습관을 체크할 때마다',
    second: '아이스크림이 녹아요.',
  },
  {
    image: (
      <div className="flexColumn w-4/5 gap-3 rounded-2xl border border-secondary-100 px-4 py-3 shadow-sm">
        <p className="text-medium font-medium text-secondary-900">
          참기 힘들겠지만 같이 한번 해보자!
        </p>
        <p className="self-end text-xsmall font-medium text-primary-500">
          고로케
        </p>
      </div>
    ),
    header: '친구와 함께 이겨내자',
    first: '친구의 아이스크림을 구경하고',
    second: '응원의 말도 적을 수 있어요.',
  },
]

export const NAV_ITEMS = [
  { name: '기록', link: '/record', icon: <TbPencilCheck size={24} /> },
  { name: '아이스크림', link: '/icecream', icon: <PiIceCreamBold size={24} /> },
  { name: '친구', link: '/friend', icon: <PiUsersThreeBold size={24} /> },
  { name: '방명록', link: '/guestbook', icon: <BiBookHeart size={24} /> },
]

export const SIGNUP_HEADER = [
  '돈두댓에서 사용할 정보를 기입해주세요.',
  '돈두댓 서비스 이용 약관에 동의해주세요.',
]

export const AGREE_LIST = [
  '사용자 이용 약관 동의',
  '개인정보 수집 및 이용 동의',
  '광고성 정보 수신 동의 (선택)',
]

export const MYPAGE_LIST = [
  { text: '비밀번호 변경', link: '/mypage/password' },
  { text: '개선된 습관 목록', link: '/mypage/complete-habit' },
  { text: '친구 목록 관리', link: '/mypage/friend-list' },
  { text: '서비스 이용 약관', link: '/mypage' },
  { text: '자주 묻는 질문', link: '/mypage' },
]

export const PERIOD_TYPE = ['매일', '주중', '주말']
export const PRIVACY_ARR = ['모두 보기', '나만 보기']
