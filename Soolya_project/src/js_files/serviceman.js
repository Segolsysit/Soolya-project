import "../css_files/serviceman.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Generalinfo from './generalinfo';
import Personinfo from './personinfo';
import Businessinfo from './businessinfo';
<<<<<<< HEAD
// import { useForm } from "react-hook-form";
import { useStep } from "react-hooks-helper";
=======
import axios from "axios";
>>>>>>> 96350ea6d7e29b86580f14c8cfdbde3ac8b3ae36
// import Accountinfo from './accountinfo';

// const defaultdata=

// const steps =[
//      {id:"Generalinfo"},
//      {id:"Personinfo"},
//      {id:"Businessinfo"}
// ]
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
    // const [step,navigation]=useStep({
    //     steps,
    //     initialStep:0
    // })
    //  const props ={formData, setformData,navigation}
    // switch (step.id){
    //     case "Generalinfo":
    //         return<Generalinfo formData={formData} setformData={setformData} navigation={navigation}/>;
    //     case "Personinfo":
    //         return<Personinfo formData={formData} setformData={setformData} navigation={navigation}/>;  
    //     case "Businessinfo":
    //         return<Businessinfo formData={formData} setformData={setformData} navigation={navigation}/>;       
    // }
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
        }
    // }
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
            <div className='body  ' >{PageDisplay()}
             </div><br/>
        </div><br/>
        <div className='button'>
                 <Button variant="contained"
                 disabled={page === 0}
                 onClick={()=>{setpage((currpage)=> currpage - 1 )}}>
                  Prev
                 </Button>   
                 
                 <Button sx={{ m: 2 }} variant="contained"
                 disabled={formData === ""} 
                 onClick={() => {
                    if (page === FormTitles.length - 1) {
                      alert("FORM SUBMITTED");
                      console.log(formData);
                      axios.post("https://63bd5802d660062388a24683.mockapi.io/Soolya",{
                        CompanyName:formData.CompanyName,
                        City:formData.City,
                        Title:formData.Title,
                        FirstName:formData.FirstName,
                        LastName:formData.LastName,
                        MobilePhoneNumber:formData.MobilePhoneNumber,
                        ConfirmMobilePhoneNumber:formData.ConfirmMobilePhoneNumber,
                        StreetAddress:formData.StreetAddress,
                        PostalCode:formData.PostalCode,
                        Email:formData.Email,
                        IdentityType:formData.IdentityType,
                        IdentityNumber:formData.IdentityNumber,
                        Password:formData.Password,
                        ConfirmPassword:formData.ConfirmPassword,
                        file:formData.file
                      })
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
    // <div><h1>hii</h1></div>
    )
}

export default Serviceman;