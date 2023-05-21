import { useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return (
    <>
      <div >
        <Nav/>
        <Home />
        <Products />
      </div>
    </>
  )
}

export default App
