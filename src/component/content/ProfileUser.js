import React, { useContext } from 'react';
import '../../css/Profile.css'

export default function ProfileUser() {


  return (
    <div class="fluid">
      <h3>Profile</h3>
      <div className="profile">
         <div className='text-left'>
        <img src="/images/lips/l1.png"  />
        <p>Name User</p>
        <div className=" top form-group box-input">
          <label>First Name</label>
          <input type="text" className="form-control" /> 
        </div>
        <div className="top form-group box-input">
          <label>Last Name</label>
          <input type="text" className="form-control"  />
        </div>
        <div className="top form-group box-input">
          <label>Phone</label>
          <input type="text" className="form-control" />
        </div>
        <div className="top form-group box-input">
          <label>Email</label>
          <input type="email" className="form-control"  />
        </div>
        <div class="row">
          <div className='col-3 text-left'>
            <button className='btn btn-success'>Save</button>
          </div>
          <div className='col-3 text-left'>
            <button className='btn btn-success' >Logout</button>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  )
}
