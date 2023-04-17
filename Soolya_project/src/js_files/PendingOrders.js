import React, { useEffect , useState} from 'react'
import jwt_decode from 'jwt-decode';
import { useCookies } from "react-cookie";
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableRow, TableHead, TextField } from '@mui/material';

function PendingOrders() {

    const [cookies, setCookie, removeCookie] = useCookies([]);

    const [vendorDetails, setVendorDetails] = useState([]);
    const [vendorEmail, setvendorEmail] = useState([]);

    const token = cookies.vjwt2;
    const decodedToken = jwt_decode(token);
    const vendorId = decodedToken.id;
    let a=1;
    function get_vendor(){
        axios.get(`http://localhost:3001/vendor_register/fetch_vendor/${vendorId}`)
        .then((res)=>{
         setVendorDetails(res.data)
        })
     }
console.log(vendorDetails);
     function vendor_orders(){
        axios.get(`http://localhost:3001/booking_api/pending_booking_data/${vendorDetails.Email}`)
        .then((res)=>{
            setvendorEmail(res.data)
        })
     }
console.log(vendorEmail);
    useEffect(() => {
        get_vendor()
        vendor_orders()
    },[vendorDetails.Email])

  return (
    <div>
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
                                                 vendorEmail.length === 0?<h2>No orders found</h2> 
                                                 :
                                                 vendorEmail.map((items,index) => (
      
      
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
                                  
    </div>
  )
}

export default PendingOrders
