import { useSelector, useDispatch } from "react-redux"
import { cartAddOne, cartRemoveOne, cartRemove } from "../state/productSlice"

const ChangeQuantity = ({ product }) => {


}

const DeleteButton = ({ product }) => {

    const clickFn = () => {
        dispatch(cartRemoveOne(product))
    }

    return (
        <div onClick={clickFn}>

        </div>
    )
}

export default function ShoppingCart() {
    const cart = useSelector(state => state.product.cart)


    return (
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
                        <div>
                            <p><img src={product.image} />{product.name}</p>
                            <p>{product.price}</p>
                            <p><ChangeQuantity product={product} /></p>
                            <p>{product.price * product.quantity}<span><DeleteButton product={product} /></span></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}