import ProductCard from "./ProductCard"

export default function MultiRowProduct({ products, numRows = 2, numCols = 4, offset }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${numCols}, 1fr)`, gap: '3vw' }}>
            {products.filter((_, i) => i >= numRows * numCols * offset && i < numRows * numCols * (offset + 1)).map((product, i) => {
                return (
                    <ProductCard key={i} {...product} style={{ width: '13rem', height: '20rem' }} />
                )
            })}
        </div>
    )
}