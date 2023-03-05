import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export default function AdminOrderDetail() {
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
            alert("กรุณเลือกสถานะ")
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
        <div style={{ marginTop: 45}}>
            <h3>รายละเอียดการสั่งซื้อ</h3>
            <table class="table " style={{ textAlign: 'center'}}>
                <thead>
                    <tr style={{ fontSize: 20}}>
                        <th><p>Name</p></th>
                        <th><p>Qty</p></th>
                        <th><p>Price</p></th>
                        <th><p>Total</p></th>
                    </tr>
                </thead>
                <tbody className="product-cart">
                    {
                        order.map((item, index) => (
                            <tr key={index}>
                                <td>{item.ProductName}</td>
                                <td>{item.Qty}</td>
                                <td>{Number(item.Price).toLocaleString()}</td>
                                <td>{(item.Price * item.Qty).toLocaleString()}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='text-center' style={{ margin: 30 }}>
                <div>
                    {/* Button to Open the Modal */}
                    <button type="button" className="btn btn-primary" style={{width:150}} data-toggle="modal" data-target="#changeStatus2">
                        เปลี่ยนสถานะ
                    </button>
                    {/* The Modal */}
                    <div className="modal fade" id="changeStatus2">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                {/* Modal Header */}
                                <div className="modal-header">
                                    <p className="modal-title">เปลี่ยนสถานะ</p>
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                </div>
                                {/* Modal body */}
                                <div className="modal-body">
                                    <div>
                                        <select className='form-control' style={{height:50}} onChange={(e) => setStatus(e.target.value)} >
                                            <option value=""> --เลือก-- </option>
                                            <option value="จัดส่งสินค้า">จัดส่งสินค้า</option>
                                            <option value="ยกเลิกรายการ">ยกเลิกรายการ</option>
                                        </select>
                                    </div>
                                    <div className='text-center'>
                                        <button className='btn btn-success' onClick={()=>onChangeStatus()}>ตกลง</button>
                                    </div>
                                </div>
                                {/* Modal footer */}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
