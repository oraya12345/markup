import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../css/Header.css'
import { LoginContext } from '../../store/LoginProvider';
import { CartContext } from './../../store/CartProvider';

export default function Header() {
    const { login } = useContext(LoginContext);
    const [memberID, setMemberID] = useState(localStorage.memberID);
    const { cart } = useContext(CartContext);
    const [picture, setPicture] = useState("")
    const [fullname, setFullname] = useState("")

    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [url_image, seturl_image] = useState("http://localhost/markup-api/uploads/")


    const getUserInfo = async () => {

        let res = await Axios.get(url + "member/info", {
            params: {
                memberID: localStorage.memberID
            }
        })
        console.log("user info : ",res.data);
        if (res.data.length > 0) {
            setFullname(res.data[0].fname + " " + res.data[0].lname)
            setPicture(res.data[0].picture)
        }

    }

    const ShowProfile = () => {
        return (
            <>
                <li className="nav-item" style={{  position: 'sticky'}}>
                    <Link to="/profile" className="navbar-brand" href="#">

                        {
                            picture ? <img className="topImg" src={url_image + picture} />
                                :
                                <img className="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSydf8x6usY0wKoZsxVSuDy7s4b1IadzhPnuq5AFp65LJT5P0cSF8Q1lxzja19yasIctXM&usqp=CAU" />
                        }
                    </Link>



                </li>
                <li className="nav-item">
                    <Link to="/profile"  href='#'><label className="user">{fullname}</label></Link>
                </li>
            </>

        )
    }

    useEffect(() => {
        getUserInfo()
    }, [])



    return (
        <div className="top">
            <nav className="navbar navbar-expand-md navbar-light" style={{ backgroundColor: '#ebadc0',}}>
                {/* Brand */}
                <Link to="/Home_Dior" href="#" ><label  className="brand">Dior</label></Link>
                {/* Toggler/collapsibe Button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Navbar links */}
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {
                            login ? <ShowProfile /> : <Link className="nav-link" to='/login'><i class="fas fa-user"></i></Link>
                        }

                        <li className="nav-item">
                            <Link className="nav-link" to='/producthistory'><i class="fas fa-clipboard"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link icon-cart" to='/productCart'><i class="fas fa-shopping-cart"></i><span class="badge badge-danger">{cart.length}</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>





            <nav className="navbar navbar-expand-sm " style={{ backgroundColor: '#a7254c' }}>
                <div className="container-fluid justify-content-center">
                    <ul className="navbar-nav ">
                        <Link className="nav-link" to="/"><label className="link">สิทธิพิเศษเฉพาะออนไลน์</label></Link>

                        <div class="dropdown">
                            <li type="button" data-bs-toggle="dropdown">
                                <Link className="nav-link" to="/"><label className="link">น้ำหอม</label></Link>
                            </li>
                            <ul class="dropdown-menu">
                                <li><Link to="/product_perfume" class="dropdown-item" href="">น้ำหอมผู้หญิง</Link></li>
                                <li><Link to="/productMen" class="dropdown-item" href="">น้ำหอมผู้ชาย</Link></li>
                            </ul>
                        </div>


                        <div class="dropdown">
                            <li type="button" data-bs-toggle="dropdown">
                                <Link className="nav-link" to="/"><label className="link">เมคอัพ</label></Link>
                            </li>
                            <ul class="dropdown-menu">
                                <li><Link to="/product_lips" class="dropdown-item" href="">ลิปสติก</Link></li>
                                <li><Link to="/product_foundation" class="dropdown-item" href="">รองพื้น</Link></li>
                            </ul>
                        </div>


                        <div class="dropdown">
                            <li type="button" data-bs-toggle="dropdown">
                                <Link className="nav-link" to="/"><label className="link">ผลิตภัณฑ์บำรุงผิว</label></Link>
                            </li>
                            <ul class="dropdown-menu">
                                <li><Link to="/product_Skin" class="dropdown-item" href="">โลชั่น</Link></li>
                                <li><Link to="/productSerum" class="dropdown-item" href="">เซรั่ม</Link></li>
                                <li><Link to="/productSunscreen" class="dropdown-item" href="">ครีมกันแดด</Link></li>
                                <li><Link to="/productScrub" class="dropdown-item" href="">สครับและมาร์ก</Link></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
