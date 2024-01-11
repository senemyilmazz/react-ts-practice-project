import { createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/responses/ProductModel";
import { number } from "yup";


export interface CartItem {
    product : ProductModel;
    quantity: number;
}

const initialCartState = {
    cartItems: [] as CartItem [],
    totalPrice : 0 as number,
}

export const cartSlice: any = createSlice({
    name:"cart",
    initialState: initialCartState,
    reducers: {
        addToCart (state, action: {payload: CartItem}) {
            let existingItem = state.cartItems.find((item) => item.product.id == action.payload.product.id);

            if (existingItem) {
                existingItem.quantity++;
            }
            else {
                state.cartItems.push({product: action.payload.product, quantity : 1});
            }

        },
        removeFromCart(state, action : {payload: CartItem}) {
            state.cartItems = state.cartItems.filter((item: CartItem) => item.product.id !== action.payload.product.id)
        },
        decreaseFromCart(state, action : {payload: CartItem}) {
            let existingItem = state.cartItems.find((item) => item.product.id == action.payload.product.id);
            if (existingItem && existingItem.quantity > 0) {
                existingItem.quantity--;
            }
            if (existingItem && existingItem.quantity == 0) {
                state.cartItems = state.cartItems.filter((item: CartItem) => item.product.id !== action.payload.product.id)
            }
        },
        cartPrice(state) {
            state.totalPrice = 0;
            state.cartItems.forEach((item: CartItem) => state.totalPrice += item.product.price * item.quantity);
        },

        clearCart(state) {
            state.cartItems = []
        },
    }
})

export const {addToCart, removeFromCart, clearCart, productQuantity, decreaseFromCart, cartPrice} = cartSlice.actions;

export const selectCart = (state: any) => state.cart;

export default cartSlice.reducer;

