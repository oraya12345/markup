import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../css/ProductHistory.css'
import ConvestString from './../widget/ConvestString';

export default function () {
    const [order, setOrder] = useState([])
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [url_images, seturl_image] = useState("http://localhost/markup-api/uploads/")

    const getOrder = async () => {
        let res = await Axios.get(url + "orders/orders", {
            params: {
                memberID: localStorage.memberID
            }
        })

        console.log("order : ", res.data);
        setOrder(res.data)
    }

    useEffect(() => {
        getOrder()
    }, [])
    return (
        <div className="history-item" style={{ textAlign: 'center' }} > 
            <h2>ประวัติการสั่งซื้อสินค้า</h2>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Order Date</th>
                        <th>Address</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map((item, index) => (
                            <tr key={index}>
                                <td>{item.OrderDate}</td>
                                <td><ConvestString word={item.Address}/></td>
                                <td>{Number(item.payment).toLocaleString()}</td>
                                <td>{item.orderStatus}</td>
                                <td>
                                    <Link to={"/order/"+item.OrderID} className="btn btn-danger" style={{marginTop: 2}}>Detail</Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>


    )
}
