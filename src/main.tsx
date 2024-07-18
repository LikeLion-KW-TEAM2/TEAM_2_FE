import '@/styles/globalStyle.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { worker } from './mocks/browsers.ts'

const queryClient = new QueryClient()

if (import.meta.env.VITE_REACT_APP_MOCK === 'development') {
  worker.start()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
)
