import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-title text-3xl text-blue-600 font-bold underline">
      Tailwind está funcionando 🚀
    </div>
  )
}

export default App
