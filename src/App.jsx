import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './components/DaisyNavBar/DaisyNav'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <DaisyNav/> */}
    <Navbar/>
  
    </>
  )
}

export default App
