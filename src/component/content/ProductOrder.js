import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { mockComponent } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { Link } from 'react-router-dom';
import '../../css/ProductOrder.css'
import { CartContext } from './../../store/CartProvider';
import moment from 'moment'
import { useHistory } from 'react-router-dom';
import { LoginContext } from './../../store/LoginProvider';

export default function ProductOrder() {
    const { cart, clearCart } = useContext(CartContext);
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [url_images, seturl_image] = useState("http://localhost/markup-api/uploads/")
    const [total, setTotal] = useState(0);
    const [address, setAddress] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phone, setPhone] = useState("");
    const [fullname, setFullname] = useState("");
    const [totalQty, setTotalQty] = useState(0)
    const { login, setLogin } = useContext(LoginContext);

    const history = useHistory()

    const getAddress = async () => {
        let res = await Axios.get(url + "address/address", {
            params: {
                memberID: localStorage.memberID
            }
        })
        console.log("address : ", res.data);
        if (res.data.length > 0) {
            setAddress(res.data[res.data.length - 1].address)
            setPostCode(res.data[res.data.length - 1].postCode)
        }
    }

    const getInfo = async () => {
        let res = await Axios.get(url + "member/info", {
            params: {
                memberID: localStorage.memberID
            }
        })

        if (res.data.length > 0) {
            setPhone(res.data[0].phone)
            setFullname(res.data[0].fname + " " + res.data[0].lname)
        }

    }

    const setData = (data) => {
        let t = 0
        let qty = 0
        data.forEach(item => {
            t += (item.Price * item.qty)
            qty += item.qty
        });
        setTotalQty(qty)
        setTotal(t)
    }

    const confirmOrder = async () => {
        if (cart.length > 0) {
            let res = await Axios.post(url + "orderss/orders", {
                OrderDate: moment().format('YYYY-MM-DD'),
                Address: address + "<br/>" + postCode,
                memberID: localStorage.memberID,
                orderStatus: "รอการจัดส่งสินค้า",
                payment: total
            })

            if (res.data.status == "success") {
                onSaveOrderDetail(res.data.orderID)
            }
        } else {
            alert("กรุณาทำการเลือกสินค้า")
        }

    }

    const onSaveOrderDetail = async (orderID) => {
        cart.forEach(async item => {
            await Axios.post(url + "orders_detail/ordersdetail", {
                OrderID: orderID,
                ProductID: item.ProductID,
                Qty: item.qty
            })
        });

        alert("ทำการสั่งซื้อเรียบร้อย")
        clearCart()
        history.push("/")
    }

    useEffect(() => {
        getInfo()
        getAddress()
        setData(cart)
    }, [cart]);

    return (
        <div className="order" style={{ paddingBottom: 50 }}>
            <h4>ที่อยู่สำหรับจัดสั่ง</h4>
            <div className="orderItem">
                {
                    login ? <>
                        <Link to="/address"><i class="fas fa-angle-right"></i></Link>
                        <div className="fullname">
                            ชื่อ {fullname}
                        </div>
                        <div>
                            เบอร์โทร {phone}
                        </div>
                        {
                            address ? <>
                                <div dangerouslySetInnerHTML={{ __html: address }} />
                                {postCode}
                            </> : <div>
                                <h3>กรุณาใส่ข้อมูลที่อยู่การจัดส่ง</h3>
                            </div>
                        }

                    </> : <div>
                        <h3>กรุณาทำการ login ก่อนสั่งซื้อ <Link to="/login">Login Click</Link></h3>

                    </div>
                }

            </div>

            <h4>สินค้าที่สั่งซื้อ</h4>
            <div className="order-item">
                {
                    cart.map((item, index) => (
                        <div className="Img">
                            <img src={url_images + item.picture} class="rounded" alt="" />
                            <h5>{item.ProductName}</h5>
                            <p>ราคา {Number(item.Price).toLocaleString()} x {item.qty}</p>
                            <p>รวม {(item.Price * item.qty).toLocaleString()}</p>
                        </div>
                    ))
                }

            </div>

            <h4>คำสั่งซื้อทั้งหมด</h4>
            <div className="order-item">
                <table className='table'>
                    <tr>
                        <td>คำสั่งซื้อทั้งหมด ({totalQty} ชิ้น)</td>
                        <td>{total.toLocaleString()} บาท</td>
                    </tr>
                </table>
            </div>
            <div className='text-center'>
                <button className='btn btn-success' style={{ width: 300 }} onClick={() => confirmOrder()} disabled={!login}>ยืนยันการสั่งซื้อ</button>
            </div>
        </div>

    )
}
