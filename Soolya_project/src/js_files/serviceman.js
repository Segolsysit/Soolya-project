import "../css_files/serviceman.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Generalinfo from './generalinfo';
import Personinfo from './personinfo';
import Businessinfo from './businessinfo';
// import Accountinfo from './accountinfo';

function Serviceman(){

    const [page,setpage]=React.useState(0)
    const FormTitles=["General Info","Personal Info","Business Info"]
    const [formData,setformData]=React.useState({
         CompanyName:"",
         City:"",
         Title:"",
         FirstName:"",
         LastName:"",
         MobilePhoneNumber:"",
         ConfirmMobilePhoneNumber:"",
         StreetAddress:"",
         PostalCode:"",
         Email:"",
         IdentityType:"",
         IdentityNumber:"",
         Password:"",
         ConfirmPassword:"",
         file:""
    })
    const PageDisplay = () =>{
        if (page === 0){
            return<Generalinfo formData={formData} setformData={setformData}/>
        } else if (page === 1){
            return<Personinfo formData={formData} setformData={setformData}/>
        }else{
            return<Businessinfo formData={formData} setformData={setformData}/>
        }
        // else {
        //     return<Accountinfo/>
        // }
    }
    return(
    <div class="App">    
    <div className='form'>
        <div className='progressbar'>
            <div style={{width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}></div>
        </div>
        <div className='form_container'>
            <div className='head'>
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className='body'>{PageDisplay()}</div><br/>
        </div><br/>
        <div className='button'>
                 <Button variant="contained"
                 disabled={page === 0}
                 onClick={()=>{setpage((currpage)=> currpage - 1 )}}>
                  Prev
                 </Button>   
                 <Button sx={{ m: 2 }} variant="contained" 
                 onClick={() => {
                    if (page === FormTitles.length - 1) {
                      alert("FORM SUBMITTED");
                      console.log(formData);
                    }
                    
                     else {
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