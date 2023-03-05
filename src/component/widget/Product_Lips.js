
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Product_Lips() {

    const [product, setproduct] = useState([])
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [url_images, seturl_images] = useState("http://localhost/markup-api/uploads/")
    //172.18.125.129
    const getProduct = async () => {

        let res = await axios.get(url + "products/product", {
            params: {
                productTypeID: 3
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
                    <h3>ลิปสติก</h3>
                    <div className="cover">
                        <img src="/images/lips/l1.png" class="rounded" alt="" style={{ height: 500 }}/>
                    </div>
                    <div className="border-inline">
                        <h4>ลิปบาล์ม และ ลิปบำรุง</h4>
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
