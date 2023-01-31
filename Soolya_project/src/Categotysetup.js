import React from 'react'
import "./Admin.css"
import Navbar_admin from './Navbar_admin';
// import { useState } from 'react';

function Categotysetup() {
  return (
    <div className='ak'>
      <Navbar_admin></Navbar_admin>
      <div className="container-fluid">
        <h1>Category Setup</h1>
         <label>Category Name</label><br/>
         <input type="text"></input><br/><br/>
         <label>Image</label><br/>
         <input type="file"></input>
      </div>
    </div>
  )
}

export default Categotysetup
