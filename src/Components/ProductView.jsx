import "../stylesheets/ProductView.css"

import ProductCard from "./ProductCard"
import MultiRowProduct from "./MultiRowProduct"
import ScrollWrapper from "./ScrollWrapper"
import { useSelector } from "react-redux"

export default function ProductView({ showAll = false, numRows = 2, numCols = 4, products }) {
    const allProducts = useSelector(state => state.product.products)

    if (showAll) {
        return (
            <div className="product-view" style={{ display: 'grid', gridTemplateColumns: `repeat(${numCols}, 1fr)` }}>
                {allProducts.map((product, i) => {
                    return (
                        <div key={i} className="product-view-row">
                            <ProductCard {...product} />
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <ScrollWrapper maxOffset={Math.floor(products.length / (numRows * numCols))}>
                <MultiRowProduct products={products} numRows={numRows} numCols={numCols} />
            </ScrollWrapper>
        )
    }
}