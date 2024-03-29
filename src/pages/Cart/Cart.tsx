import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartItem, cartPrice, clearCart, selectCart, } from '../../Store/slices/cartSlice';
import CartCard from '../../components/CartCard/CartCard';

type Props = {}

export const Cart = (props: Props) => {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    
    useEffect(() => {
        dispatch(cartPrice());
    }, [cart.cartItems]);

    const clearAllCart = () => {
        dispatch(clearCart(cart));
    }

  return (
    <div className='container mt-5'>
        <h1>Sepetiniz</h1>
        {cart.cartItems.length === 0 && <h2>Sepetinizde Ürün Bulunmamaktadır.</h2>}
        {cart.cartItems.length !== 0 && 
        <div>
            <div className='total-price d-flex align-items-center justify-content-end'>
                <h3>Sepet Tutarı : {cart.totalPrice} $ </h3>
            </div>
            <div className='remove-all-from-cart d-flex align-items-center justify-content-end'>
                <button className='buton1 btn btn-danger' onClick={clearAllCart}>Sepeti Temizle</button>
            </div>
        </div>}
        <div>
            {cart.cartItems.map((item: CartItem, i:number) => (
                <div key={i} className="col-12 mb-5">
                    <CartCard item={item}></CartCard>
                </div>
            ))}
        </div>
    </div>
  )
}
