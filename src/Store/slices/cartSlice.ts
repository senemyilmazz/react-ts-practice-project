import { createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/responses/ProductModel";


export interface CartItem {
    product : ProductModel;
    quantity: number;
}

const initialCartState = {
    cartItems: JSON.parse(localStorage.getItem("cart") || "[]") || [] as CartItem [],
    totalPrice : 0 as number,
}

export const cartSlice: any = createSlice({
    name:"cart",
    initialState: initialCartState,
    reducers: {
        addToCart (state, action: {payload: CartItem}) {
            let existingItem = state.cartItems.find((item: CartItem) => item.product.id == action.payload.product.id);

            if (existingItem) {
                if (action.payload.quantity)
                    existingItem.quantity += action.payload.quantity;
                else
                    existingItem.quantity++;
            }
            else {
                state.cartItems.push({product: action.payload.product, quantity : action.payload.quantity ? action.payload.quantity : 1});
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action : {payload: CartItem}) {
            state.cartItems = state.cartItems.filter((item: CartItem) => item.product.id !== action.payload.product.id)
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        decreaseFromCart(state, action : {payload: CartItem}) {
            let existingItem = state.cartItems.find((item: CartItem) => item.product.id == action.payload.product.id);
            if (existingItem && existingItem.quantity > 0) {
                existingItem.quantity--;
            }
            if (existingItem && existingItem.quantity == 0) {
                state.cartItems = state.cartItems.filter((item: CartItem) => item.product.id !== action.payload.product.id)
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        cartPrice(state) {
            state.totalPrice = 0;
            state.cartItems.forEach((item: CartItem) => state.totalPrice += item.product.price * item.quantity);
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        clearCart(state) {
            state.cartItems = []
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
    }
})

export const {addToCart, removeFromCart, clearCart, productQuantity, decreaseFromCart, cartPrice} = cartSlice.actions;

export const selectCart = (state: any) => state.cart;

export default cartSlice.reducer;

