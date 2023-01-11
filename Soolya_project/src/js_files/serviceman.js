import TextField from '@mui/material/TextField';
import "../css_files/serviceman.css";

import Box from '@mui/material/Box';
import * as React from 'react';
import Button from '@mui/material/Button';
import Generalinfo from './generalinfo';
import Personinfo from './personinfo';
import Businessinfo from './businessinfo';
import Accountinfo from './accountinfo';

function Serviceman(){

    const [page,setpage]=React.useState(0)
    const FormTitles=["General Info","Person Info","Business Info", "Account Info"]
    const [formData,setformData]=React.useState({

    })
    const PageDisplay = () =>{
        if (page === 0){
            return<Generalinfo/>
        } else if (page === 1){
            return<Personinfo/>
        }else if (page === 2){
            return<Businessinfo/>
        }else {
            return<Accountinfo/>
        }
    }
    return(
    <div class="App">    
    <div className='form'>
        <div className='progressbar'>
            <div style={{width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}></div>
        </div>
        <div className='form_container'>
            <div className='head'>
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className='body'>{PageDisplay()}</div><br/>
        </div>
        <div className='button'>
                 <Button variant="contained"
                 disabled={page == 0}
                 onClick={()=>{setpage((currpage)=> currpage - 1 )}}>
                  Prev
                 </Button>   
                 <Button variant="contained"
                 onClick={() => {
                    if (page === FormTitles.length - 1) {
                      alert("FORM SUBMITTED");
                      console.log(formData);
                    } else {
                      setpage((currPage) => currPage + 1);
                    }
                  }}>
                  {page === FormTitles.length - 1 ? "Submit" : "Next"}
                 </Button>
                 </div>
    </div>
    </div>
    )
}

export default Serviceman;