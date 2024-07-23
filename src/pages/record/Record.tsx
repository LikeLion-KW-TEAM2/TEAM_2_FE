import HeaderWithProfile from '@/components/HeaderWithProfile'
import HabitCalendar from './components/HabitCalander'
import NavLayout from '@/components/NavLayout'
import HabitItem from './components/HabitItem'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useRecord } from '@/services/record/useRecordService'

const Record = () => {
  const { data: recordData, status } = useRecord()

  if (status === 'pending') return null
  if (status === 'error') return null

  const { mylmage, list: recordList } = recordData

  return (
    <NavLayout>
      <HeaderWithProfile src={mylmage} />
      <HabitCalendar />

      <div className="flexColumn mt-[60px] flex-1 gap-6 overflow-y-scroll scrollbar-hide">
        {recordList.map(({ id, name, status, createdAt }) => (
          <HabitItem
            id={id}
            name={name}
            status={status}
            createdAt={createdAt}
            key={id}
          />
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
