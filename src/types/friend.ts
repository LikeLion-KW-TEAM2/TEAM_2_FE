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
  list: FriendType[]
}
