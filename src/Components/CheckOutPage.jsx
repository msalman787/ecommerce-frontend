import RedButton from "./RedButton";
import { useSelector } from "react-redux";
import "../stylesheets/CheckOutPage.css"

const Input = ({ type, text, name, required = false, pattern }) => {

    return (
        <div className="billing-input">
            <label htmlFor={name}>{text}{required ? <span>*</span> : ""}</label>
            <input type={type} name={name} pattern={pattern} />
        </div>
    )
}

export default function CheckOutPage() {
    const cart = useSelector(state => state.product.cart)

    return (
        <div className="checkout-page-container">
            <div className="billing-details">
                <h1>Billing Details</h1>
                <form>
                    <Input type="text" text="First Name" name="name" required={true} />
                    <Input type="text" text="Company Name" name="company" />
                    <Input type="text" text="Street Address" name="address1" />
                    <Input type="text" text="Apartment, floor, etc. (optional)" name="address2" />
                    <Input type="text" text="Town/City" name="city" required={true} />
                    <Input type="number" text="Phone Number" name="phone" required={true} pattern="" />
                    <Input type="email" text="Email Address" name="email" required={true} />
                    <div className="form-checkbox">
                        <input type="checkbox" />
                        <div>Save this information for faster check-out next time</div>
                    </div >
                </form>
            </div>
            <div className="check-out-cart">
                <div className="check-out-info">
                    {cart.map((product, i) => {
                        return (
                            <div key={i} style={{ height: '6rem' }}>
                                <p className="center-child" style={{ gap: '1rem' }}>
                                    <img src={product[0].image} />
                                    <span>{product[0].title}</span>
                                </p>
                                <p>{product['quantity']} ✖ {product[0].price * product[0].discount}</p>
                                <p>${product[0].price * product[0].discount * product['quantity']}</p>
                            </div>
                        )
                    })}
                    <div><p>Subtotal:</p><p>${cart.reduce((prev, cur) => prev + cur[0].price * cur[0].discount * cur['quantity'], 0)}</p></div>
                    <div className="shipping"><p>Shipping:</p><p>Free</p></div>
                    <div><p>Total:</p><p>${cart.reduce((prev, cur) => prev + cur[0].price * cur[0].discount * cur['quantity'], 0)}</p></div>
                </div>
                <div className="check-out-methods">
                    <label>
                        <input type="radio" name="payment-method" value="bank" /><span>Direct Bank Transfer</span>
                    </label>
                    <label>
                        <input type="radio" name="payment-method" value="cash" /><span>Cash on delivery</span>
                    </label>
                </div>
                <RedButton text="Place Order" />
            </div>
        </div>
    )
}