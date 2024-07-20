import { FriendListResponse, MypageResponse } from '@/types/mypage'
import { deleteData, getData } from '../service'

const GET = {
  mypage(): Promise<MypageResponse> {
    return getData(`/mypage`)
  },
  friendList(): Promise<FriendListResponse> {
    return getData(`/mypage/friend`)
  },
}

const DELETE = {
  friend(id: string): Promise<any> {
    return deleteData(`/mypage/friend/${id}`)
  },
}

const mypageService = {
  GET,
  DELETE,
}

export default mypageService
