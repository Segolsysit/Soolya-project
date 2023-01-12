import TextField from '@mui/material/TextField';

function Personinfo({formData,setformData}){
    return(
        <div class="tab">
              <center>
                 <div className="ser_input_number">
                  
                 <TextField id="outlined-basic" label="Mobile Phone Number" variant="outlined"  className='form-control w-50'
                 value={formData.MobilePhoneNumber}
                 onChange={(e)=>setformData({...formData, MobilePhoneNumber:e.target.value})}/>
                 <TextField id="outlined-basic" label="Confirm Mobile Phone Number" variant="outlined" className='form-control w-25'
                 value={formData.ConfirmMobilePhoneNumber}
                 onChange={(e)=>setformData({...formData, ConfirmMobilePhoneNumber:e.target.value})}/>
                 </div><br/>
                 <div className="ser_input_st_address">
                 <TextField id="outlined-basic" label="Street Address" variant="outlined" className='form-control w-50'
                 value={formData.StreetAddress} 
                 onChange={(e)=>setformData({...formData, StreetAddress:e.target.value})}/>
                 <TextField id="outlined-basic" label="Postal Code" variant="outlined" className='form-control w-25'
                 value={formData.PostalCode}
                 onChange={(e)=>setformData({...formData, PostalCode:e.target.value})} />
                 </div><br/>
                 </center>
                 <div className="ser_input_mail">
                 <TextField id="outlined-basic" label="Email" variant="outlined" className='form-control w-25'
                 value={formData.Email} 
                 onChange={(e)=>setformData({...formData, Email:e.target.value})}/>
                 </div><br/>
             </div>
    )
}

export default Personinfo