import { useState } from 'react'
import './App.css'
import ExpiryTrackerPage from './pages/ExpiryTrackerPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExpiryTrackerPage />
    </>
  )
}

export default App
