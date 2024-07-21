import {
  FriendIcecreamResponse,
  FriendPageResponse,
  GuestbookRequest,
  SearchResponse,
} from '@/types/friend'
import { instance } from '../service'

const GET = {
  friend(): Promise<FriendPageResponse> {
    return instance.get(`/friend`)
  },
  search(id: string): Promise<SearchResponse> {
    return instance.get(`/friend/search?id=${id}`)
  },
  icecream(id: string): Promise<FriendIcecreamResponse> {
    return instance.get(`/friend/icecream/${id}`)
  },
}

const POST = {
  add(searchId: string) {
    return instance.post(`/friend/create/${searchId}`, {})
  },
  guestbook(guestbook: GuestbookRequest) {
    return instance.post(`/friend/guestbook`, guestbook)
  },
}

const friendService = {
  GET,
  POST,
}

export default friendService
