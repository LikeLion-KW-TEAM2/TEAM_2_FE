import { useEffect, useState } from 'react'
import Splash from './components/Splash'
import RouterComponent from './components/Router/RouterComponent'

function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flexCenter font-sans">
      <div className="relative h-svh w-full min-w-[320px] max-w-[450px] overflow-scroll border-x px-4 scrollbar-hide">
        {showSplash ? <Splash /> : <RouterComponent />}
      </div>
    </div>
  )
}

export default App
