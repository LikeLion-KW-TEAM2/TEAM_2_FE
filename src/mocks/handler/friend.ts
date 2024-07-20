import { http, HttpResponse } from 'msw'
import { friendList } from './mypage'

const friendPage = {
  myImage: '/src/assets/images/default.svg',
  list: [...friendList.list],
}

export const friend = [
  http.get('http://localhost:8080/friend', () => {
    console.log('친구 목록')
    return HttpResponse.json(friendPage)
  }),
  http.get('http://localhost:8080/friend/search?id=qwer1234', () => {
    console.log('친구 목록')
    const user = friendList.list.filter((friend) =>
      friend.userId.includes('qwer1234'),
    )
    return HttpResponse.json([...user])
  }),
]
