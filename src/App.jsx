import GlobalStyle from '@/styles/globalStyle';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function App() {
  const postData = useMutation({
    mutationFn: () => axios.post(`/api/test`, { name: 'kim', age: 12 }),
    onSuccess: (res) => {
      console.log('post 성공', res);
      alert('post 성공');
    },
    onError: (error) => {
      console.log('post 실패', error);
      alert('post 실패');
    },
  });
  return (
    <>
      <GlobalStyle />
      <h1>h1 폰트</h1>
      <h2>h2 폰트</h2>
      <h3>h3 폰트</h3>
      <h4>h4 폰트</h4>
      <p>p font</p>
      <a href="#">a font</a>

      <button onClick={() => postData.mutate()}>post 요청</button>
    </>
  );
}

export default App;
