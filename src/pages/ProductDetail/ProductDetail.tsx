import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { ProductModel } from '../../models/responses/ProductModel';
import ProductService from '../../services/ProductService';
import './productDetail.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/slices/cartSlice';

type Props = {}

const ProductDetail = (props: Props) => {
    //const location = useLocation(); //querynin tamamına ulaşırız
    const [product, setProduct] = useState<ProductModel>();
    const params = useParams<{id:string}>(); //parametreye ulaşırız.
    const [screenWidth, setScreenWidth] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect( () => {
        if (params.id) {
            ProductService.getById(parseInt(params.id)).then(response => {
                setProduct(response.data);
            });
        }
        setScreenWidth(window.innerWidth>=992)

        const handleResize = () => {
            console.log("burada");
            setScreenWidth(window.innerWidth >= 992)
        }

        window.addEventListener('resize', handleResize);

    }, []);

    const decreaseQuantity = () => {
        if (quantity -1 > 0)
            setQuantity(quantity -1);
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const addProductToCart = () => {
        dispatch(addToCart({product: product, quantity: quantity}));
    }


  return (
    <div>
        <div className='row d-flex justify-content-center'>
            <div className='col-lg-8 col-md-12  d-flex align-items-center' >
                <div className="container-fluid" style={{padding:20, marginTop:75}}>
                    <div className='row d-flex align-items-center justify-content-center' >
                        <img src={product?.thumbnail} className="card-img-top img-fluid rounded-start mb-5" style={{maxWidth: 600}}/>
                        <div className='row d-flex align-items-center mt-4 w-75'>
                            <h3 className='mb-5'>{product?.title}</h3>
                            <p className="card-text" style={{fontSize:20}}>{product?.description}</p>
                            <p className='card-rating' style={{fontSize:15}}>2022 Model</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='payment-details col-lg-4 col-md-12 d-flex align-items-center'>
                <div className='container-fluid mt-5' style={{marginRight:15}}>
                    <div className={`row d-flex justify-content-center ${screenWidth ? 'custom-fixed' : ''}`}>
                        <table className='table table-borderless w-75 ' style={{height:0.2}}>
                            <thead >
                                <tr > <td colSpan={2}><p className='display-6'>Payment Details</p></td> </tr>
                            </thead>
                            <tbody >
                                <tr className="table-group-divider">
                                    <td className='col-6 text-end align-middle'>
                                        <h6 style={{color:'rgb(38, 214, 117)'}}> Quantity :</h6>
                                    </td>
                                    <td className='col-6 text-center'>
                                        <div className='d-flex justify-content-center'>
                                            <div className='col-2'> <button className = "btn btn-sm" onClick={decreaseQuantity}><h4>-</h4></button></div>
                                            <div className='col-2 d-flex align-items-center justify-content-center'> <h5 style={{color:'rgb(38, 214, 117)'}}> {quantity} </h5> </div>
                                            <div className='col-2'> <button className = "btn btn-sm" onClick={increaseQuantity}><h4>+</h4></button> </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='col-6'><h6>Unit Price: </h6></td>
                                    <td className='col-6 text-center'><h5>₺{product?.price}</h5></td>
                                </tr>
                                <tr>
                                    <td className='col-6'><h6>Total Price: </h6></td>
                                    <td className='col-6 text-center'><h5>₺{product?.price ? product?.price * quantity : ''} </h5></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='row d-flex justify-content-center'>
                            <button className='custom-btn w-75 shadow p-3 mb-5 rounded' onClick={addProductToCart}><b> Book Now</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ProductDetail;
