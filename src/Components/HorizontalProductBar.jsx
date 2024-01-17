import ProductCard from './ProductCard'
import "../stylesheets/HorizontalProductBar.css"


export default function HorizontalProductBar({ offset, offsetWidth, products }) {

    return (
        <div className="horizontal-product-bar">
            {products.map((product, i) => {
                return (
                    <ProductCard
                        key={i}
                        {...product}
                        style={{ transform: `translateX(-${offset * offsetWidth}px)` }}
                    />
                )
            })}
        </div>

    )
}