export interface GuestbookContent {
  id: number
  content: string
  name: string
}
export interface GuestbookListByDay {
  date: string
  list: GuestbookContent[]
}

export interface GuestbookResponse {
  myImage: string
  guestBooks: GuestbookListByDay[]
}
