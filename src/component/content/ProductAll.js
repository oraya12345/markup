import React, { useEffect, useState } from 'react'
import '../../css/ProductAdd.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Axios from 'axios';
import SidebarAdmin from '../widget/SidebarAdmin'

export default function ProductAll() {
    const [product, setProduct] = useState([]);
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [url_image, seturl_image] = useState("http://localhost/markup-api/uploads/")

    const getProduct = async () => {
        let res = await Axios.get(url + "products/product", {
            params: {
                status: "all"
            }
        })

        console.log("product : ", res.data);

        if (res.data.length > 0) {
            setProduct(res.data)
        }
    }

    const onDel = async (id) => {
        let res = await Axios.delete(url + "products/product/" + id)
        console.log("delete product : ",res.data);

        if (res.data.status == "success") {
            alert("ลบสินค้าเรียบร้อย")
            getProduct()
        } else {
            alert("ไม่สามารถลบสินค้าได้")
        }
    }

    useEffect(() => {
        getProduct()
    }, []);

    return (
        <div class="d-flex" id="wrapper" style={{ fontFamily: 'initial' }}>

             <SidebarAdmin />

            {/* <div class="bg-white" id="sidebar-wrapper">
                <div class="sidebar-header text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
                    <i class="fas fa-user-secret me-2"></i>My Admin
                </div>

                <div class="list-group list-group-flush my my-3">
                <Link to="/admin/product/add" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                        <i class="fas fa-shopping-cart me-2"></i>เพิ่มสินค้า
                    </Link>
                    <Link to="/admin/product/all" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                        <i class="fas fa-gift me-2"></i>สินค้าทั้งหมด
                    </Link>
                    <Link to="/admin/product/customer" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                        <i class="fas fa-user-friends me-2 "></i>รายชื่อลูกค้า
                    </Link>
                    <Link to="/admin/product/payment" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                        <i class="fas fa-money-check-alt me-2 "></i>การชำระเงิน
                    </Link>
                    <Link to="/admin/product/shipping" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                        <i class="fas fa-truck me-2 "></i>การจัดส่ง
                    </Link>
                    <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                        <i class="fas fa-sign-out-alt me-2"></i>ออกจากระบบ
                    </a>
                </div>
            </div> */}

            <div class="page-content-wrapper">
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4 ">
                    <div class="d-flex align-items-center" style={{marginTop: 10, marginLeft: 30}}>
                        <h2 class="fs-2 m-0">สินค้าทั้งหมด</h2>
                    </div>
                </nav>
                <div class="fluid">
                    <div class="row">
                        {
                            product.map((item, index) => (
                                <div key={index} className="col-sm ">

                                    <img src={url_image + item.Picture} />
                                    <h5>{item.ProductName}</h5>
                                    <h6>{item.productDetail}</h6>
                                    <p>${item.Price}</p>
                                    <Link className="btn btn-warning" to={"/admin/product/edit/" + item.ProductID}>Edit</Link>
                                    &nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={() => onDel(item.ProductID)}>Delete</button>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

