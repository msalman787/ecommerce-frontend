import "../stylesheets/ProductCard.css"
import { wishlistToggle } from "../state/productSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import Stars from "./Stars"

const Heart = ({ handleClick, filled }) => {

    return (
        <div className="heart" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={filled ? "red" : "none"}>
                <path d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z" stroke={filled ? "pink" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}

const WatchEye = ({ handleClick, filled }) => {

    return (
        <div className="watch-eye" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill={filled ? "red" : "none"}>
                <path d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z" stroke={filled ? "pink" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z" stroke={filled ? "pink" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}

const Price = ({ price, discount }) => {
    return (
        <div className="product-card-price">
            <span className="price-discounted">${Math.round(price * discount)}</span>{discount < 1 && <span className="price">${price}</span>}
        </div>
    )
}

const ProductImage = ({ id, clickFn, imageUrl, discount }) => {
    const dispatch = useDispatch()
    const [heartFilled, setHeartFilled] = useState(false)

    const handleClick = (e) => {
        dispatch(wishlistToggle(id))
        setHeartFilled(prev => !prev)
    }

    return (
        <div className="image-container" onClick={clickFn}>
            <div className="add-cart">Add to cart</div>
            <img src={imageUrl} />
            <Heart handleClick={handleClick} filled={heartFilled} />
            {discount < 1 && <div className="discount-card">-{Math.round((1 - discount) * 100)}%</div>}
        </div>
    )
}

export default function ProductCard({ clickFn = () => { }, id, discount, price, title, image, num_rating, rating, style }) {

    return (
        <div className="product-card" style={style}>
            <ProductImage id={id} discount={discount} imageUrl={image} clickFn={clickFn} />
            <div className="info-card">
                <h1 className="product-card-title" onClick={clickFn}>{title}</h1>
                <Price price={price} discount={discount} />
                <Stars reviewNum={num_rating} reviewRating={rating} />
            </div>
        </div>
    )
}