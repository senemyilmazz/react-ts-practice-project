import React from 'react'
import { useDispatch } from 'react-redux';
import { CartItem, addToCart, decreaseFromCart, removeFromCart } from '../../Store/slices/cartSlice';
import { ProductModel } from '../../models/responses/ProductModel';

type Props = {
    item : CartItem,
}

const CartCard = (props: Props) => {

    const dispatch = useDispatch();
    const item = props.item;
    
    function addProductToCart (item: ProductModel) {
        dispatch(addToCart({product: item}));
    }

    function decreaseProductFromCart (item: CartItem) {
        dispatch(decreaseFromCart(item));
    }

    function removeProductFromCart (item: ProductModel) {
        dispatch(removeFromCart({product: item}));
    }

  return (
    <div>
        <div className="card">
            <div className="row g-0 align-items-center" >
                <div className='col-md-3'>
                    <h5 className="card-title">{item.product?.title}</h5>
                    <img src={item.product?.thumbnail} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body col-md-5 d-flex flex-column justify-content-center">
                    <p className="card-text">{item.product?.description}</p>
                    <p className="card-unit-price">Adet Fiyatı: {item?.product?.price} $</p>
                </div>
                <div className='card-quantity col-md-2'>
                    <div className='row'> 
                    <div className='col-2'> <button className = "btn btn-secondary" onClick={() => decreaseProductFromCart(item)}> - </button>
                    </div>
                    <div className='col-1'> <p className="product-quantity"><h3> {item.quantity} </h3> </p> </div>
                    <div className='col-2'> <button className = "btn btn-secondary" onClick={() => addProductToCart(item.product)}> + </button> </div>
                </div>
                </div>
                <div className='col-md-1'>
                    <p className='total-price'> <h3>{item.quantity * item.product.price}$</h3></p>
                </div>
                <div className='remove-from-cart col-1'>
                    <button className='buton2 btn btn-danger' onClick={() => removeProductFromCart(item.product)}>Ürünü Sil</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard;