import { ModalType } from './common'

interface IFriend {
  userId: string
  name: string
  image: string
  count: number
}

interface ISearchFriend {
  userId: string
  name: string
  image: string
  isFriend: boolean
}

export interface ISearchResult {
  openModal: () => void
  searchData: SearchResponse | undefined
  status: string
}

export interface IFriendItem {
  friend: IFriend
}

export type IModalIcecream = ModalType & { userId: string }

export interface GuestbookRequest {
  userId: string
  content: string
}

export type SearchResponse = ISearchFriend[]

export interface FriendPageResponse {
  myImage: string
  friends: IFriend[]
}

export interface FriendIcecreamResponse {
  name: string
  habits: string[]
  icecream: number
}
