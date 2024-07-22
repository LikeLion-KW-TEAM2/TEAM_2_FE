import { instance } from '../service'
import { IcecreamResponse } from '@/types/icecream'

const GET = {
  icecream(): Promise<IcecreamResponse> {
    return instance.get(`/icecream`)
  },
}

const icecreamService = {
  GET,
}

export default icecreamService
