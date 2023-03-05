import React from 'react'

export default function ProductList(props) {

    const buyProduct  = (productID) => {
           console.log("productID : " , productID);
    }

    return (
        <div>
            Product List
            <div>
                {props.count}
            </div>

            <div className="row">
                {
                    props.product.map((item, index) => (
                        <div  className="col-md-3 " key={index}>
                            <div className="bg-info" style={{margin:5, padding:5}}>
                                   {item.ProductName}
                                   <div>
                                       <button className="btn btn-success" onClick={()=>buyProduct(item.ProductID)}>Buy</button>
                                   </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
