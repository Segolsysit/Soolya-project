import React from 'react';
import "../css_files/Employee-profile.css";
import {useEffect, useState} from "react";
import axios from 'axios';
import rating from "../images/ratings.png";
import { useNavigate } from "react-router-dom";
import main_1 from "../images/main_1.jpg";


function EmployeeProfile() {

  const [emplist,setEmpList] = useState([])
  const nav = useNavigate();


  useEffect(()=>{
    axios.get("https://63bd5802d660062388a24683.mockapi.io/Soolya").then((res)=>{
      setEmpList(res.data);
        // console.log(emplist);
    
    })
    },[emplist])
  return (
    <div>
      
       
<div className='emp_details'>
      {
        emplist.map((emplist)=>(
                 
          <div className="emp_profile" key={emplist.id}>

          <div className="emp_profile_inner">
              <div className="emp_image_size">
                  <div className="two">
                  <img className="emp_img" src={main_1} alt="emp_man"></img>
                  </div>
              </div>

              <div className="emp_bio">
                  <div>
                      <p className="one"><i id="user-icon" class="fa-regular fa-user"></i> {emplist.FirstName} {emplist.LastName}</p>
                      <p>{emplist.WorkType}</p>
                  </div>
                  <div className="d_flex">
                      <p> Ratings</p>
                      <img className="ratings_image" src={rating} alt="emp_man"></img>
                  </div>
                  <div>
                      <p><i id="user-icon" class="fa-solid fa-envelope"></i> {emplist.Email}</p>
                  </div>
                  <div className="d_flex">
                      <i id="user-icon" className="fa-solid fa-location-dot"></i>
                      <address className="emp_profile_address">
                          {emplist.StreetAddress}
                          <br></br>
                          {emplist.district}
                      </address>
                  </div>
              </div>

              <div className="emp_booking">
                  <button className="emp_booking_btn btn btn-primary " onClick={() => nav('/emp_profile')}>View more</button>
              </div>
          </div>

      </div>
        ))
       }
    </div>
        

    </div>
  )
}

export default EmployeeProfile