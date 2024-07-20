import { http, HttpResponse } from 'msw'

const user = {
  name: '고로케',
  profileImage: '/src/assets/images/default.svg',
}

const friendList = {
  list: [
    {
      userId: 'qwer1234',
      name: '고로냐',
      profileImage: '/src/assets/images/default.svg',
    },
    {
      userId: 'as321cs',
      name: '구로케',
      profileImage: '/src/assets/images/default.svg',
    },
    {
      userId: 'zscav12',
      name: '구로냐',
      profileImage: '/src/assets/images/default.svg',
    },
  ],
}

export const mypage = [
  http.get('http://localhost:8080/mypage', () => {
    return HttpResponse.json(user)
  }),

  http.get('http://localhost:8080/mypage/friend', () => {
    return HttpResponse.json(friendList)
  }),
]
