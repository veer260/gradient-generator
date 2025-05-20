import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MaxWidthWrapper from './components/MaxWidthWrapper/MaxWidthWrapper'
import GradientGrid from './components/GradientGrid/GradientGrid'


function App() {
  const [count, setCount] = useState(0)

  return (
    <MaxWidthWrapper>
      <GradientGrid />  
    </MaxWidthWrapper>
      )
}

export default App
