import React, { useEffect, useState } from 'react'
import '../../css/ProductPayment.css'

import SidebarAdmin from '../widget/SidebarAdmin'
import Axios from 'axios'
import ConvestString from '../widget/ConvestString'
import { Link } from 'react-router-dom'

export default function ProductPayment() {
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [order, setOrder] = useState([]);

    const getOrder = async () => {
        let res = await Axios.get(url + "orders/orders", {
            params: {
                status: "all"
            }
        })
        console.log("order all : ", res.data);
        setOrder(res.data)
    }

    useEffect(() => {
        getOrder()
    }, []);

    return (
        <div class="d-flex" id="wrapper" style={{ fontFamily: 'initial' }} >
            <SidebarAdmin />

            <div class="page-content-wrapper" style={{ fontFamily: 'initial' }}>
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4 ">
                    <div class="d-flex align-items-center" style={{ marginTop: 10, marginLeft: 30 }}>
                        <h2 class="fs-2 m-0">รายการสั่งของ</h2>
                    </div>
                </nav>
                <div>
                    <table className='tables table-bordered' style={{ marginLeft: 30, width: 1000, height: 200, textAlign: 'center' }}>
                        <thead >
                            <tr style={{ marginLeft: 30, width: 900, height: 50, textAlign: 'center' }}>
                                <th>Order Date</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Option</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                order.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.OrderDate}</td>
                                        <td>{item.fname + ' ' + item.lname}</td>
                                        <td>
                                            <ConvestString word={item.Address} />
                                        </td>
                                        <td>{(Number(item.payment)).toLocaleString()}</td>
                                        <td>{item.orderStatus}</td>
                                        <td>
                                            <Link to={"/admin/order/"+item.OrderID} className='btn btn-info'>View</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    )
}
