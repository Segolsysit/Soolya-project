import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../css_files/serviceman.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

function Generalinfo(){

    const [work, setwork] = React.useState('');
   
     const handleChange = (event) => {
       setwork(event.target.value);
     };
    return(
        <div>
        <center>    
        <div className="ser_input_Cname">
        <TextField id="outlined-basic" label="Company Name*" variant="outlined" className='form-control w-50'/>
        <TextField id="outlined-basic" label="City*" variant="outlined" className='form-control w-25'/>
        </div><br/>
                 <div className='ser_Title'>
                     <Box >
                 <FormControl  sx={{ minWidth: 100 }}> 
                    <InputLabel id="demo-simple-select-label">Title</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Work Type" value={work} onChange={handleChange}>
                     <MenuItem value="Mr">Mr</MenuItem>
                     <MenuItem value="Mrs">Mrs</MenuItem>
                     <MenuItem value="Ms">Ms</MenuItem>
                     <MenuItem value="Dr">Dr</MenuItem>
                    </Select>
                 </FormControl> 
                 </Box>
                <TextField id="outlined-basic" label="First Name" variant="outlined" className='form-control w-25'/>  
                <TextField id="outlined-basic" label="Last Name" variant="outlined" className='form-control w-25'/> 
                </div>
                </center>    
         </div>
    )
}

export default Generalinfo