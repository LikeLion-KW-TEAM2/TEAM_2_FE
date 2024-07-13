import { useMutation } from '@tanstack/react-query'
import instance from './services/@core'

function App() {
  const postData = useMutation({
    mutationFn: () => instance.post(`/api/test`, { name: 'kim', age: 12 }),
    onSuccess: (res) => {
      console.log('post 성공', res)
      alert('post 성공')
    },
    onError: (error) => {
      console.log('post 실패', error)
      alert('post 실패')
    },
  })
  return (
    <>
      <div className="w-8 text-lg font-bold">hello</div>
      <button onClick={() => postData.mutate()}>post 요청</button>
    </>
  )
}

export default App
