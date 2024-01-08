import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState:any = {
    cartItems: [],
};

export const cartReducer = (state : any = initialState, action : any) => {
    switch (action.type)
    {
        case ADD_TO_CART:
        {
            return {...state, cartItems: [...state.cartItems, action.payload]};
        }
        case REMOVE_FROM_CART:
        {
            return {...state, cartItems : state.cartItems.filter((item: any) => item.id !== action.payload.id)}
        }
        case CLEAR_CART:
        {
            return {cartItems : []};
        }
        default:
            return state;
    }
};