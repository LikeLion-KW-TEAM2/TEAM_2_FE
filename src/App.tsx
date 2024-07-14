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
    <div className="flexCenter">
      <div className="h-svh w-full min-w-[320px] max-w-[450px] bg-slate-300">
        <div className="w-8 text-lg font-bold">hello</div>
        <button onClick={() => postData.mutate()}>post 요청</button>
        <p>stop</p>
      </div>
    </div>
  )
}

export default App
