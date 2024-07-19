import { http, HttpResponse } from 'msw'

export const auth = [
  http.post('http://localhost:8080/login', () => {
    console.log('로그인')
    // return HttpResponse.text(JSON.stringify('user_not_exists'), {
    //   status: 404,
    // })
    return HttpResponse.json(JSON.stringify('ok'))
  }),
]
