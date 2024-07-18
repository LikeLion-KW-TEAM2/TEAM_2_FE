import HeaderWithProfile from '@/components/HeaderWithProfile'
import HabitCalendar from './components/HabitCalander'
import NavLayout from '@/components/NavLayout'
import HabitItem from './components/HabitItem'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const RECORD_LIST = ['다리 꼬기', '옆으로 누워서 자기', '짝다리 짚기']

const Record = () => {
  return (
    <NavLayout>
      <HeaderWithProfile />
      <HabitCalendar />

      <div className="flexColumn mt-[60px] gap-6">
        {RECORD_LIST.map((item) => (
          <HabitItem item={item} />
        ))}
        <div className="flexAlign gap-2 self-center text-secondary-500">
          <AiOutlinePlusCircle size={12} />
          <Link to={'/record/add'}>
            <p className="text-medium">추가하기</p>
          </Link>
        </div>
      </div>
    </NavLayout>
  )
}

export default Record
