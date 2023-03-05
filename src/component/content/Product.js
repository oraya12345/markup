import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../css/Product.css'


export default function Product() {
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
    }

    useEffect(() => {
        getOrder()
    }, [])


    return (
        <div className="product">
            <h4>สินค้าที่สั่งซื้อทั้งหมด</h4>
            <div className="product-item">
                <div className="Img">
                    <img src="images/missdior/m5.png" />
                </div>
                <h5>Miss Dior</h5>
                <h4>จำนวน 2 ชิ้น</h4>
                <p>ราคา 3,000 บาท</p>
                <h6>รวมเงินทั้งสิ้น 6,000 บาท</h6>
                <h3>รออนุมัติ</h3>
            </div>
            <div className="product-item">
                <div className="Img">
                    <img src="images/lips/l8.png" />
                </div>
                <h5>Lips</h5>
                <h4>จำนวน 1 ชิ้น</h4>
                <p>ราคา 3,000 บาท</p>
                <h6>รวมเงินทั้งสิ้น 3,000 บาท</h6>
                <h3>อนุมัติแล้ว</h3>
            </div>
        </div>
    )
}
