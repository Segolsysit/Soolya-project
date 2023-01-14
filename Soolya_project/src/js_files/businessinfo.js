import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../css_files/serviceman.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import "../css_files/serviceman.css";

function Businessinfo({formData,setformData,IdentityTypeerror,IdentityNumbererror,setIdentityTypeerror,
                      Passworderror,ConfirmPassworderror,fileerror,setIdentityNumbererror,setPassworderror,
                       setConfirmPassworderror,setfileerror}){

    // const [work, setwork] = React.useState('');
   
    // const handleChange = (event) => {
    //   setwork(event.target.value);
    // };    

    return(
        <div class="tab">
            <center>
              {/* <h1>Business Info</h1>  */}
             <div className='ser_id_type'>
                 <Box >
                 <FormControl  sx={{ minWidth: 300 }}> 
                 <InputLabel id="demo-simple-select-label"
                //  value={}
                 
                 >Identity Type</InputLabel>
                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={formData.IdentityType}
                 label="Identity Type"
                 onChange={(e)=>{setformData({...formData, IdentityType:e.target.value});
                   setIdentityTypeerror(false)}}
                 error={IdentityTypeerror}
                 >
                <MenuItem value="Pasport">Pasport</MenuItem>
                <MenuItem value="Driving licence">Driving licence</MenuItem>
                <MenuItem value="Company Id">Company Id</MenuItem>
                </Select>
                </FormControl> 
                </Box>
                <div class="name">
                <TextField id="outlined-basic" label="Identity Number" variant="outlined" className='form-control '
                value={formData.IdentityNumber}
                onChange={(e)=>{setformData({...formData, IdentityNumber:e.target.value});
                  setIdentityNumbererror(false)}} 
                error={IdentityNumbererror}/>
                </div>
                </div><br/>
                <input 
                 type="file"
                 id="photo" 
                 name="photo"
                 accept="image/png, image/jpeg" className='form-control w-50'
                 value={formData.file}
                 onChange={(e)=>{setformData({...formData, file:e.target.value});
                  setfileerror(false)}}
                 error={fileerror}
                 ></input><br/>
                 <div className="ser_input_password">
                 <TextField id="outlined-basic" label="Password" variant="outlined" className='form-control w-25'
                 value={formData.Password}
                 onChange={(e)=>{setformData({...formData, Password:e.target.value});
                    setPassworderror(false)}}
                 error={Passworderror} />
                 <div class='name' >
                 <TextField id="outlined-basic" label="Confirm Password" variant="outlined" className='form-control'
                 value={formData.ConfirmPassword}
                 onChange={(e)=>{setformData({...formData, ConfirmPassword:e.target.value});
                   setConfirmPassworderror(false)}} 
                 error={ConfirmPassworderror}/>
                 </div>
                 </div><br/>
               </center>  
            </div>
    )
}

export default Businessinfo