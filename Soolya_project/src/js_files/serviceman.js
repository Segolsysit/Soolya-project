import TextField from '@mui/material/TextField';
import "../css_files/serviceman.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import * as React from 'react';
import Button from '@mui/material/Button';

function Serviceman(){
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
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
                 label="Work Type" value={age} onChange={handleChange}>
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
                        rows={4}/>
                </div>
                <div class="tab">
                <div className="ser_input_name">
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                </div><br/>
                <div className="ser_input_number">
                <TextField id="outlined-basic" label="Phone" variant="outlined" />
                </div><br/>
                <div className="ser_input_mail">
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                </div><br/>
            </div> 
            <div class="tab">
            <div className='ser_id_type'>
                <Box >
                <FormControl  sx={{ minWidth: 225 }}> 
                <InputLabel id="demo-simple-select-label">Identity Type</InputLabel>
                <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="Identity Type"
                 onChange={handleChange}
                 >
                <MenuItem value={1}>Pasport</MenuItem>
                <MenuItem value={2}>Driving licence</MenuItem>
                <MenuItem value={3}>Company Id</MenuItem>
                </Select>
                </FormControl> 
                </Box>
                </div><br/>
                <div className="ser_input_id_name">
                <TextField id="outlined-basic" label="Identity Number" variant="outlined" />
                </div><br/>
                <input 
                 type="file"
                 id="photo" 
                 name="photo"
                 accept="image/png, image/jpeg"></input>
            </div>   
            <div class="tab">
                <div className="ser_input_name">
                <TextField id="outlined-basic" label="First Name" variant="outlined" />
                </div><br/>
                <div className="ser_input_name">
                <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                </div><br/>
                <div className="ser_input_number">
                <TextField id="outlined-basic" label="Phone" variant="outlined" />
                </div><br/>
                <div className="ser_input_mail">
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                </div><br/>
                <div className="ser_input_password">
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                </div><br/>
                <div className="ser_input_password">
                <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
                </div><br/>
            </div>
                <div className='button'>
                <Button variant="contained">
                 Next
                </Button>
                </div>    
            </form>
         </div>
    )
}

export default Serviceman;