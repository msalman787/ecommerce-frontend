import RedButton from "./RedButton";
import CarDeliverySvg from "./svgComponents/CarDeliverySvg";
import HeartSvg from "./svgComponents/HeartSvg";
import ReturnIconSvg from "./svgComponents/ReturnIconSvg";
import CategoryTitle from "./CategoryTitle";
import ProductView from "./ProductView";
import "../stylesheets/ProductPage.css";

import { useSelector, useDispatch } from "react-redux";
import { cartAddOne, cartSetOne, wishlistToggle } from "../state/productSlice";
import { useState } from "react";
import Stars from "./Stars";
import { useParams } from "react-router-dom";

const Input = ({ type, name, value, label, changeFn, style, checked }) => {
    return (
        <div className="custom-input">
            <label >{label}
                <input type={type} name={name} value={value} onChange={changeFn} defaultChecked={checked} />
                <span className="checkmark" style={style}></span>
            </label>
        </div>
    )
}

const InfoPanel = ({ children, title, description, descriptionLink, link }) => {
    return (
        <div className="info-panel">
            {children}
            <div style={{ flex: '1' }}>
                <h1>{title}</h1>
                <div>{description}<a src={link}>{descriptionLink}</a></div>
            </div>
        </div>
    )
}

const QuantitySetter = ({ quantity, setQuantity }) => {

    return (
        <div className="quantity-setter">
            <div className="center-child" onClick={e => setQuantity(prev => (prev - 1) > 0 ? prev - 1 : 1)}>-</div>
            <div className="center-child">{quantity}</div>
            <div className="center-child" onClick={e => setQuantity(prev => prev + 1)}>+</div>
        </div>
    )
}

export default function ProductPage({ product }) {
    const [quantity, setQuantity] = useState(1)
    const products = useSelector(state => state.product.products)
    const wishlist = useSelector(state => state.product.wishlist)
    const { id } = useParams()
    product = product ? product : products.find(x => x.id === Number(id))
    const dispatch = useDispatch()

    const handleBuy = (e) => {
        e.preventDefault()
        dispatch(cartAddOne(product.id))
        dispatch(cartSetOne({ id: product.id, quantity: quantity }))
    }

    return (
        <div className="center-child">
            <div className="product-page-container">
                <div className="product-showcase-wrapper">
                    <div className="image-wrapper center-child" style={{ flex: '1' }}>
                        <img src={product.image} />
                    </div>
                    <form className="product-info" style={{ flex: '1' }}>
                        <h1>{product.title}</h1>
                        <div className="review-info">
                            <Stars reviewNum={product.num_rating} reviewRating={product.rating} />
                        </div>
                        <div className="price">${Math.round((product.price * product.discount) * 100) / 100}
                            {product.discount < 1 &&
                                <span className="cross-text">{product.price}</span>
                            }
                        </div>
                        <div>{product.description.slice(0, 200)}</div>
                        <div className="colours">Colours:
                            <Input type="radio" name="colour" value="red" style={{ backgroundColor: '#E07575' }} checked={true} />
                            <Input type="radio" name="colour" value="blue" style={{ backgroundColor: '#A0BCE0' }} />
                        </div>
                        <div className="sizes">
                            <div style={{ marginRight: '1rem' }}>Sizes:</div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Input type="radio" name="size" value="extra-small" label="XS" />
                                <Input type="radio" name="size" value="small" label="S" />
                                <Input type="radio" name="size" value="medium" label="M" checked={true} />
                                <Input type="radio" name="size" value="large" label="L" />
                                <Input type="radio" name="size" value="extra-large" label="XL" />
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '4.4rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <QuantitySetter quantity={quantity} setQuantity={setQuantity} />
                            <RedButton text="Buy Now" height={"70%"} clickFn={handleBuy} />
                            <div className="heart-wrapper center-child"
                                onClick={e => dispatch(wishlistToggle(product.id))}
                                style={wishlist.find(x => x.id === product.id) ?
                                    { stroke: 'var(--main-red)', fill: 'var(--main-red)' } : {}}>
                                <HeartSvg />
                            </div>
                        </div>
                        <div className="info-panels">
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
        </div>
    )
}