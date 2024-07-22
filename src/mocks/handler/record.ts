import { http, HttpResponse } from 'msw'

export const record = [
  http.put('http://localhost:8080/home/habit/check/0', () => {
    console.log('습관 체크')
    return HttpResponse.json('습관 체크 성공')
  }),
]
