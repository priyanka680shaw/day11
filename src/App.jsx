import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PasswordCard from './components/passworddCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PasswordCard/>
    </>
  )
}

export default App
