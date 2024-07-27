import Button from '../Button'
import useTouchEvent from '@/hooks/useTouchEvent'
import { Link } from 'react-router-dom'
import SectionText from './SectionText'
import SectionDot from './SectionDot'
import { ONBOARDING_DATA } from '@/constants'

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
        <Link to={'/login'} className="absolute bottom-5">
          <Button width="w-[167px]" size="large">
            시작하기
          </Button>
        </Link>
      )}
    </div>
  )
}

export default Onboarding
