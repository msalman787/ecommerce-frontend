import './App.css'
import "./fonts/Poppins-Bold.ttf"
import "./fonts/Poppins-Regular.ttf"

import NavBar from './Components/NavBar'
import Home from './Components/Home'
import WishList from './Components/WishList'
import LoginPage from './Components/LoginPage'
import ShoppingCart from './Components/ShoppingCart'
import CheckOutPage from './Components/CheckOutPage'
import ProductPage from './Components/ProductPage'
import ContactUs from './Components/ContactUs'
import NotFoundPage from './Components/NotFoundPage'
import AllProductPage from './Components/AllProductPage'
import Footer from './Components/Footer'

import { fetchAllProducts } from './services/fetchProducts'
import { useQuery } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function App() {
  const { isPending, data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })


  if (isPending) return <div className='pending-message'>Loading...</div>
  return (
    <>
      <Helmet>
        <title>Exclusive</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Helmet>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
