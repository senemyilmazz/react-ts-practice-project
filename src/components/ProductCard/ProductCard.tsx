import React from 'react'
import { ProductModel } from '../../models/responses/ProductModel'
import { Link } from 'react-router-dom';
import ProductService from '../../services/ProductService';
import { HttpStatusCode } from 'axios';
import { useDispatch} from 'react-redux';
import { addToCart} from '../../features/cart/cartSlice';

type Props = {
    product:ProductModel;
    deleteProduct:any;
    //product?:ProductModel yazmış olsaydık prop göndermesini opsiyonel tutmuş olurduk ama ilk halinde zorunlu olmalı!!
}

export const ProductCard = (props: Props) => {

    const dispatch = useDispatch();

    const deleteProduct = async () => {
        try {
            let response = await ProductService.delete(props.product.id);
            if (response.status == HttpStatusCode.Ok) {
                alert("Product has been deleted successfully ");
            }
        } catch (error) {
            alert("Data could not be deleted");
        }
        return props.deleteProduct(props.product.id);
    }

    const addProductToCart = () => {
        dispatch(addToCart(props.product));
    }

    return (
        <div className="card" >
            <img src={props.product.thumbnail} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">{props.product.description}</p>
                <Link to={"/product-detail/" + props.product.id} className="btn btn-primary">Details</Link>
                <button onClick={addProductToCart} className='btn btn-secondary'>Sepete Ekle</button>
                <button className="btn btn-danger" onClick={deleteProduct}>Delete</button>
            </div>
        </div>
  )
}