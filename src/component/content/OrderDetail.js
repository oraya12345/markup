import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import '../../css/OrderDetail.css'

export default function OrderDetail() {
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const { orderID } = useParams()
    const [order, setOrder] = useState([])
    const [status, setStatus] = useState("")


    const onChangeStatus = async () => {

        if(status!=""){
            let res = await Axios.put(url+"orderss/status",{
                OrderID:orderID,
                orderStatus:status
            })
    
            if(res.data.status == "success"){
                alert("เปลี่ยนสถานะเรียบร้อย")
            }else{
                alert("ไม่สามารถเปลี่ยนสถานะได้")
            }
        }else{
            alert("กรุณาเลือกสถานะ")
        }
        
    }

    const getOrderDetail = async () => {
        let res = await Axios.get(url + "orders_detail/orderdetail", {
            params: {
                OrderID: orderID
            }
        })

        console.log("order detail : ", res.data);
        setOrder(res.data)
    }

    useEffect(() => {
        getOrderDetail(orderID)
    }, [orderID])



    return (
        <div className="orderDetail" >
            <h3>รายละเอียดการสั่งซื้อ</h3>
            <table class="table ">
                <thead>
                    <tr>
                        <th><p>Name</p></th>
                        <th><p>Qty</p></th>
                        <th><p>Price</p></th>
                        <th><p>Total</p></th>
                    </tr>
                </thead>
                <tbody className="OrderShop">
                    {
                        order.map((item, index) => (
                            <tr key={index}>
                                <td><h5>{item.ProductName}</h5></td>
                                <td><h5>{item.Qty}</h5></td>
                                <td><h5>{Number(item.Price).toLocaleString()}</h5></td>
                                <td><h5>{(item.Price * item.Qty).toLocaleString()}</h5></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
          
        </div>
    )
}
