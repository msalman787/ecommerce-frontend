import RedButton from "./RedButton";
import CarDeliverySvg from "./svgComponents/CarDeliverySvg";
import HeartSvg from "./svgComponents/HeartSvg";
import ReturnIconSvg from "./svgComponents/ReturnIconSvg";
import CategoryTitle from "./CategoryTitle";
import ProductView from "./ProductView";
import "../stylesheets/ProductPage.css";

import { useSelector, useDispatch } from "react-redux";
import { cartAddOne, cartSetOne } from "../state/productSlice";
import { useState } from "react";
import Stars from "./Stars";

const Input = ({ type, name, value, label, changeFn }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} value={value} onChange={changeFn} />
        </div>
    )
}

const InfoPanel = ({ children, title, description, descriptionLink, link }) => {
    return (
        <div className="info-panel">
            {children}
            <div>
                <div>{title}</div>
                <div>{description}<a src={link}>{descriptionLink}</a></div>
            </div>
        </div>
    )
}

const QuantitySetter = ({ quantity, setQuantity }) => {

}

export default function ProductPage({ product }) {
    const [quantity, setQuantity] = useState(1)
    const products = useSelector(state => state.product.products)
    const dispatch = useDispatch()

    const handleBuy = (e) => {
        e.preventDefault()
        dispatch(cartAddOne(product.id))
        dispatch(cartSetOne({ id: product.id, quantity: quantity }))
    }

    return (
        <div className="product-page-container">
            <div className="product-showcase-wrapper">
                <div className="image-wrapper center-child">
                    <img src={product.image} />
                </div>
                <form className="product-info">
                    <h1>{product.title}</h1>
                    <div className="review-info">
                        <Stars reviewNum={product.num_rating} reviewRating={product.rating} />
                    </div>
                    <div className="price">${Math.round((product.price * product.discount) * 100) / 100}
                        {product.discount < 1 &&
                            <span className="cross-text">{product.price}</span>
                        }
                    </div>
                    <div>{product.description}</div>
                    <div className="colours">Colours:
                        <input type="radio" name="colour" value="red" />
                        <input type="radio" name="colour" value="blue" />
                    </div>
                    <div className="sizes">Sizes:
                        <Input type="radio" name="size" value="extra-small" label="XS" />
                        <Input type="radio" name="size" value="small" label="S" />
                        <Input type="radio" name="size" value="medium" label="M" />
                        <Input type="radio" name="size" value="large" label="L" />
                        <Input type="radio" name="size" value="extra-large" label="XL" />
                    </div>
                    <div>
                        <QuantitySetter quantity={quantity} setQuantity={setQuantity} />
                        <RedButton text="Buy Now" clickFn={handleBuy} />
                        <div>
                            <HeartSvg />
                        </div>
                    </div>
                    <div>
                        <InfoPanel title="Free Delivery" descriptionLink="Enter your postal code for Delivery Availability">
                            <CarDeliverySvg />
                        </InfoPanel>
                        <InfoPanel title="Return Delivery" description="Free 30 Days Delivery Returns. " descriptionLink="Details">
                            <ReturnIconSvg />
                        </InfoPanel>
                    </div>
                </form>
            </div>
            <CategoryTitle topTitle="Related items" />
            <ProductView showAll={false} products={products.slice(0, 4)} />
        </div>
    )
}