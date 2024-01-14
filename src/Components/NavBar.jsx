import HeartSvg from './svgComponents/HeartSvg'
import ShoppingCartSvg from './svgComponents/ShoppingCartSvg'
import SearchSvg from './svgComponents/SearchSvg'

import { useState } from 'react'

import "../stylesheets/NavBar.css"

const Searchbar = () => {
    const [search, setSearch] = useState("")

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
        <nav className="nav-bar center-child">
            <div className='special-text-logo'>Exclusive</div>
            <div className="headers center-child">
                <header>Home</header>
                <header>Contact</header>
                <header>About</header>
                <header>Sign Up</header>
            </div>
            <div className='center-child'>
                <Searchbar />
                <div className='center-child'>
                    <HeartSvg />
                    <ShoppingCartSvg />
                </div>
            </div>
        </nav>
    )
}