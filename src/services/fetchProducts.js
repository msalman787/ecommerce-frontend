import { productsReplace, obtainCategories } from "../state/productSlice"
import store from "../state/store"

const PRODUCT_URL = "http://ec2-34-229-171-36.compute-1.amazonaws.com/api/products"

export async function fetchAllProducts() {
    const response = await fetch(`${PRODUCT_URL}/all`)
    const data = await response.json()
    console.log("data fetched is ", data)
    store.dispatch(productsReplace(data))
    return data
}

export function fetchProduct(id) {
    return fetch(`${PRODUCT_URL}/${id}/`).then(response => response.json())
}