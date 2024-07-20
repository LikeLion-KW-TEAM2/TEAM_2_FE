import { http, HttpResponse } from 'msw'

export const auth = [
  http.post('http://localhost:8080/login', () => {
    console.log('로그인')
    // return HttpResponse.text(JSON.stringify('user_not_exists'), {
    //   status: 404,
    // })
    // return HttpResponse.json(JSON.stringify('ok'))
    return new HttpResponse(null, {
      headers: {
        Authorization: 'mySecret=abc-123',
      },
    })
  }),
  http.post('http://localhost:8080/signup', () => {
    console.log('회원가입')
    // return HttpResponse.text(JSON.stringify('user_not_exists'), {
    //   status: 404,
    // })
    return HttpResponse.json(JSON.stringify('ok'))
  }),
  http.post('http://localhost:8080/signup/idvalidate', () => {
    console.log('아이디 검사')
    // 이미 존재하는 아이디
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 400,
    // })
    return HttpResponse.json(JSON.stringify('ok'))
  }),
]
