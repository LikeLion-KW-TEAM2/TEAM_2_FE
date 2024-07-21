import { http, HttpResponse } from 'msw'

const friendPage = {
  myImage: '/src/assets/images/default.svg',
  list: [
    {
      userId: 'qwer1234',
      name: '고로냐',
      image: '/src/assets/images/default.svg',
    },
    {
      userId: 'as321cs',
      name: '구로케',
      image: '/src/assets/images/default.svg',
    },
    {
      userId: 'zscav12',
      name: '구로냐',
      image: '/src/assets/images/default.svg',
    },
  ],
}

let searchFriend = [
  {
    userId: 'abcd4521',
    name: '이로케',
    image: '/src/assets/images/default.svg',
    isFriend: false,
  },
  {
    userId: 'abcd1111',
    name: '저러케',
    image: '/src/assets/images/default.svg',
    isFriend: false,
  },
]

const addFriend = () => {
  searchFriend = [
    {
      userId: 'abcd4521',
      name: '이로케',
      image: '/src/assets/images/default.svg',
      isFriend: true,
    },
    {
      userId: 'abcd1111',
      name: '저러케',
      image: '/src/assets/images/default.svg',
      isFriend: false,
    },
  ]
  friendPage.list = [
    ...friendPage.list,
    {
      userId: 'abcd4521',
      name: '이로케',
      image: '/src/assets/images/default.svg',
    },
  ]
}

const icecream = {
  name: '고로케',
  countList: ['다리꼬기', '짝다리짚기'],
  level: 1,
}

export const friend = [
  http.get('http://localhost:8080/friend', () => {
    console.log('친구 목록')
    return HttpResponse.json(friendPage)
  }),
  http.get('http://localhost:8080/friend/search?id=abcd', () => {
    console.log('친구 검색')
    return HttpResponse.json(searchFriend)
  }),
  http.post('http://localhost:8080/friend/create/abcd4521', () => {
    console.log('친구 추가')
    addFriend()
    return HttpResponse.json(JSON.stringify('ok'))
  }),
  http.get('http://localhost:8080/friend/icecream/qwer1234', () => {
    console.log('친구 아이스크림')
    return HttpResponse.json(icecream)
  }),
]
