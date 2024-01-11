
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cartReducer from './slices/cartSlice'

export const rootReducer = combineReducers({
    cart : cartReducer,
});

export const store: any = configureStore({
    reducer : rootReducer,
})