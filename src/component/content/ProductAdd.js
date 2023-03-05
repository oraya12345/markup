import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../../css/ProductAdd.css'
import axios from 'axios'
import SidebarAdmin from '../widget/SidebarAdmin'

export default function ProductAdd() {
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [productName, setProductName] = useState("")
    const [productTypeID, setProductTypeID] = useState("")
    const [productDetail, setProductDetail] = useState("")
    const [picture, setPicture] = useState(null)
    const [stock, setStock] = useState(1)
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState(0)
    const [productType, setProductType] = useState([])

    const getProudctType = async () => {
        let res = await axios.get(url + "producttype/producttype")
        setProductType(res.data)
    }

    const addProduct = async () => {
        let formData = new FormData()
        formData.append("userfile", picture)
        formData.append("Brand", brand)
        formData.append("productTypeID", productTypeID)
        formData.append("ProductName", productName)
        formData.append("productDetail", productDetail)
        formData.append("Price", price)
        formData.append("stock", stock)

        let res = await axios.post(url + "products/product", formData)
        console.log("add product : ", res.data);
        if (res.data.status == "success") {
            alert("เพิ่มสินค้าสำเร็จ")
        } else {
            alert("ไม่สามารถเพิ่มสินค้าได้")
        }
    }

    useEffect(() => {
        getProudctType()
    }, [])
    return (

        <div class="d-flex" id="wrapper" style={{ fontFamily: 'initial'}}>

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
                   
                    <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                        <i class="fas fa-sign-out-alt me-2"></i>ออกจากระบบ
                    </a>
                </div>
            </div> */}

            <div class="page-content-wrapper">
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4 ">
                    <div class="d-flex align-items-center" style={{marginTop: 10, marginLeft: 30}}>
                        <h2 class="fs-2 m-0">เพิ่มสินค้า</h2>
                    </div>
                </nav>

                <div class="container-fluid px-4">
                    <div>
                        <div className='form-group'>
                            <label>Brand</label>
                            <input type='text' className='form-control' value={brand} onChange={(e) => setBrand(e.target.value)} />
                            <label>ProductType</label>
                            <select className='form-control' value={productTypeID} onChange={(e) => setProductTypeID(e.target.value)}>
                                <option>{/* -- select --*/} </option>
                                {
                                    productType.map((item, index) => (
                                        <option key={index} value={item.productTypeID}>{item.productTypeName}</option>
                                    ))
                                }
                            </select>
                            <label>ProductName</label>
                            <input type='text' className='form-control' value={productName} onChange={(e) => setProductName(e.target.value)} />
                            <label>ProductDetail</label>
                            <textarea className='form-control' value={productDetail} onChange={(e) => setProductDetail(e.target.value)}></textarea>
                            <label>Price</label>
                            <input type='number' className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} />
                            <label>Picture</label>
                            <input type='file' className='form-control' onChange={(e) => setPicture(e.target.files[0])} />
                            <label>Stock</label>
                            <input type='text' className='form-control' value={stock} onChange={(e) => setStock(e.target.value)} />
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => addProduct()}>เพิ่ม</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
