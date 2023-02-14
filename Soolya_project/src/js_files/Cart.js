import React, { useEffect } from 'react'
// import { AppContext } from '../App'
import '../css_files/Cart.css'
function Cart({cart}) {
  // console.log(cart);
  const {cartdata} = React.useContext(AppContext)
  console.log(cartdata);


  return (

    <div> 
      {}
        <h1>hi</h1>
    </div>
  )
}

export default Cart