import { FriendPageResponse, SearchResponse } from '@/types/friend'
import { instance } from '../service'

const GET = {
  friend(): Promise<FriendPageResponse> {
    return instance.get(`/friend`)
  },
  search(id: string): Promise<SearchResponse> {
    return instance.get(`/friend/search?id=${id}`)
  },
}

const friendService = {
  GET,
}

export default friendService
