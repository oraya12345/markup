import React, { useState } from 'react';
import '../../css/Address.css'
import { useHistory } from 'react-router';
import Axios from 'axios';

export default function Address() {
    const [url, setUrl] = useState("http://localhost/markup-api/api/")
    const [address, setAddress] = useState("");
    const [homeNumber, setHomeNumber] = useState("");
    const [subDist, setSubDist] = useState("");
    const [dist, setDist] = useState("");
    const [provident, setProvident] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [remark, setRemark] = useState("");
    const history = useHistory()

    const onSaveAddress = async () => {
        let a = homeNumber +" <br/>"+subDist+" <br/>"+dist+" <br/>"+provident+" <br/>"+remark+" <br/>"
        let res = await Axios.post(url+"address/address",{
            address:a,
            postCode:zipCode,
            memberID:localStorage.memberID
        })

        if(res.data.status == "success"){
            alert("บันทึกที่อู่เรียบร้อย")
            history.push("/productOrder")
        }


    }
    return (

        <div className="address">
            {/* <div className=" form-group">
                <h2>ช่องทางการติดต่อ</h2>
                <input type="text" className="form-control" placeholder="ชื่อ-นามสกุล" />
                <label></label>
                <input type="text" className="form-control" placeholder="หมายเลขโทรศัพท์" />
            </div> */}

            <div className=" form-group">
                <h2>ที่อยู่</h2>
                <input type="text" className="form-control" placeholder="บ้านเลขที่ " onChange={(e) => setHomeNumber(e.target.value)} />
                <label></label>
                <input type="text" className="form-control" placeholder="ตำบล/แขวง "  onChange={(e) => setSubDist(e.target.value)} />
                <label></label>
                <input type="text" className="form-control" placeholder="อำเภอ/เขต "  onChange={(e) => setDist(e.target.value)} />
                <label></label>
                <input type="text" className="form-control" placeholder="จังหวัด "  onChange={(e) => setProvident(e.target.value)} />
                <label></label>
                <input type="text" className="form-control" placeholder="รหัสไปรษณีย์ "  onChange={(e) => setRemark(e.target.value)} />
                <label></label>
                <input type="text" className="form-control" placeholder="รายละเอียดเพิ่มเติม "  onChange={(e) => setZipCode(e.target.value)} />
            </div>
            <div>
                <button className='btn btn-success' onClick={()=>onSaveAddress()}>บันทึก</button>
            </div>
          
        </div>

    )
}
