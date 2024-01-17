import { createSlice } from "@reduxjs/toolkit"
import { useQuery } from "@tanstack/react-query"

const initialState = []

const { products } = useQuery(['products'])

const wishlistSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        wishlistAdd(state, action) {
            const { id } = action.payload
            const existingProduct = products.filter(product => product.id === id)
            if (existingProduct) {
                state.push(existingProduct)
            }
        },
        wishlistRemove(state, action) {
            const { id } = action.payload
            state = state.filter(product => product.id !== id)
        },
        wishlistReplace(state, action) {
            return action.payload
        },
        wishlistToggle(state, action) {
            const { id } = action.payload
            const existingProduct = state.find(product => product.id === id)
            if (existingProduct) {
                state = state.filter(product => product.id !== id)
            } else {
                const product = products.find(product => product.id === id)
                if (product) {
                    state.push(product)
                }
            }
        }
    }
})


export const { wishlistAdd, wishlistRemove, wishlistReplace, wishlistToggle } = wishlistSlice.actions
export default wishlistSlice.reducer