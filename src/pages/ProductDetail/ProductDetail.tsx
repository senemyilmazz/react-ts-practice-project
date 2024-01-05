import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { ProductModel } from '../../models/responses/ProductModel';
import ProductService from '../../services/ProductService';

type Props = {}

const ProductDetail = (props: Props) => {
    //const location = useLocation(); //querynin tamamına ulaşırız
    const params = useParams<{id:string}>(); //parametreye ulaşırız.
    const [product, setProduct] = useState<ProductModel>();

    useEffect( () => {
        if (params.id) {
            ProductService.getById(parseInt(params.id)).then(response => {
                setProduct(response.data);
            });
        }
    }, []);


  return (
    <div className="card" >
        <img src={product?.thumbnail} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{product?.title}</h5>
            <p className="card-text">{product?.description}</p>
            <p className="card-price">Price: {product?.price} $</p>
            <p className='card-rating'>Rating: {product?.rating}</p>
        </div>
    </div>
  )
}

export default ProductDetail;