import { RecordResponse } from '@/types/record'
import { instance } from '../service'

const GET = {
  record(): Promise<RecordResponse> {
    return instance.get(`/home`)
  },
}

const PUT = {
  check(habitId: number) {
    return instance.put(`/home/habit/check/${habitId}`)
  },
}

const DELETE = {
  deleteHabit(habitId: number) {
    return instance.delete(`/home/habit/delete/${habitId}`)
  },
}

const recordService = { GET, PUT, DELETE }

export default recordService
