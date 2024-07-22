import { instance } from '../service'

const PUT = {
  check(habitId: number) {
    return instance.put(`/home/habit/check/${habitId}`)
  },
}

const recordService = {
  PUT,
}

export default recordService
