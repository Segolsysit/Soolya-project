import TextField from '@mui/material/TextField';

function Accountinfo(){
    return(
        <div class="tab">
            <center>
                 <div className="ser_input_name">
                 <TextField id="outlined-basic" label="First Name" variant="outlined" className='form-control w-75' />
                 </div><br/>
                 <div className="ser_input_name">
                 <TextField id="outlined-basic" label="Last Name" variant="outlined" className='form-control w-75'/>
                 </div><br/>
                 <div className="ser_input_number">
                 <TextField id="outlined-basic" label="Phone" variant="outlined" className='form-control w-75'/>
                 </div><br/>
                 <div className="ser_input_mail">
                 <TextField id="outlined-basic" label="Email" variant="outlined" className='form-control w-75'/>
                 </div><br/>
                 <div className="ser_input_password">
                 <TextField id="outlined-basic" label="Password" variant="outlined" className='form-control w-75'/>
                 </div><br/>
                 <div className="ser_input_password">
                 <TextField id="outlined-basic" label="Confirm Password" variant="outlined" className='form-control w-75'/>
                 </div><br/>
                 </center> 
             </div>
    )
}

export default Accountinfo