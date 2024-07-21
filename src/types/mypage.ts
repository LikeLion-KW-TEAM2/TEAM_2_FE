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

export type AccountInfoRequest = AccountInfoResponse
export type EditAccountInfoRequest = AccountInfoResponse
