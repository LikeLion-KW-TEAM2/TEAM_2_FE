import { http, HttpResponse } from 'msw'

const homeData = {
  mylmage: '/src/assets/images/default.svg',
  list: [
    { id: 0, name: '다리 꼬기', status: 0, createdAt: '2024-07-21' },
    { id: 1, name: '옆으로 누워서 자기', status: 1, createdAt: '2024-07-21' },
    { id: 2, name: '짝다리 짚기', status: 1, createdAt: '2024-07-21' },
  ],
}

const homeDataByDate = {
  mylmage: '/src/assets/images/default.svg',
  habits: [
    { id: 0, name: '다리 꼬기', status: 0, createdAt: '2024-07-21' },
    { id: 1, name: '옆으로 누워서 자기', status: 1, createdAt: '2024-07-21' },
    { id: 2, name: '짝다리 짚기', status: 0, createdAt: '2024-07-21' },
  ],
}

export const record = [
  http.get('http://localhost:8080/home', () => {
    console.log('습관 기록 페이지')
    return HttpResponse.json(homeData)
  }),
  http.get('http://localhost:8080/home/2024-07-21', () => {
    console.log('습관 기록 페이지 / 날짜')
    return HttpResponse.json(homeDataByDate)
  }),
  http.get('http://localhost:8080/home/habit/0', () => {
    console.log('수정 페이지')
    return HttpResponse.json({
      id: 0,
      name: '다리 꼬기',
      periodType: 6,
      privacy: 0,
      overcome: 23,
    })
  }),
  http.put('http://localhost:8080/home/habit/check/0', () => {
    console.log('습관 체크')
    return HttpResponse.json('습관 체크 성공')
  }),
  http.put(`http://localhost:8080/home/habit/change/0`, () => {
    console.log('습관 수정')
    return HttpResponse.json('습관 수정 성공')
  }),
  http.delete(`http://localhost:8080/home/habit/delete/0`, () => {
    console.log('습관 삭제')
    return HttpResponse.json('습관 삭제 성공')
  }),
]
