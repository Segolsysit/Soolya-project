import TextField from '@mui/material/TextField';

function Personinfo({formData,setformData,MobilePhoneNumbererror,ConfirmMobilePhoneNumbererror,
    StreetAddresserror,PostalCodeerror,Emailerror,setMobilePhoneNumbererror,setConfirmMobilePhoneNumbererror,
     setStreetAddresserror,setPostalCodeerror,setEmailerror}){
    return(
        <div class="tab">
              <center>
                 {/* <h1>Persional Info</h1>  */}
                 <div className="ser_input_number">
                  
                 <TextField id="outlined-basic" label="Mobile Phone Number" variant="outlined"  className='form-control w-50'
                 value={formData.MobilePhoneNumber}
                 onChange={(e)=>{setformData({...formData, MobilePhoneNumber:e.target.value});
                  setMobilePhoneNumbererror(false)}}
                 error={MobilePhoneNumbererror}
                 helperText={MobilePhoneNumbererror === true ?"Mobile Number is Required.":""}/><br/>
                 {/* <TextField id="outlined-basic" label="Confirm Mobile Phone Number" variant="outlined" className='form-control w-25'
                 value={formData.ConfirmMobilePhoneNumber}
                 onChange={(e)=>{setformData({...formData, ConfirmMobilePhoneNumber:e.target.value});
                   setConfirmMobilePhoneNumbererror(false)}}
                 error={ConfirmMobilePhoneNumbererror}
                 helperText={ConfirmMobilePhoneNumbererror === true ?"Confirm Mobile Number is Required.":""}/> */}
                 </div><br/>
                 <div className="ser_input_st_address">
                 <TextField id="outlined-basic" label="Street Address" variant="outlined" className='form-control w-50'
                 value={formData.StreetAddress} 
                 onChange={(e)=>{setformData({...formData, StreetAddress:e.target.value});
                   setStreetAddresserror(false)}}
                 error={StreetAddresserror}
                 helperText={StreetAddresserror === true ?"Street Address is Required.":""}/>
                 <TextField id="outlined-basic" label="Postal Code" variant="outlined" className='form-control w-25'
                 value={formData.PostalCode}
                 onChange={(e)=>{setformData({...formData, PostalCode:e.target.value});
                  setPostalCodeerror(false)}}
                 error={PostalCodeerror}
                 helperText={PostalCodeerror === true ?"Postal Code is Required.":""} />
                 </div><br/>
                 </center>
                 <div className="ser_input_mail">
                 <TextField id="outlined-basic" label="Email" type="email" variant="outlined" className='form-control w-25'
                 value={formData.Email} 
                 onChange={(e)=>{setformData({...formData, Email:e.target.value});
                   setEmailerror(false)}}
                 error={Emailerror}
                 helperText={Emailerror === true ?"Email is Required.":""}/>
                 </div><br/>
             </div>
    )
}

export default Personinfo