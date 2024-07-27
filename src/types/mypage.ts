export interface MypageResponse {
  name: string
  image: string
}

export interface FriendType {
  userId: string
  name: string
  image: string
  count?: number
}

export type FriendListResponse = FriendType[]
export interface AccountInfoResponse {
  name: string
  myImage: string
}

interface Habit {
  name: string
  startDate: string
  endDate: string
}

export type CompleteHabitResponse = Habit[]

export type AccountInfoRequest = AccountInfoResponse
export type EditAccountInfoRequest = AccountInfoResponse
