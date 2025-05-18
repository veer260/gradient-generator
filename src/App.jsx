import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MaxWidthWrapper from './components/MaxWidthWrapper/MaxWidthWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MaxWidthWrapper>
      <div className='gradient-wrapper'>
        <header className='header'>
          <h1>Gradient-generator</h1>
          <h3>Beautiful-lush Gradients</h3>
        </header>
      </div>
    </MaxWidthWrapper>
      )
}

export default App
