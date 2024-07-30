import Button from '../Button'
import useTouchEvent from '@/hooks/useTouchEvent'
import { Link } from 'react-router-dom'
import SectionText from './SectionText'
import SectionDot from './SectionDot'
import { ONBOARDING_DATA } from '@/constants'

const Onboarding = () => {
  const { currentTab, carouselRef, onDotClick, ...event } = useTouchEvent()

  return (
    <div className="flexColumnAlign h-full">
      <div className="flexColumnAlign flex-1 justify-center">
        <div
          ref={carouselRef}
          {...event}
          className="webkit-overflow-scrolling-touch flex overflow-auto overflow-x-hidden"
        >
          <SectionText data={ONBOARDING_DATA} />
        </div>

        <SectionDot currentTab={currentTab} onDotClick={onDotClick} />
      </div>

      <div className="h-[71px] py-5">
        {currentTab === 2 && (
          <Link to={'/login'}>
            <Button width="w-[167px]" size="large">
              시작하기
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Onboarding
