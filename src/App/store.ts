
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from '../features/cart/cartSlice'

export const store: any = configureStore({
    reducer : {
        cart : cartReducer,
    }
})