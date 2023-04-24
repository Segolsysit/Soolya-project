import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode';
import { useCookies } from "react-cookie";
import axios from "axios";
import { Button, Table, TableBody, TableCell, TableRow, TableHead, TextField } from '@mui/material';

function MyOrders() {
    const [cookies, setCookie, removeCookie] = useCookies([]);
const [myorders,setMyorders] = useState([]);
const [email,setEmail] = useState([])

    const token = cookies.jwt2;
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.id;
    // console.log(`The user ID is: ${userId}`);

let a=1
    const orders = () => {
      axios.get(`http://localhost:3001/booking_api/booking_data/${email.email}`)
      .then((res) => {
          // console.log(res.data);
          setMyorders(res.data)
      })
    }

    const emails = () => {
      axios.get(`http://localhost:3001/auth_router/fetch_email/${userId}`)
      .then((res) => {
          // console.log(res.data);
          setEmail(res.data)
      })
  
    }
    console.log(myorders);

useEffect(() => {

emails()
orders()

    },[email.email])

   
    // console.log(email);

  return (
    <div>
      <h2>My Orders</h2>
                       
                                      <Table className='table-cat' sx={{width:"fit-content"}}>
                                          <TableHead>
                                              <TableRow >
                                                  <TableCell>SN</TableCell>
                                                  <TableCell>Category</TableCell>
                                                  <TableCell>Service</TableCell>
                                                  <TableCell>address</TableCell>
                                                  <TableCell>city</TableCell>
                                                  <TableCell>number</TableCell>
                                                  <TableCell>person</TableCell>
                                                  <TableCell>street</TableCell>
                                                  <TableCell>zip</TableCell>
      
      
      
                                              </TableRow>
                                          </TableHead>
                                          <TableBody>
                                              {
                                                 myorders.length === 0?<h2>No orders found</h2> 
                                                 :
                                                 myorders.map((items,index) => (
      
      
                                                      <TableRow key={index}>
                                                          <TableCell>{a++}</TableCell>
      
                                                          <TableCell>{items.Category}</TableCell>
                                                          <TableCell>{items.Service} </TableCell>
                                                          <TableCell>{items.address}</TableCell>
                                                          <TableCell>{items.city}</TableCell>
                                                          <TableCell>{items.number}</TableCell>
                                                          <TableCell>{items.person}</TableCell>
                                                          <TableCell>{items.street}</TableCell>
                                                          <TableCell>{items.zip}</TableCell>
                                                          <TableCell>{items.paymentMethod}</TableCell>
                                                      </TableRow>
      
      
                                                  ))
                                              }
                                          </TableBody>
                                      </Table>
                                  
       
      {/* <button >click</button> */}
    </div>
  )
}

export default MyOrders
