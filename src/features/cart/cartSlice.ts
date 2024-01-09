import { ProductModel } from '../../models/responses/ProductModel';

import { createSlice } from "@reduxjs/toolkit";

interface cartState {
    cartItems : ProductModel[];
}

const initialCartState = {
    cartItems: [],
}

export const cartSlice: any = createSlice({
    name:"cart",
    initialState: initialCartState,
    reducers: {
        addToCart(state: cartState, action: {payload: ProductModel}) {
            state.cartItems.push(action.payload)
        },
        removeFromCart(state: cartState, action: {payload: ProductModel}) {
           state.cartItems = state.cartItems.filter((item: any) => item.id !== action.payload.id)
        },
        clearCart(state: cartState) {
            state.cartItems = []
        },
    }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export const selectCart = (state: any) => state.cart;

export default cartSlice.reducer;

