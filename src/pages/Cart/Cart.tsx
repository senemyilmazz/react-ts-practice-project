import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart, selectCart, } from '../../features/cart/cartSlice';
import { ProductModel } from '../../models/responses/ProductModel';

type Props = {}

export const Cart = (props: Props) => {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    
    function removeProductFromCart (item: ProductModel) {
        dispatch(removeFromCart(item));
    }

    const clearAllCart = () => {
        dispatch(clearCart(cart));
    }

  return (
    <div className='container mt-5'>
        <h1>Sepetiniz</h1>
        {cart.cartItems.length === 0 && <h2>Sepetinizde Ürün Bulunmamaktadır.</h2>}
        {cart.cartItems.length !== 0 && 
            <div className='remove-from-cart d-flex align-items-center justify-content-end'>
                <button className='btn btn-danger' onClick={clearAllCart}>Sepeti Temizle</button>
            </div>}
        <div>
            {cart.cartItems.map((item:ProductModel, i:number) => (
                <div key={i} className="card">
                <div className="row g-5 align-items-center" >
                    <div className='col-md-3'>
                        <h5 className="card-title">{item?.title}</h5>
                        <img src={item?.thumbnail} className="card-img-top" alt="..."/>
                    </div>
                    <div className="card-body col-md-7 d-flex flex-column justify-content-center">
                        <p className="card-text">{item?.description}</p>
                        <p className="card-price">{item?.price} $</p>
                    </div>
                    <div className='remove-from-cart col-2'>
                        <button className='btn btn-danger' onClick={() => removeProductFromCart(item)}>Ürünü Sil</button>
                    </div>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}
