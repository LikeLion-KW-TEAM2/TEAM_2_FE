export interface GuestbookContent {
  id: number
  userId: string
  writer: string
  content: string
  createdAt: string
}

export interface GuestbookResponse {
  myImage: string
  guestbooks: GuestbookContent[]
}
