import Router from './components/Router'

function App() {
  return (
    <div className="flexCenter font-sans">
      <div className="relative h-svh w-full min-w-[320px] max-w-[450px] overflow-scroll border-x px-4 scrollbar-hide">
        <Router />
      </div>
    </div>
  )
}

export default App
