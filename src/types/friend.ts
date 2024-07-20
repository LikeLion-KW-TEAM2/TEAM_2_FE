export interface FriendType {
  userId: string
  name: string
  profileImage: string
  count: number
}

export interface FriendPageResponse {
  myProfileImage: string
  list: FriendType[]
}
