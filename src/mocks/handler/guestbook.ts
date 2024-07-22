import { http, HttpResponse } from 'msw'

const MESSAGES = {
  myImage: '/src/assets/images/default.svg',
  guestBooks: [
    {
      date: '24/07/17',
      list: [
        { id: 0, name: '고로케', content: '얼마 안남았다 조금만 버텨' },
        {
          id: 1,
          name: '고로냐',
          content: '짝다리 짚는거 진짜 나도 빨리 고쳐야하는데.. 잘해보자',
        },
      ],
    },
    {
      date: '24/07/15',
      list: [
        { id: 2, name: '구루케', content: '아이스크림 봐봐ㅋㅋㅋㅋ 엄청나네' },
        {
          id: 3,
          name: '고로냐',
          content: '너 어제 다리 꼬는거 봄ㅎㅎ',
        },
        {
          id: 4,
          name: '이로케',
          content: '잘 보고 갑니당~',
        },
      ],
    },
  ],
}

export const guestbook = [
  http.get('http://localhost:8080/guestbook', () => {
    console.log('방명록')
    return HttpResponse.json(MESSAGES)
  }),
  http.delete('http://localhost:8080/guestbook/delete/4', () => {
    console.log('방명록 삭제')
    return HttpResponse.json('방명록 삭제가 완료되었습니다.')
  }),
]
