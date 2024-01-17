import ProductCard from './ProductCard'
import "../stylesheets/HorizontalProductBar.css"


export default function HorizontalProductBar({ offset, offsetWidth, products, maxTranslateX }) {

    return (
        <div className="horizontal-product-bar">
            {products.map((product, i) => {
                return (
                    <ProductCard
                        key={i}
                        {...product}
                        style={{ transform: `translateX(-${Math.min(offset * offsetWidth, maxTranslateX)}px)` }}
                    />
                )
            })}
        </div>

    )
}