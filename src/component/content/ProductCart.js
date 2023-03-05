import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../../css/ProductCart.css'
import { CartContext } from './../../store/CartProvider';

export default function ProductCart() {
    const { cart, subCart, changeCart } = useContext(CartContext);
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [url_images, seturl_image] = useState("http://localhost/markup-api/uploads/")


    return (
        <div class="cart">
            <h2>Cart products</h2>
            <table class="table ">
                <thead>
                    <tr>
                        <th><p>Product</p></th>
                        <th><p>Name</p></th>
                        <th><p>Detail</p></th>
                        <th><p>Price</p></th>
                        <th><p>Total</p></th>
                        <th><p>Delete</p></th>
                    </tr>
                </thead>
                <tbody className="product-cart">
                    {
                        cart.map((item, index) => (
                            <tr>
                                <td> <img src={url_images + item.picture} class="float-start" /> </td>
                                <td><h4>{item.ProductName}</h4></td>
                                <td>
                                    <button className="btn-delete" onClick={() => changeCart({ index: index, Price: item.Price, qty: item.qty - 1 })}>-</button>
                                    <span>{item.qty}</span>
                                    <button className="btn-plus" onClick={() => changeCart({ index: index, Price: item.Price, qty: item.qty + 1 })}>+</button>
                                </td>
                                <td><h5>{Number(item.Price).toLocaleString()}</h5></td>
                                <td><h5>{(item.Price * item.qty).toLocaleString()}</h5></td>
                                <td><label className='btn btn-danger' onClick={() => subCart(item.ProductID)}><i class="Icons fas fa-trash-alt"></i></label></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='text-center'>
                <Link to="/productOrder" className="Btn btn btn-danger"  >สั่งซื้อสินค้า</Link>
            </div>

        </div>
    )
}
