import { FriendListResponse, MypageResponse } from '@/types/mypage'
import { getData } from '../service'

const GET = {
  mypage(): Promise<MypageResponse> {
    return getData(`/mypage`)
  },
  friendList(): Promise<FriendListResponse> {
    return getData(`/mypage/friend`)
  },
}

const mypageService = {
  GET,
}

export default mypageService
