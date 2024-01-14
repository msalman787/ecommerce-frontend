import { useState } from 'react'
import './App.css'
import "./fonts/Poppins-Bold.ttf"
import "./fonts/Poppins-Regular.ttf"

import NavBar from './Components/NavBar'
import Home from './Components/Home'

import WishList from './Components/WishList'


import { useQuery } from '@tanstack/react-query'

function App() {

  return (
    <>
      <NavBar />
      <Home />
      {/* <WishList /> */}
    </>
  )
}

export default App
