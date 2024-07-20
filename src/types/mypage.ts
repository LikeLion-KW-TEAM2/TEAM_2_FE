export interface MypageResponse {
  name: string
  profileImage: string
}

interface FriendList {
  userId: string
  name: string
  profileImage: string
}
export interface FriendListResponse {
  list: FriendList[]
}
