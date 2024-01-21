import HeartSvg from './svgComponents/HeartSvg'
import ShoppingCartSvg from './svgComponents/ShoppingCartSvg'
import SearchSvg from './svgComponents/SearchSvg'

import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import "../stylesheets/NavBar.css"

const Searchbar = () => {
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const products = useSelector(state => state.product.products)

    useEffect(() => {
        const results = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
        setSearchResults(results)
    }, [search])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='search-bar center-child'>
            <input value={search} onChange={handleSearch} type="text" placeholder="What are you looking for?" />
            <SearchSvg />
        </div>
    )
}


export default function NavBar() {

    return (
        <nav className="nav-bar">
            <div className='special-text-logo'>Exclusive</div>
            <div className="headers center-child">
                <header><NavLink to="/">Home</NavLink></header>
                <header><NavLink to="/contact">Contact</NavLink></header>
                <header><NavLink to="/products">Product</NavLink></header>
                <header><NavLink to="/login">Sign up</NavLink></header>
            </div>
            <div className='nav-search'>
                <Searchbar />
                <HeartSvg />
                <ShoppingCartSvg />
            </div>
        </nav>
    )
}