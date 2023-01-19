import "../css_files/serviceman.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Generalinfo from './generalinfo';
import Personinfo from './personinfo';
import Businessinfo from './businessinfo';
import axios from "axios";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
// import Accountinfo from './accountinfo';

function Serviceman(){
    const nav = useNavigate();
    const [page,setpage]=React.useState(0)
    const FormTitles=["General Info","Personal Info","Business Info"]
 
    const [WorkTypeerror,setWorkTypeerror]=React.useState(false);
    const [districterror,setdistricterror]=React.useState(false);
    const [Titleerror,setTitleerror]=React.useState(false);
    const [FirstNameerror,setFirstNameerror]=React.useState(false);
    const [LastNameerror,setLastNameerror]=React.useState(false);
    const [MobilePhoneNumbererror,setMobilePhoneNumbererror]=React.useState(false);
    const [ConfirmMobilePhoneNumbererror,setConfirmMobilePhoneNumbererror]=React.useState(false);
    const [StreetAddresserror,setStreetAddresserror]=React.useState(false);
    const [PostalCodeerror,setPostalCodeerror]=React.useState(false);
    const [Emailerror,setEmailerror]=React.useState(false);
    const [IdentityTypeerror,setIdentityTypeerror]=React.useState(false);
    const [IdentityNumbererror,setIdentityNumbererror]=React.useState(false);
    const [Passworderror,setPassworderror]=React.useState(false);
    const [ConfirmPassworderror,setConfirmPassworderror]=React.useState(false);
    const [fileerror,setfileerror]=React.useState(false);

    const props = {WorkTypeerror,setWorkTypeerror,districterror,setdistricterror,Titleerror,setTitleerror,FirstNameerror,setFirstNameerror
        ,LastNameerror,setLastNameerror,MobilePhoneNumbererror,setMobilePhoneNumbererror,ConfirmMobilePhoneNumbererror,setConfirmMobilePhoneNumbererror
    ,StreetAddresserror,setStreetAddresserror,PostalCodeerror,setPostalCodeerror,Emailerror,setEmailerror,
    IdentityTypeerror,setIdentityTypeerror,IdentityNumbererror,setIdentityNumbererror,Passworderror,setPassworderror
    ,ConfirmPassworderror,setConfirmPassworderror,fileerror,setfileerror}

    const [formData,setformData]=React.useState({
        WorkType:"",
        district:"",
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
            return<Generalinfo formData={formData} setformData={setformData} {...props}/>
        } else if (page === 1){
            return<Personinfo formData={formData} setformData={setformData} {...props}/>
        }else {
            return<Businessinfo formData={formData} setformData={setformData} {...props}/>
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
                 disabled={page === 0 || page === 3}
                 onClick={()=>{setpage((currpage)=> currpage - 1 )}}>
                  Prev
                 </Button>   
                 
                 <Button sx={{ m: 2 }} variant="contained"
                 disabled={ page === 3}
                 onClick={() => {
                          if(page === 0){
                            if(formData.WorkType.length === 0){
                                setWorkTypeerror(true)}
                                else if(formData.district.length === 0){
                                    setdistricterror(true)} 
                                    else if(formData.Title.length === 0){
                                        setTitleerror(true)}
                                        else if(formData.FirstName.length === 0){
                                            setFirstNameerror(true)}
                                            else if(formData.LastName.length === 0){
                                                setLastNameerror(true)}
                                                else{setpage((currPage) => currPage + 1);}
                          }
                          else if(page === 1){
                              if(formData.MobilePhoneNumber.length === 0 || 
                                formData.MobilePhoneNumber.length<10  ||
                                formData.MobilePhoneNumber.length>10){
                                  setMobilePhoneNumbererror(true)}
                                  else if(formData.ConfirmMobilePhoneNumber.length === 0 || 
                                          formData.ConfirmMobilePhoneNumber.length<10  ||
                                           formData.ConfirmMobilePhoneNumber.length>10){
                                               setConfirmMobilePhoneNumbererror(true)}
                                            else if(formData.StreetAddress.length === 0){
                                                setStreetAddresserror(true)}
                                                else if(formData.PostalCode.length === 0){
                                                   setPostalCodeerror(true)}
                                                   else if(formData.Email.length === 0){
                                                      setEmailerror(true)}
                                                      else{setpage((currPage) => currPage + 1);}
                          }
                          else if(page === 2){
                            if(formData.IdentityType.length === 0){
                                 setIdentityTypeerror(true)}
                                 else if(formData.IdentityNumber.length === 0){
                                    setIdentityNumbererror(true)}
                                    else if(formData.file.length === 0){
                                       setfileerror(true)}
                                       else if(formData.Password.length === 0 || formData.Password.length <6){  
                                          setPassworderror(true)}
                                          else if(formData.ConfirmPassword.length === 0 || formData.ConfirmPassword !== formData.Password){
                                              setConfirmPassworderror(true)}
                                              else{ swal({
                                                title: "Good job!",
                                                text: "We will Contact Through Email",
                                                icon: "success",
                                                button: "ok",
                                              });
                                                  console.log(formData);
                                                axios.post("https://63bd5802d660062388a24683.mockapi.io/Soolya",{
                                                WorkType:formData.WorkType,
                                                district:formData.district,
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
                                              nav("/")
                          }
                    
                  }}}>
                  {page === FormTitles.length - 1 ? "Submit" : "Next"}
                 </Button>
                 </div>
    </div>
    </div>
    )
}

export default Serviceman;