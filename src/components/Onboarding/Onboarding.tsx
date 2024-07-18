import onboardingIcecream from '@/assets/images/onboarding.svg'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Button from '../Button'
import useTouchEvent from '@/hooks/useTouchEvent'
import { Link } from 'react-router-dom'
import SectionText from './SectionText'
import SectionDot from './SectionDot'

const ONBOARDING_DATA = [
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

const Onboarding = () => {
  const { currentTab, carouselRef, onDotClick, ...event } = useTouchEvent()

  return (
    <div className="flexCenter h-full">
      <div className="flexColumnAlign">
        <div
          ref={carouselRef}
          {...event}
          className="webkit-overflow-scrolling-touch flex overflow-auto overflow-x-hidden"
        >
          <SectionText data={ONBOARDING_DATA} />
        </div>

        <SectionDot currentTab={currentTab} onDotClick={onDotClick} />
      </div>

      {currentTab === 2 && (
        <Link to={'/record'} className="absolute bottom-5">
          <Button width="w-[167px]" size="large">
            시작하기
          </Button>
        </Link>
      )}
    </div>
  )
}

export default Onboarding