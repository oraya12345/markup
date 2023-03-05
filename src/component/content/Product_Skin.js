import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../css/Product_Skin.css'
import { Link } from 'react-router-dom';

export default function Product_Skin() {

    const [product, setproduct] = useState([])
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [url_images, seturl_images] = useState("http://localhost/markup-api/uploads/")
    //172.18.125.129
    const getProduct = async () => {

        let res = await axios.get(url + "products/product", {
            params: {
                productTypeID: 5
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
        <div className="container">
            <div className="perfume">
                <div className="perfume-img">
                    <h3>โลชั่น</h3>
                    <div className="cover">
                        <img src="/images/i2.png" class="rounded" alt="" style={{ height: 500 }} />
                    </div>
                    <div className="border-inline">
                        <h4>LOTION</h4>
                    </div>


                    <div class="fluid">
                        <div class="row">
                            {
                                product.map((item, index) => (
                                    <div key={index} className="col-sm ">

                                        <img src={url_images + item.Picture} />
                                        <h5>{item.ProductName}</h5>
                                        <h6>{item.productDetail}</h6>
                                        <p>฿{item.Price}</p>
                                        <Link to={"/productdetail/" + item.ProductID} href="" className="home-btn-a" alt="/">Shop </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
