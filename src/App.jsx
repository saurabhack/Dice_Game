import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import GameStarted from './components/GameStarted'

function App() {
  const [count, setCount] = useState(0)
  const [isGameStarted,setIsGameStarted]=useState(false)

  function toggleGamePlay(){
    setIsGameStarted((prev)=>!prev)
  }
  return (
    <>
      {
        isGameStarted ? <GameStarted/> : <Home toggle={toggleGamePlay}/>
      }
    </>
  )
}

export default App
