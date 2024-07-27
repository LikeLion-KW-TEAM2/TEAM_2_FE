export interface IGuestbookContent {
  id: number
  userId: string
  writer: string
  content: string
  createdAt: string
}

export interface IContent {
  content: string
  name: string
  openModal: () => void
}

export interface GuestbookResponse {
  myImage: string
  guestbooks: IGuestbookContent[]
}
