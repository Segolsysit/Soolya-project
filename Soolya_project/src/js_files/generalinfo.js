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
        <div className="ser_input_name">
        <TextField id="outlined-basic" label="Name" variant="outlined" className='form-control w-75'/>
         </div><br/>
         <div className='ser_input_timing'>
                 <TextField id="outlined-basic" label="Timing" variant="outlined" className='form-control w-75'/>
                 </div><br/>
                 <div className='ser_work_type'>
                     <Box >
                 <FormControl  sx={{ minWidth: 225 }}> 
                    <InputLabel id="demo-simple-select-label" className='form-control w-75'>Work Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Work Type" value={work} onChange={handleChange}>
                     <MenuItem value="plumbing">Plumbing</MenuItem>
                     <MenuItem value="Electrician">Electrician</MenuItem>
                     <MenuItem value="home">Home Appliances</MenuItem>
                     <MenuItem value="install">Installations</MenuItem>
                     <MenuItem value="service">Home services</MenuItem>
                     <MenuItem value="ac">AC repair services</MenuItem>
                    </Select>
                 </FormControl> 
                 </Box>
                 </div><br/>
                <div className='address'>
                        <TextField
                        sx={{ minWidth: 225 }}
                        id="outlined-multiline-static"
                        label="Address"
                        multiline
                        rows={4}
                        className='form-control w-75'/>
                </div>
                </center>    
         </div>
    )
}

export default Generalinfo