import { useState } from 'react'
import './App.css'
import "./fonts/Poppins-Bold.ttf"
import "./fonts/Poppins-Regular.ttf"

import Home from './Components/Home'
import WishList from './Components/WishList'

function App() {

  return (
    <>
      <Home />
      <WishList />
    </>
  )
}

export default App
