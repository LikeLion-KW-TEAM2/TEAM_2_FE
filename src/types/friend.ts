export interface FriendType {
  userId: string
  name: string
  image: string
  count: number
}

export interface SearchFriend {
  userId: string
  name: string
  image: string
  isFriend: boolean
}

export type SearchResponse = SearchFriend[]

export interface FriendPageResponse {
  myImage: string
  friends: FriendType[]
}

export interface FriendIcecreamResponse {
  name: string
  countList: string[]
  level: number
}

export interface GuestbookRequest {
  userId: string
  content: string
}
