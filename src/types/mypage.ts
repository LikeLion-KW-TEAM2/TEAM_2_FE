export interface IFriend {
  userId: string
  name: string
  image: string
  count?: number
}

interface IHabit {
  name: string
  startDate: string
  endDate: string
}

export interface AccountInfoRequest {
  name: string
  myImage: string | File
}

export type EditAccountInfoRequest = AccountInfoRequest

export interface MypageResponse {
  name: string
  myImage: string
}

export interface UploadImageResponse {
  name: string
  myImage: File
}

export type AccountInfoResponse = {
  name: string
  myImage: string
}

export type FriendListResponse = IFriend[]
export type CompleteHabitResponse = IHabit[]
