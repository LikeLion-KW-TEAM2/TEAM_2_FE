import {
  AccountInfoRequest,
  AccountInfoResponse,
  CompleteHabitResponse,
  FriendListResponse,
  MypageResponse,
} from '@/types/mypage'
import { instance } from '../service'

const GET = {
  mypage(): Promise<MypageResponse> {
    return instance.get(`/mypage`)
  },
  friendList(): Promise<FriendListResponse> {
    return instance.get(`/mypage/friend`)
  },
  accountInfo(): Promise<AccountInfoResponse> {
    return instance.get(`/mypage/edit`)
  },
  completeHabit(): Promise<CompleteHabitResponse> {
    return instance.get(`/mypage/donehabits`)
  },
}

const POST = {
  editAccount(accountInfo: AccountInfoRequest): Promise<any> {
    return instance.post(`/mypage/edit`, accountInfo)
  },
  editPassword(password: string): Promise<any> {
    return instance.post(`/mypage/edit/password`, password)
  },
}

const DELETE = {
  friend(id: string): Promise<any> {
    return instance.delete(`/mypage/friend/${id}`)
  },
}

const mypageService = {
  GET,
  POST,
  DELETE,
}

export default mypageService
