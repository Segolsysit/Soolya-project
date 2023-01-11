import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../css_files/serviceman.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

function Businessinfo(){

    const [work, setwork] = React.useState('');
   
    const handleChange = (event) => {
      setwork(event.target.value);
    };    

    return(
        <div class="tab">
            <center>
             <div className='ser_id_type'>
                 <Box >
                 <FormControl  sx={{ minWidth: 225 }}> 
                 <InputLabel id="demo-simple-select-label"
                 className='form-control w-75'>Identity Type</InputLabel>
                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={work}
                 label="Identity Type"
                 onChange={handleChange}
                 >
                <MenuItem value="Pasport">Pasport</MenuItem>
                <MenuItem value="Driving licence">Driving licence</MenuItem>
                <MenuItem value="Company Id">Company Id</MenuItem>
                </Select>
                </FormControl> 
                </Box>
                </div><br/>
                <div className="ser_input_id_name">
                <TextField id="outlined-basic" label="Identity Number" variant="outlined" className='form-control w-75' />
                </div><br/>
                <input 
                 type="file"
                 id="photo" 
                 name="photo"
                 accept="image/png, image/jpeg" className='form-control w-75'></input>
               </center>  
            </div>
    )
}

export default Businessinfo