import React, { useEffect, useState } from 'react'
import { Button, Table, TableBody, TableCell, TableRow, TableHead, TextField } from '@mui/material';
import axios from 'axios';

function Feedbacks() {

    const [feedback , setFeedback] = useState([])

useEffect(() => {
   

    get_feedback()
},[])

const get_feedback = () => {
    axios.get("http://localhost:3001/feedback_api/get_feedback").then((res) => {
        setFeedback(res.data)
        console.log(res.data)
})
}
    let a=1;
  return (
    <div>
     <Table className='table-cat' style={{ width:"fit-content"}}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>SN</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Message</TableCell>
                                            <TableCell>Time&date</TableCell>
                                            



                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                           
                                            feedback.map((msg,index) => (

                                                <TableRow key={index}>
                                                    <TableCell>{a++}</TableCell>

                                                    <TableCell>{msg.email}</TableCell>
                                                    <TableCell >{msg.message} </TableCell>
                                                    <TableCell>{msg.time}||{msg.date}</TableCell>
                                                    {/* <TableCell></TableCell> */}
                                                </TableRow>
                                            ))

                                           

                                                


                                            
                                        }
                                    </TableBody>
                                </Table>
    </div>
  )
}

export default Feedbacks
