import Router from './components/Router'

function App() {
  return (
    <div className="flexCenter">
      <div className="scrollbar-hide relative h-svh w-full min-w-[320px] max-w-[450px] overflow-scroll border-x px-4">
        <Router />
      </div>
    </div>
  )
}

export default App
