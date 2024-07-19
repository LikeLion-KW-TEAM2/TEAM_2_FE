import { http, HttpResponse } from 'msw'

const user = {
  name: '고로케',
  profileImage: '/src/assets/images/default.svg',
}

export const mypage = [
  http.get('http://localhost:8080/mypage', () => {
    return HttpResponse.json(user)
  }),
]
