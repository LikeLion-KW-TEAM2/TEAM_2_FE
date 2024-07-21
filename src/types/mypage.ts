export interface MypageResponse {
  name: string
  image: string
}

export interface FriendType {
  userId: string
  name: string
  image: string
}
export interface FriendListResponse {
  list: FriendType[]
}

export interface AccountInfoResponse {
  name: string
  myImage: string
}

interface Habit {
  habits_id: string
  habits_term: string
}

export interface CompleteHabitResponse {
  list: Habit[]
}

export type AccountInfoRequest = AccountInfoResponse
export type EditAccountInfoRequest = AccountInfoResponse
