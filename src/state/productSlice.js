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
                state.cart.push({ ...product, quantity: 1 })
            }
        },
        cartRemoveOne(state, action) {
            const id = action.payload
            const index = state.cart.find(product => product.id === id)
            if (index) {
                if (state.cart[index].quantity > 1) {
                    state.cart[index].quantity -= 1
                } else {
                    state.cart = state.cart.filter(product => product.id !== id)
                }
            }
        },
        cartRemove(state, action) {
            const id = action.payload
            state.cart = state.cart.filter(product => product.id !== id)
        },
        cartClear(state) {
            state.cart = []
        }
    }
})

export const { wishlistAdd, wishlistRemove, wishlistReplace, wishlistToggle, productsReplace, cartAddOne, cartRemoveOne, cartClear, cartRemove } = productSlice.actions
export default productSlice.reducer