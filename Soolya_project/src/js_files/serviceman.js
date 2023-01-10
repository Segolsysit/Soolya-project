import TextField from '@mui/material/TextField';
import "../css_files/serviceman.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';


function Serviceman(){
    return(
         <div>
            <div className='ser_title'>
               <h1>Provide Your Service Deatails</h1>
            </div>
            <form className='ser_form'>
                <div className="ser_input_name">
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                </div><br/>
                <div className='ser_input_timing'>
                <TextField id="outlined-basic" label="Timing" variant="outlined" />
                </div><br/>
                <div className='ser_work_type'>
                    <Box >
                <FormControl  sx={{ minWidth: 225 }}> 
                <InputLabel id="demo-simple-select-label">Work Type</InputLabel>
                <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 label="Work Type">
                <MenuItem>Plumbing</MenuItem>
                <MenuItem>Electrician</MenuItem>
                <MenuItem>Home Appliances</MenuItem>
                <MenuItem>Installations</MenuItem>
                <MenuItem>Home services</MenuItem>
                <MenuItem>AC repair services</MenuItem>
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
                        rows={4}/>
                </div>
            </form>
         </div>
    )
}

export default Serviceman;