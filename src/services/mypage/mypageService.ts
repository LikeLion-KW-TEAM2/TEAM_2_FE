import { MypageResponse } from '@/types/mypage'
import { getData } from '../service'

const GET = {
  mypage(): Promise<MypageResponse> {
    return getData(`/mypage`)
  },
}

const mypageService = {
  GET,
}

export default mypageService
