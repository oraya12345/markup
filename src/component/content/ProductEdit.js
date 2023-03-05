import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios';
import { useParams } from 'react-router';
import '../../css/ProductEdit.css'
import SidebarAdmin from '../widget/SidebarAdmin';

export default function ProductEdit() {
    const { productID } = useParams()
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [url_image, seturl_image] = useState("http://localhost/markup-api/uploads/")

    const [productName, setProductName] = useState("")
    const [productTypeID, setProductTypeID] = useState("")
    const [productDetail, setProductDetail] = useState("")
    const [picture, setPicture] = useState(null)
    const [stock, setStock] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState("")
    const [productType, setProductType] = useState([])
    const [pictureData, setPictureData] = useState(null)



    const getProduct = async (id) => {
        let res = await axios.get(url + "products/product", {
            params: {
                ProductID: id
            }
        })

        console.log("product : ", res.data);
        if (res.data.length > 0) {
            setBrand(res.data[0].Brand)
            setPrice(res.data[0].Price)
            setProductName(res.data[0].ProductName)
            setProductTypeID(res.data[0].productTypeID)
            setStock(res.data[0].stock)
            setProductDetail(res.data[0].productDetail)
            setPicture(res.data[0].picture)

        }
    }

    const getProudctType = async () => {
        let res = await axios.get(url + "producttype/producttype")
        setProductType(res.data)
    }

    const editProduct = async () => {
        let formData = new FormData();
        formData.append("userfile", pictureData)
        let res2 = await axios.post(url + "products/upload", formData)
        console.log("update product : ", res2.data);
        if (res2.data.error == ""){
            let filename = res2.data.filename
            let res = await axios.put(url + "products/product", {
                Brand: brand,
                productTypeID: productTypeID,
                ProductName: productName,
                productDetail: productDetail,
                Price: price,
                stock: stock,
                Picture: filename,    /* รูป */
                ProductID: productID
            })
            console.log("edit ", res.data);
            getProduct(productID)
            if (res.data.status == "success") {
                alert("แก้ไขข้อมูลเรียบร้อย")
            } else {
                alert("ไม่สามารถแก้ไขได้")
            }
        }

    }

    useEffect(() => {
        getProduct(productID)
        getProudctType()
    }, [productID]);


    return (
        <div class="d-flex" id="wrapper">

            <SidebarAdmin />
            {/* <div class="bg-white" id="sidebar-wrapper">
                <div class="sidebar-header text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
                    <i class="fas fa-user-secret me-2"></i>Admin
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
                    <a href="http://localhost:3001/login" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                        <i class="fas fa-sign-out-alt me-2"></i>ออกจากระบบ
                    </a>
                </div>
            </div> */}

            <div class="Edit">
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4 ">
                    <div class="d-flex align-items-center" >
                        <h2 className="edit"  style={{ marginLeft: 100}}>แก้ไขสินค้า</h2>
                    </div>
                </nav>
                <div className='row'>
                    <div >
                        <div className='form-group' >
                            <label style={{ marginTop: 50}}>Brand</label>
                            <input type='text' className='form-control' value={brand} onChange={(e) => setBrand(e.target.value)} />
                            <label >ProductType</label>
                            <select className='form-control' value={productTypeID} onChange={(e) => setProductTypeID(e.target.value)}>
                                <option> -- SELECT -- </option>
                                {
                                    productType.map((item, index) => (
                                        <option key={index} value={item.productTypeID}>{item.productTypeName}</option>
                                    ))
                                }
                            </select>
                            <label  >ProductName</label>
                            <input type='text' className='form-control' value={productName} onChange={(e) => setProductName(e.target.value)} />

                            <label>ProductDetail</label>
                            <textarea className='form-control' value={productDetail} onChange={(e) => setProductDetail(e.target.value)}></textarea>

                            <label>Price</label>
                            <input type='text' className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} />

                            <label>Stock</label>
                            <input type='number' className='form-control' value={stock} onChange={(e) => setStock(e.target.value)} />

                            <label>Picture</label>
                            <input type='file' className='form-control' value={picture} onChange={(e) => setPictureData(e.target.files[0])} />
                        </div>

                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => editProduct()}>แก้ไข</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}