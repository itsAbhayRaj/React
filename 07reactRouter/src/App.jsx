import { useState } from 'react'
import { Navbar, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
    </>
  )
}

export default App
