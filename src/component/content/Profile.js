import Axios from 'axios';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { LoginContext } from '../../store/LoginProvider';
import '../../css/Profile.css'

export default function Profile() {
  const history = useHistory()
  const { login, setLogin } = useContext(LoginContext);
  const [email, setEmail] = useState("")
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phone, setPhone] = useState("")
  //const [picure, setPicure] = useState("")
  const [picture, setPicture] = useState("")
  const [pictureData, setPictureData] = useState(null)

  const [url, setUrl] = useState("http://localhost/markup-api/api/")
  const [url_images, seturl_images] = useState("http://localhost/markup-api/uploads/")


  const getProfile = async () => {
    let res = await Axios.get(url + "member/info", {
      params: {
        memberID: localStorage.memberID
      }
    })

    console.log("member info : ", res.data);
    if (res.data.length > 0) {
      setEmail(res.data[0].email)
      setFname(res.data[0].fname)
      setLname(res.data[0].lname)
      setPhone(res.data[0].phone)
      setPicture(res.data[0].picture)
    }
  }

  const onLogout = () => {
    localStorage.clear();
    setLogin(false)
    history.push("/login")
  }

  const onSave = async () => {
    let formData = new FormData()
    formData.append("userfile", pictureData)
    let res2 = await Axios.post(url + "products/upload", formData)
    let filename = ""
    if (res2.data.error == "") {
      filename = res2.data.filename
    }

    let res = await Axios.put(url + "member/info", {
      email: email,
      fname: fname,
      lname: lname,
      phone: phone,
      memberID: localStorage.memberID,
      picture: filename
    })

    console.log("update data : ", res.data);

    if (res.data.status == "success") {
      alert("บันทึกข้อมูลเสร็จสิ้น")
      getProfile();
    } else {
      alert("ไม่สามารถบันทึกข้อมูลได้")
    }
  }

  useEffect(() => {
    getProfile();


  }, []);


  return (
    <div class="fluid">
      <h3>Profile</h3>
      <div className="profile">
        <div className='text-left'>
          {
            picture ? <img src={url_images + picture} className="Images" alt="" /> : <img src="/images/u.png" className="images" alt="" />
          }
          <div className="  form-group ">
            <label>First Name</label>
            <input type="text" className="form-control" value={fname} placeholder="First Name" onChange={(e) => setFname(e.target.value)} />  {/* ใส่ value={fname} ทุกอัน */}
          </div>
          <div className=" form-group ">
            <label>Last Name</label>
            <input type="text" className="form-control" value={lname} placeholder="Last Name" onChange={(e) => setLname(e.target.value)} />
          </div>
          <div className=" form-group ">
            <label>Phone</label>
            <input type="text" className="form-control" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className=" form-group ">
            <label>Picture</label>
            <input type="file" className="form-control"  placeholder="Picture" onChange={(e) => setPictureData(e.target.files[0])} />
          </div>
          <div className=" form-group ">
            <label>Email</label>
            <input type="email" className="form-control" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} readOnly />
          </div>
          <div class="row">
            <div className='col-3 text-left'>
              <button className='btn btn-success' onClick={() => onSave()}>Save</button>
            </div>
            <div className='col-3 text-left'>
              <button className='btn btn-success' onClick={() => onLogout()}>Logout</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
