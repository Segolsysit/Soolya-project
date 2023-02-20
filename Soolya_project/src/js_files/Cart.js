import { Button } from '@mui/material';
import { light } from '@mui/material/styles/createPalette';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../css_files/Cart.css'
import Header from '../header';
import main_1 from "../images/main_1.jpg";

function Cart() {

  const [cartdata, setcartdata] = useState([])

  // const storedata = JSON.parse(localStorage.getItem("modeldata"))

  useEffect(() => {
    axios.get("https://63bd5802d660062388a24683.mockapi.io/Soolya").then((res) => {
      setcartdata(res.data)
      // console.log(res.data);
    })
  }, [cartdata])
  // console.log(cartdata);

  const nav = useNavigate();

 const bookBtn = ()=>{
      nav('/bookingsteps');
 }


  return (

    <div>
      <Header cartdata={cartdata} ></Header>
      <div className='cart'>
        {/* <div> */}
        <div >
          {cartdata.map((item) =>
            <div className='cartdata'>
              <div class="card bg-dark text-light">
                <img class="card-img" src={main_1} alt="Card image"/>
                  <div class="card-img-overlay">
                    <h5 class="card-title">{item.Category}</h5>
                    <p class="card-text">{item.Service}</p>
                    <p class="card-text"><i class="fa-solid fa-indian-rupee-sign"></i>{item.price}</p>
                    <Button variant="contained" onClick={bookBtn} >Book Now</Button>
                  </div>
              </div>  
            </div>
          )}
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Cart