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
import Footer from './Components/Footer'

import { fetchAllProducts } from './services/fetchProducts'
import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'



function App() {
  const { isPending, data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })
  const products = useSelector(state => state.product.products)


  if (isPending) return <div>Loading...</div>
  return (
    <>
      <NavBar />
      {/* <Home products={products} /> */}
      {/* <LoginPage /> */}
      {/* <WishList /> */}
      {/* <ShoppingCart /> */}
      {/* <CheckOutPage /> */}
      <ProductPage product={products[0]} />
      <Footer />
    </>
  )
}

export default App
