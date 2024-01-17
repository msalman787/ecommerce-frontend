import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from './products/wishlistSlice'

const store = configureStore({
    reducer: {
        wishlist: wishlistReducer,
    }
})

export default store
