import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    cart: [],
    wishlist: [],
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        wishlistAdd(state, action) {
            const id = action.payload
            const product = state.products.filter(product => product.id === id)
            if (product) {
                state.wishlist.push(product)
            }
        },
        wishlistRemove(state, action) {
            const id = action.payload
            state.wishlist = state.wishlist.filter(product => product.id !== id)
        },
        wishlistReplace(state, action) {
            state.wishlist = action.payload
        },
        wishlistToggle(state, action) {
            const id = action.payload
            const wishlistProduct = state.wishlist.find(product => product.id === id)

            if (!wishlistProduct) {
                const product = state.products.filter(product => product.id === id)[0]
                state.wishlist.push(product)
            } else {
                state.wishlist = state.wishlist.filter(product => product.id !== id)
            }
        },
        productsReplace(state, action) {
            state.products = action.payload
        },
        cartAddOne(state, action) {
            const id = action.payload
            const product = state.products.filter(product => product.id === id)
            if (product) {
                const newProduct = { ...product, quantity: 1 }
                state.cart.push(newProduct)
            }
        },
        cartRemoveOne(state, action) {
            const id = action.payload
            state.cart.forEach(product => {
                if (product[0].id === id) {
                    product['quantity'] -= 1
                }
            })
        },
        cartRemove(state, action) {
            const id = action.payload
            state.cart = state.cart.filter(product => product[0].id !== id)
        },
        cartSetOne(state, action) {
            const { id, quantity } = action.payload
            console.log("id", id, quantity)
            state.cart.forEach(product => {
                if (product[0].id === id) {
                    product['quantity'] = quantity
                }
            })
        },
        cartClear(state) {
            state.cart = []
        }
    }
})

export const { wishlistAdd, wishlistRemove, wishlistReplace, wishlistToggle, productsReplace, cartAddOne, cartRemoveOne, cartClear, cartRemove, cartSetOne } = productSlice.actions
export default productSlice.reducer