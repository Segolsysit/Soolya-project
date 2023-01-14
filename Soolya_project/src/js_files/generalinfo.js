import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../css_files/serviceman.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
// import { Validate, ValidationGroup } from 'mui-validate';

function Generalinfo({formData,setformData,navigation}){

    const [work, setwork] = React.useState('');
   
     const handleChange = (event) => {
       setwork(event.target.value);
     };
    return(
        <div>
        <center>
          {/* <h1>General Info</h1>     */}
        <div className="ser_input_Cname">
        <TextField id="outlined-basic" label="Company Name*" variant="outlined" className='form-control w-50'
        value={formData.CompanyName}
        onChange={(e)=>setformData({...formData, CompanyName:e.target.value})}
        />
          <div className='ser_input_City'>
           <TextField id="outlined-basic" label="District*" variant="outlined" className='form-control '
           value={formData.district}
           onChange={(e)=>setformData({...formData, district:e.target.value})}/>
           <TextField id="outlined-basic" label="City*" variant="outlined" className='form-control '
           value={formData.City}
           onChange={(e)=>setformData({...formData, City:e.target.value})}
           />
          </div>
        </div><br/>
        </center> 
                 <div className='ser_Title'>
                  <div className='title'>
                  <Box >
                    <FormControl  sx={{ minWidth: 100 }}> 
                       <InputLabel id="demo-simple-select-label" value={formData.Title}
                       onChange={(e)=>setformData({...formData, Title:e.target.value})}>Title</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Title" value={formData.Title}   onChange={(e)=>setformData({...formData, Title:e.target.value})}>
                           <MenuItem value="Mr">Mr</MenuItem>
                           <MenuItem value="Mrs">Mrs</MenuItem>
                           <MenuItem value="Ms">Ms</MenuItem>
                           <MenuItem value="Dr">Dr</MenuItem>
                        </Select>
                    </FormControl> 
                  </Box>
                  </div>
                  <div className='name'> 
                      <TextField id="outlined-basic" label="First Name" variant="outlined" className='form-control'
                      value={formData.FirstName}
                      onChange={(e)=>setformData({...formData, FirstName:e.target.value})}/></div>  
                      <div className='name'>
                      <TextField id="outlined-basic" label="Last Name" variant="outlined" className='form-control'
                      value={formData.LastName}
                      onChange={(e)=>setformData({...formData, LastName:e.target.value})}/>
                  </div> 
                  {/* <Button variant='contained' color='primary' style={{marginTop:"1rem"}}>Next</Button>     */}
                </div>
               
         </div>
    )
}

export default Generalinfo