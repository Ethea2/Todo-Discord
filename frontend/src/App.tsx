import { useState } from 'react'
import PageRouter from './components/router/PageRouter'
import Navbar from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <PageRouter />
    </>
  )
}

export default App
