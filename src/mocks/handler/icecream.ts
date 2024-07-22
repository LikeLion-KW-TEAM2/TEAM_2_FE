import { http, HttpResponse } from 'msw'

export const icecream = [
  http.get('http://localhost:8080/icecream', () => {
    console.log('아이스크림')
    return HttpResponse.json({
      myImage: '/src/assets/images/default.svg',
      level: 3,
    })
  }),
]
