import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import './App.css'
import "./fonts/Poppins-Bold.ttf"
import "./fonts/Poppins-Regular.ttf"

import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import WishList from './Components/WishList'

import { fetchAllProducts } from './services/fetchProducts'

function App() {
  const products = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })

  return (
    <>
      <NavBar />
      <Home products={products} />
      {/* <WishList /> */}
      <Footer />
    </>
  )
}

export default App
