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
