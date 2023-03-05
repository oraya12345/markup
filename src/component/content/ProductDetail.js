import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CartContext } from './../../store/CartProvider';
import '../../css/ProductDetail.css'
import { Link } from 'react-router-dom';

export default function ProductDetail() {
    const { productID } = useParams()
    const [product, setproduct] = useState([])
    const { cart, addCart } = useContext(CartContext);
    const [count, setCount] = useState(1);
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [url_images, seturl_image] = useState("http://localhost/markup-api/uploads/")

    const [ProductName, setProductName] = useState("");
    const [productDetail, setProductDetail] = useState("");
    const [Price, setPrice] = useState(0);
    const [Brand, setBrand] = useState("");
    const [picture, setPicture] = useState("");

    const getProduct = async (productID) => {
        let res = await Axios.get(url + "products/product", {
            params: {
                ProductID: productID
            }
        })

        if (res.data.length > 0) {
            setBrand(res.data[0].Brand)
            setPrice(res.data[0].Price)
            setProductName(res.data[0].ProductName)
            setProductDetail(res.data[0].ProductDetail)
            setPicture(res.data[0].Picture)
        }
    }

    const onBuy = () => {
        addCart({
            ProductID: productID,
            qty: count,
            Price: Price,
            ProductName: ProductName,
            productDetail: productDetail,
            Brand: Brand,
            picture: picture
        })
    }

    const onChangeCount = (data) => {
        if(data >0){
            setCount(data)
        }
    }

    useEffect(() => {
        getProduct(productID)
    }, [productID]);

    return (
        <div className="detail">
            <div className="inside-container">
                <h3>Product Detail</h3>
                {
                    <div className="detail-item ">
                        <img src={url_images + picture} />
                        <h5>{ProductName}</h5>
                        <h6>{productDetail}</h6>
                        <p>฿{Price}</p>


                        <div class="item-shop">
                            <div style={{ display: 'flex', alignItems: 'center', height: 100 }}>
                                {/* <button className='btn btn-sm btn-danger' style={{ width: 50 }}>-</button> */}
                                <label>จำนวน : </label>
                                <div>
                                    <input className='form-control' type='number' value={count} onChange={(e) => onChangeCount(e.target.value)} style={{ width: 100, height: 30 }} />
                                </div>
                                {/* <button className='btn btn-sm btn-danger' style={{ width: 50 }}>+</button> */}
                            </div>
                            <button className="btn btn-danger" onClick={() => onBuy()} >สั่งซื้อสินค้า</button>
                            {/* <Link className="item-heart" ><i class="fas fa-heart"></i></Link> */}
                            {/* <label className="item-cart" ><i class="fas fa-shopping-cart"></i></label> */}
                        </div>
                    </div>
                }
            </div>


        </div>
    )
}
