export interface MypageResponse {
  name: string
  profileImage: string
}

export interface FriendType {
  userId: string
  name: string
  profileImage: string
}
export interface FriendListResponse {
  list: FriendType[]
}
