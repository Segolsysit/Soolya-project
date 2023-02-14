import { light } from '@mui/material/styles/createPalette';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AppContext } from '../App'
import '../css_files/Cart.css'
function Cart({cart}) {
  // console.log(cart);
  // const {cartdata} = React.useContext(AppContext)
  // console.log(cartdata);
  const nav = useNavigate();
  let setAdd;
// const [add,setAdd] = useState('');
// const [ll,setLl]= useState('');
const [arr,setArr] = useState([]);
// const arr=[ll];
useEffect(()=>{
// axios.get()
setAdd = localStorage.getItem("da");
// console.log(arr);

},[])

useEffect(()=>{
  axios.get('http://localhost:3001/service_api/new_fetch_service_items/'+setAdd).then((re)=>{
// setLl(re.data);

setArr([...arr,re.data])
console.log(re);
})


},[])

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