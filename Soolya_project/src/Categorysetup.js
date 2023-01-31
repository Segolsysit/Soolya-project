import React, { useEffect } from 'react'
import "./Admin.css"
import Navbar_admin from './Navbar_admin';
import { useState } from 'react';
import axios from 'axios';

function Categorysetup() {

  const [catagortSetup,setCatagortSetup]=useState("");
  const [img,setImg]=useState("");


  const [getData,setgetData]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/api/fetch_items").then((res)=>{
    setgetData(res.data);
    })

  },[getData])

const AddService = (e)=>{
  e.preventDefault()
  const formdata= new FormData()
  formdata.append("catagortSetup",catagortSetup);
  formdata.append("file",img)
  axios.post("http://localhost:3001/api/new_catagory",formdata).then((res) => {
    alert(res.data)
   })
}
const localpath = "http://localhost:3001/"
  return (
    <div className='ak'>
      <Navbar_admin></Navbar_admin>
      <div className="container-fluid">
        <h1>Category Setup</h1>
        <form onSubmit={AddService}>
         <label>Category Name</label><br/>
         <input type="text" onChange={(e)=>{setCatagortSetup(e.target.value)}}></input><br/><br/>
         <label>Image</label><br/>
         <input type="file" onChange={(e)=>{setImg(e.target.files[0])}}></input><br/><br/>
         <button type='submit'>Addservice</button>
         </form>
      </div>
      {
        getData.map((data) => (
          <div>
            <p>{data.catagortSetup}</p>
            <img src={localpath + data.filename} style={{width:"5em",height:"5em"}} alt=".........."></img>
          </div>
        ))
      }
    </div>
  )
}

export default Categorysetup
