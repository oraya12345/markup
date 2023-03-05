import '../../css/Home.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Home() {

    const [product, setproduct] = useState([])
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [url_images, seturl_images] = useState("http://localhost/markup-api/uploads/")
    //172.18.125.129
    const getProduct = async () => {
       
        let res = await axios.get(url+"products/product", {
            params: {
                productTypeID: 9
            }
        })

        console.log("product : ", res.data);

        if (res.data.length > 0) {
             setproduct(res.data) 
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className='bd'>
              <div id="demo" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/images/home_dior/h1.png" />

                    </div>
                    <div class="carousel-item">
                        <img src="/images/home_dior/h2.png" />
                    </div>

                    <div class="carousel-item">
                        <img src="/images/home_dior/h3.png" />
                    </div>
                </div>


                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
            <div className="perfume">
                <div className="perfume-img">
                <div className='font'><h3>ผลิตภัณฑ์รุ่นลิมิเต็ดเอดิชั่น และ ผลิตภัณฑ์พิเศษเฉพาะออนไลน์</h3></div>
                    </div>
                    
                    <div class="fluid">
                        <div class="row">
                            {
                                product.map((item, index) => (
                                    <div key={index} className="col-sm">

                                        <img src={url_images + item.Picture} />
                                        <h5>{item.ProductName}</h5>
                                        <h6>{item.productDetail}</h6>
                                        <p>${item.Price}</p>
                                        <Link to={"/productdetail/"+item.ProductID} href="" className="home-btn-a" alt="/">Shop </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}