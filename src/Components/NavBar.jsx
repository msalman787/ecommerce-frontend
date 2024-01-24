import HeartSvg from './svgComponents/HeartSvg'
import ShoppingCartSvg from './svgComponents/ShoppingCartSvg'
import UserSvg from './svgComponents/UserSvg'

import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userClear } from '../state/userSlice'

import "../stylesheets/NavBar.css"

const NumberWrapper = ({ path, num, children }) => {
    useEffect(() => {
        console.log(num)
    }, [num])

    const navigate = useNavigate()
    return (
        <div className='number-wrapper' onClick={() => navigate(path)}>
            {children}
            <span className={['center-child', "show-number", num === 0 ? "" : "visible"].join(' ')}>{num}</span>
        </div>
    )
}

const Searchbar = () => {
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const products = useSelector(state => state.product.products)
    const navigate = useNavigate()

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
            <div className={["search-dropdown", search.length === 0 ? "" : "visible"].join(' ')}>
                {searchResults.length > 0 ?
                    searchResults.slice(0, 5).map((result, i) => {
                        return (
                            <div key={i} className="search-result" onClick={(e) => navigate(`/products/${result.id}`)}>
                                <img src={result.image} alt="" />
                                <div className='search-result-text'>{result.title}</div>
                            </div>
                        )
                    })
                    : <div className='search-result'>No results found</div>
                }
            </div>
        </div>
    )
}


export default function NavBar() {
    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.product.wishlist)
    const cart = useSelector(state => state.product.cart)
    const username = useSelector(state => state.user.name)


    return (
        <nav className="nav-bar">
            <div className='special-text-logo'>Exclusive</div>
            <div className="headers center-child">
                <header><NavLink to="/">Home</NavLink></header>
                <header><NavLink to="/contact">Contact</NavLink></header>
                <header><NavLink to="/products">Products</NavLink></header>
                <header><NavLink to="/login">Sign up</NavLink></header>
            </div>
            <div className='nav-search'>
                <Searchbar />
                <NumberWrapper path='/wishlist' num={wishlist.length}>
                    <HeartSvg />
                </NumberWrapper>
                <NumberWrapper path='/cart' num={cart.length}>
                    <ShoppingCartSvg />
                </NumberWrapper>
                {
                    username &&
                    <div style={{ position: 'relative' }}>
                        <UserSvg />
                        <div className='user-dropdown' onClick={() => dispatch(userClear())}>Log out</div>
                    </div>
                }
            </div>
        </nav>
    )
}