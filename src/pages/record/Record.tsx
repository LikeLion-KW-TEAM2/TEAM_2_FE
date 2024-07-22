import HeaderWithProfile from '@/components/HeaderWithProfile'
import HabitCalendar from './components/HabitCalander'
import NavLayout from '@/components/NavLayout'
import HabitItem from './components/HabitItem'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const RECORD_LIST = [
  { id: 0, habit: '다리 꼬기' },
  { id: 1, habit: '옆으로 누워서 자기' },
  { id: 2, habit: '짝다리 짚기' },
]

const Record = () => {
  return (
    <NavLayout>
      <HeaderWithProfile />
      <HabitCalendar />

      <div className="flexColumn mt-[60px] flex-1 gap-6 overflow-y-scroll scrollbar-hide">
        {RECORD_LIST.map(({ id, habit }) => (
          <HabitItem id={id} habit={habit} key={id} />
        ))}
        <div className="flexAlign cursor-pointer gap-2 self-center text-secondary-500">
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
