import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../css_files/serviceman.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
// import { error } from 'jquery';
// import { Button } from '@mui/material';
// import { Validate, ValidationGroup } from 'mui-validate';

function Generalinfo({ formData, setformData, WorkTypeerror, districterror, Titleerror, FirstNameerror, LastNameerror
  , setTitleerror, setFirstNameerror, setLastNameerror, setWorkTypeerror, setdistricterror }) {

  // const [work, setwork] = React.useState('');

  //  const handleChange = (event) => {
  //    setwork(event.target.value);
  //  };
  return (
    <div>
      <center>
        {/* <h1>General Info</h1>     */}
        <div className="ser_input_Worktype">
          <Box >
            {/* <FormControl sx={{ minWidth: 300 }}>
              <InputLabel id="demo-simple-select-label" value={formData.WorkType}
              >Work Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Work type" value={formData.WorkType}
                onChange={(e) => {
                  setformData({ ...formData, WorkType: e.target.value });
                  setWorkTypeerror(false)
                }}
                error={WorkTypeerror}
              >
                <MenuItem value="plumbing">Plumbing</MenuItem>
                <MenuItem value="electrician">Electrician</MenuItem>
              </Select>
              <FormHelperText error
              >{WorkTypeerror === true ? "Choose Work type" : ""}</FormHelperText>
            </FormControl> */}
            <TextField label="Work Type" 
            value={formData.WorkType}
               onChange={(e) => {
                setformData({ ...formData, WorkType: e.target.value });
                setWorkTypeerror(false)
              }}
              error={WorkTypeerror}
              helperText={WorkTypeerror === true ? "Work Type is Required." : ""}

            ></TextField>
          </Box>
          {/* <TextField id="outlined-basic" label="Company Name*" variant="outlined" className='form-control w-50'
        value={formData.CompanyName}
        onChange={(e)=>setformData({...formData, CompanyName:e.target.value})}
        error={Cnameerror} */}
          {/* /> */}
          <div className='ser_input_City'>
            <TextField id="outlined-basic" label="District*" variant="outlined" className='form-control '
              value={formData.district}
              onChange={(e) => {
                setformData({ ...formData, district: e.target.value })
                setdistricterror(false)
              }}
              error={districterror}
              helperText={districterror === true ? "District is Required." : ""}
            //  helperText={ districterror.length === 5 ? "Incorrect entry." : ""}
            />
            {/* <TextField id="outlined-basic" label="City*" variant="outlined" className='form-control '
           value={formData.City}
           onChange={(e)=>{setformData({...formData, City:e.target.value});
          setCityerror(false)}}
           error={Cityerror} 
            />  */}
          </div>
        </div><br />
        <div className='ser_Title'>
          <div className='title'>
            <Box >
              <FormControl sx={{ minWidth: 100 }}>
                <InputLabel id="demo-simple-select-label" value={formData.Title}
                  onChange={(e) => setformData({ ...formData, Title: e.target.value })}>Title</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Title" value={formData.Title} onChange={(e) => {
                    setformData({ ...formData, Title: e.target.value });
                    setTitleerror(false)
                  }}
                  error={Titleerror}>
                  <MenuItem value="Mr">Mr</MenuItem>
                  <MenuItem value="Mrs">Mrs</MenuItem>
                  <MenuItem value="Ms">Ms</MenuItem>
                  <MenuItem value="Dr">Dr</MenuItem>
                </Select>
                <FormHelperText error
                >{Titleerror === true ? "Select Title" : ""}</FormHelperText>
              </FormControl>
            </Box>
          </div>
          <div className='name'>
            <TextField id="outlined-basic" type="text" label="First Name" variant="outlined" className='form-control'
              value={formData.FirstName}
              onChange={(e) => {
                setformData({ ...formData, FirstName: e.target.value });
                setFirstNameerror(false)
              }}
              error={FirstNameerror}
              helperText={FirstNameerror === true ? "First Name is Required." : ""} /></div>
          <div className='name'>
            <TextField id="outlined-basic" type="text" label="Last Name" variant="outlined" className='form-control'
              value={formData.LastName}
              onChange={(e) => {
                setformData({ ...formData, LastName: e.target.value });
                setLastNameerror(false)
              }}
              error={LastNameerror}
              helperText={LastNameerror === true ? "Last Name is Required." : ""} />
          </div>
          {/* <Button variant='contained' color='primary' style={{marginTop:"1rem"}}>Next</Button>     */}
        </div>
      </center>
    </div>
  )
}

export default Generalinfo