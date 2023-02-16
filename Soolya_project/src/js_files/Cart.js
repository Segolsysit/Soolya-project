  import { light } from '@mui/material/styles/createPalette';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../css_files/Cart.css'
function Cart() {
  // console.log(cart);
  const {cartdata} = React.useContext()
  console.log(cartdata);



// console.log(arr);

// console.log(add);
// const fil = arr.filter((a)=>{
//   return a._id === add
// })
// console.log(add.Category);
// console.log(ll);
  return (

    <div> 
        <h1>hi</h1>
{/* {ll._id} */}
{/* {ll.Category} */}
      {arr.map((l)=>(
 <div>
 <p>{l.price}</p>
 <p>{l.Category}</p>

</div>
          ))} 
<button onClick={()=>nav('/list')}>cart</button>
    
    </div>
  )
}

export default Cart