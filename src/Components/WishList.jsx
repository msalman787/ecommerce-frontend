import { useSelector, useDispatch } from "react-redux"
import { cartAddOne } from "../state/productSlice"

import GrayButton from "./GrayButton"
import ProductView from "./ProductView"
import CategoryTitle from "./CategoryTitle"
import "../stylesheets/WishList.css"



export default function WishList({ }) {
    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.product.wishlist)
    const products = useSelector(state => state.product.products).filter(product => product.id % 3)

    const moveAllToCart = (e) => {
        wishlist.forEach(product => {
            dispatch(cartAddOne(product.id))
        })
    }

    return (
        <div className="center-child" style={{ marginTop: '5rem' }}>
            <div className="wish-list-container">
                <div className="header">
                    <h1>Wishlist ({wishlist.length})</h1>
                    <GrayButton text="Move all to shopping cart" clickFn={moveAllToCart} /></div>
                <ProductView showAll={true} products={wishlist} />
                <div className="header">
                    <CategoryTitle topTitle="Just for you" />
                    <GrayButton text="See all" /></div>
                <ProductView showAll={true} products={products.slice(0, 4)} />
            </div>
        </div>
    )
}