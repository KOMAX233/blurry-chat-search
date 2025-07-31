import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [pong, setPong] = useState<Boolean | null>(null)

  useEffect(() => {
    fetch('http://localhost:8000/ping')
    .then(async res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json()
    })
    .then(data => setPong(data.pong))
    .catch(err => {
      console.error('Error fetch /ping: ', err)
      setPong(false)
    }
    )
  }, []);
  return (
    <>
      <h1>Blurry Chat Search</h1>
      <p>
        Ping response: {' '}
        { pong === null? "Loading": pong? "PONG!": "NO PONG" }
      </p>
    </>
  )
}

export default App
