import React, { useEffect, useState } from 'react'
import { Link } from  'react-router-dom/cjs/react-router-dom.min'
import Axios from 'axios';
import SidebarAdmin from '../widget/SidebarAdmin';

export default function ProductAll() {
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [customer, setCustomer] = useState([]);


    const getCostomer = async () => {
        let res = await Axios.get(url+"member/member",{
            params:{
                status:"all"
            }
        })
        console.log("customer data : ",res.data);
        if(res.data.status != "error"){
            setCustomer(res.data)
        }
    }

    useEffect(() => {
        getCostomer()
    }, []);
    
    return (
        <div class="d-flex" id="wrapper" style={{ fontFamily: 'initial' }}>
            
            <SidebarAdmin/>
            <div class="page-content-wrapper" style={{ fontFamily: 'initial', marginLeft: 20, width: 900, height: 50, textAlign: 'center'}}>
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4 ">
                    <div class="d-flex align-items-center" style={{marginTop: 10, marginLeft: 30}}>
                        <h2 class="fs-2 m-0">รายชื่อลูกค้า</h2>
                    </div>
                </nav>
                <div>
                    <table className='table table-hover'>
                        <thead>
                            <tr style={{ marginLeft: 20, width: 900, height: 50, textAlign: 'center'}}>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>User Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customer.map((item,index) => (
                                    <tr key={index}>
                                        <td>{item.fname}</td>
                                        <td>{item.lname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.memberStatus}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

