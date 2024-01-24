import { useSelector, useDispatch } from "react-redux";
import ProductView from "./ProductView";
import CategoryTitle from "./CategoryTitle";
import { useEffect } from "react";
import { obtainCategories } from "../state/productSlice";

import "../stylesheets/AllProductPage.css"

export default function AllProductPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(obtainCategories())
    }, [])
    const products = useSelector(state => state.product.products)
    const categories = useSelector(state => state.product.categories)

    return (
        <div className="all-product-page">
            {
                categories.map((category, i) => {
                    return (
                        <div key={i}>
                            <CategoryTitle topTitle={category} />
                            <ProductView products={products.filter(x => x.category === category)} />
                        </div>
                    )
                })
            }
        </div>
    )
}