import { GuestbookResponse } from '@/types/guestbook'
import { instance } from '../service'

const GET = {
  guestbook(): Promise<GuestbookResponse> {
    return instance.get(`/guestbook`)
  },
}

const guestbookService = {
  GET,
}

export default guestbookService
