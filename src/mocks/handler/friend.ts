import { http, HttpResponse } from 'msw'
import { friendList } from './mypage'

const friendPage = {
  my_profile_image: '/src/assets/images/default.svg',
  list: [...friendList.list],
}

export const friend = [
  http.get('http://localhost:8080/friend', () => {
    console.log('친구 목록')
    return HttpResponse.json(friendPage)
  }),
]
