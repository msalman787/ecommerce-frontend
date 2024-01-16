import ProductCard from "./ProductCard"
import "../stylesheets/ProductView.css"

export default function ProductView({ numCols = 4, products }) {
    console.log(products)

    return (
        <div className="product-view" style={{ gridTemplateColumns: `repeat(${numCols}, 1fr)` }}>
            {products.map((product, i) => {
                return (
                    <div key={i} className="product-view-row">
                        <ProductCard {...product} />
                    </div>
                )
            })}
        </div>
    )
}