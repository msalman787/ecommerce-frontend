import { useSelector, useDispatch } from "react-redux"
import { cartRemove, cartSetOne } from "../state/productSlice"

import GrayButton from "./GrayButton"
import "../stylesheets/ShoppingCart.css"
import RedButton from "./RedButton"
import { useNavigate } from "react-router-dom"

const ChangeQuantity = ({ product }) => {
    const dispatch = useDispatch()

    return (
        <input type="number"
            value={product['quantity']}
            min={1}
            onChange={(e) => dispatch(cartSetOne({ id: product[0].id, quantity: e.target.value }))}
        />
    )
}

const DeleteButton = ({ product }) => {
    const dispatch = useDispatch()

    const clickFn = () => {
        dispatch(cartRemove(product[0].id))
    }

    return (
        <span onClick={clickFn} className="center-child">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z" /> <path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z" /> </g> </svg>
        </span>
    )
}

export default function ShoppingCart() {
    const cart = useSelector(state => state.product.cart)
    const navigate = useNavigate()

    if (cart.length <= 0) {
        return (
            <div className="empty-cart">
                <h1>Cart is empty</h1>
                <RedButton text="Continue Shopping" />
            </div>
        )
    }

    return (
        <div className="center-child">
            <div className="shopping-cart-container">
                <div className="main-cart">
                    <div className="header">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                    {cart.map((product, i) => {
                        return (
                            <div key={i}>
                                <p>
                                    <img src={product[0].image} />
                                    {product[0].title}
                                </p>
                                <p>${product[0].price}</p>
                                <p><ChangeQuantity product={product} /></p>
                                <p>{product[0].price * product[0].discount * product['quantity']}<DeleteButton product={product} /></p>
                            </div>
                        )
                    })}
                </div>
                <GrayButton text="Continue Shopping" clickFn={() => { navigate("/") }} />
                <div className="cart-total">
                    <h1>Cart Total</h1>
                    <div><p>Subtotal:</p><p>${cart.reduce((prev, cur) => prev + cur[0].price * cur[0].discount * cur['quantity'], 0)}</p></div>
                    <div><p>Shipping:</p><p>Free</p></div>
                    <div><p>Total:</p><p>${cart.reduce((prev, cur) => prev + cur[0].price * cur[0].discount * cur['quantity'], 0)}</p></div>
                    <RedButton text="Proceed to checkout" clickFn={() => { navigate("/checkout") }} />
                </div>
            </div>
        </div>
    )
}