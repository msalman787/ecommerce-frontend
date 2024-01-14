PRODUCT_URL = ""

export function fetchAllProducts() {
    return fetch(PRODUCT_URL).json()
}

export function fetchProduct(id) {
    return fetch(`${PRODUCT_URL}${id}/`).json()
}