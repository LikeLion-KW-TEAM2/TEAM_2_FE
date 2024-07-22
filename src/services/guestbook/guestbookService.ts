import { GuestbookResponse } from '@/types/guestbook'
import { instance } from '../service'

const GET = {
  guestbook(): Promise<GuestbookResponse> {
    return instance.get(`/guestbook`)
  },
}

const DELETE = {
  content(id: number): Promise<GuestbookResponse> {
    return instance.get(`/guestbook/delete/${id}`)
  },
}

const guestbookService = {
  GET,
  DELETE,
}

export default guestbookService
