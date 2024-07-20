export interface FriendType {
  userId: string
  name: string
  image: string
  count: number
}

export interface FriendPageResponse {
  myImage: string
  list: FriendType[]
}
