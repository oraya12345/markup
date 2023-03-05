import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'
import '../../css/Login.css'
import { LoginContext } from '../../store/LoginProvider'
import { UserContext } from '../../store/UserProvider'

export default function Login() {
    const history = useHistory()
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [url_image, seturl_image] = useState("http://localhost/markup-api/uploads/")
    const { user, setUser } = useContext(UserContext);
    const { login, setLogin } = useContext(LoginContext);
    const [email, setEmail] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordStatus, setPasswordStatus] = useState("false")
    const [phone, setPhone] = useState("")
    const [picture, setPicture] = useState(null)

    const checkPassword = (pass, conf) => {
        if (pass == conf) {
            setPasswordStatus(true)
        } else {
            setPasswordStatus(false)
        }
    }

    const onRegister = async () => {
        let formData = new FormData()
        formData.append("userfile", picture)
        let res2 = await axios.post(url + "products/upload",formData)
        let filename = ""
        if (res2.data.error == "") {
            filename = res2.data.filename
        }
        let res = await axios.post("http://localhost/markup-api/api/member/register", {

            email: email,
            fname: fname,
            lname: lname,
            password: password,
            phone: phone,
            picture: filename

        })
        setFname("")
        setLname("")
        setPhone("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        alert(res.data.detail)

    }

    const onLogin = async () => {
        let res = await axios.get("http://localhost/markup-api/api/member/login", {
            params: {
                email: email,
                password: password
            }
        })
        if (res.data.status == "error") {
            alert(res.data.detail)
        } else {
            alert("welcome " + res.data[0].fname + " " + res.data[0].lname)
            localStorage.memberID = res.data[0].memberID
            localStorage.status = res.data[0].memberStatus

            setLogin(true)
            await getProfile(res.data[0].memberID)

            if (res.data[0].memberStatus == "admin") {
                history.push("/admin/product/add")
            } else {
                history.push("Home_Dior")
            }

        }
        console.log(res.data);
    }

    const getProfile = async (memberID) => {
        let res = await axios.get(url + "member/info", {
            params: {
                memberID: memberID
            }
        })

        console.log("member info : ", res.data);
        if (res.data.length > 0) {
            setUser(res.data[0])
        }
    }

    useEffect(() => {
        checkPassword(password, confirmPassword)
    }, [password, confirmPassword])

    return (

        <div className="login">
            <div className="row ">
                <div className="col-lg-5">
                    <div className="layout">
                        <h3 className="text-center ">Register</h3>
                    </div>
                    <div className="form-group box-input">
                        <label>First Name</label>
                        <input type="text" className="form-control" value={fname} placeholder="First Name" onChange={(e) => setFname(e.target.value)} />  {/* ใส่ value={fname} ทุกอัน */}
                    </div>
                    <div className="form-group box-input">
                        <label>Last Name</label>
                        <input type="text" className="form-control" value={lname} placeholder="Last Name" onChange={(e) => setLname(e.target.value)} />
                    </div>
                    <div className="form-group box-input">
                        <label>Phone</label>
                        <input type="text" className="form-control" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group box-input">
                        <label>Email</label>
                        <input type="email" className="form-control" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group box-input">
                        <label>Password</label>
                        <input type="password" className="form-control" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group box-input">
                        <label>Confirm password</label>
                        <input type="password" className="form-control" value={confirmPassword} placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div>
                        {
                            passwordStatus ? <span className="text-success"></span> : <span className="text-danger">Password not match</span>
                        }
                    </div>
                    <div className="form-group box-input">
                        <label>Picture</label>
                        <input type="file" className="form-control" onChange={(e) => setPicture(e.target.files[0])} />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-dark box-btn btn-radius" onClick={() => onRegister()}>Register</button>
                    </div>
                </div>

                <div className="col-lg-2">
                    <div className="box-center">
                        <div className="border-line">
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 ">
                    <div className="layout">
                        <h3 className="text-center ">Login</h3>
                    </div>
                    <div className="form-group box-input">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group box-input">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-dark box-btn btn-radius" onClick={() => onLogin()}>Login</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
