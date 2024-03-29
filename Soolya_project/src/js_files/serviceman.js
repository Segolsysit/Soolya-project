import "../css_files/serviceman.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Generalinfo from './generalinfo';
import Personinfo from './personinfo';
import Businessinfo from './businessinfo';
import axios from "axios";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import Vendor_login from "./Vendor_login";
// import Accountinfo from './accountinfo';

function Serviceman() {
    const nav = useNavigate();
    const [page, setpage] = React.useState(0)
    const FormTitles = ["General Info", "Personal Info", "Business Info"]

    const [WorkTypeerror, setWorkTypeerror] = React.useState(false);
    const [districterror, setdistricterror] = React.useState(false);
    // const [Titleerror, setTitleerror] = React.useState(false);
    const [FirstNameerror, setFirstNameerror] = React.useState(false);
    const [LastNameerror, setLastNameerror] = React.useState(false);
    const [MobilePhoneNumbererror, setMobilePhoneNumbererror] = React.useState(false);
    const [ConfirmMobilePhoneNumbererror, setConfirmMobilePhoneNumbererror] = React.useState(false);
    const [StreetAddresserror, setStreetAddresserror] = React.useState(false);
    const [PostalCodeerror, setPostalCodeerror] = React.useState(false);
    const [Emailerror, setEmailerror] = React.useState(false);
    const [IdentityTypeerror, setIdentityTypeerror] = React.useState(false);
    const [IdentityNumbererror, setIdentityNumbererror] = React.useState(false);
    const [Passworderror, setPassworderror] = React.useState(false);
    const [ConfirmPassworderror, setConfirmPassworderror] = React.useState(false);
    const [fileerror, setfileerror] = React.useState(false);

    const props = {

        WorkTypeerror, setWorkTypeerror, districterror, setdistricterror, FirstNameerror, setFirstNameerror
        , LastNameerror, setLastNameerror, MobilePhoneNumbererror, setMobilePhoneNumbererror, ConfirmMobilePhoneNumbererror, setConfirmMobilePhoneNumbererror
        , StreetAddresserror, setStreetAddresserror, PostalCodeerror, setPostalCodeerror, Emailerror, setEmailerror,
        IdentityTypeerror, setIdentityTypeerror, IdentityNumbererror, setIdentityNumbererror, Passworderror, setPassworderror
        , ConfirmPassworderror, setConfirmPassworderror, fileerror, setfileerror

    }

    const [formData, setformData] = React.useState({
        WorkType: "",
        district: "",
        // Title: "",
        FirstName: "",
        LastName: "",
        MobilePhoneNumber: "",
        StreetAddress: "",
        PostalCode: "",
        Email: "",
        IdentityType: "",
        IdentityNumber: "",
        file: ""
    })

    const PageDisplay = () => {
        if (page === 0) {
            return <Generalinfo formData={formData} setformData={setformData} {...props} />
        } else if (page === 1) {
            return <Personinfo formData={formData} setformData={setformData} {...props} />
        } else if (page === 2) {
            return <Businessinfo formData={formData} setformData={setformData} {...props} />
        } else {
            return <Vendor_login></Vendor_login>
        }
         // else {
         //    return<Accountinfo/>
    }
    //}
    return (
        <div class="App">
            
            <div className='form'>

                <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link register active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true"
                            onClick={() => setpage(0)}>Register</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link register " id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false"
                            onClick={() => setpage(3)}>Login</button>
                    </li>
                </ul>

                {page === 3 ? (<div className="prg"></div>) : <div className='progressbar'>
                    <div style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}></div>
                </div>}
                <div className='form_container'>
                    <div className='head'>
                        <h1>{FormTitles[page]}</h1>
                    </div>
                    <div className='body  ' >{PageDisplay()}
                    </div><br />
                </div><br />
                {page === 3 ? (<div></div>) :
                    <div className='button'>
                        <Button variant="contained"
                            disabled={page === 0 || page === 3}
                            onClick={() => { setpage((currpage) => currpage - 1) }}>
                            Prev
                        </Button>

                        <Button sx={{ m: 2 }} variant="contained"
                            disabled={page === 3}
                            onClick={() => {
                                if (page === 0) {
                                    if (formData.WorkType.length === 0) {
                                        setWorkTypeerror(true)
                                    }
                                    else if (formData.district.length === 0) {
                                        setdistricterror(true)
                                    }
                                    // else if (formData.Title.length === 0) {
                                    //     setTitleerror(true)
                                    // }
                                    else if (formData.FirstName.length === 0) {
                                        setFirstNameerror(true)
                                    }
                                    else if (formData.LastName.length === 0) {
                                        setLastNameerror(true)
                                    }
                                    else { setpage((currPage) => currPage + 1); }
                                }
                                else if (page === 1) {
                                    if (formData.MobilePhoneNumber.length === 0 ||
                                        formData.MobilePhoneNumber.length < 10 ||
                                        formData.MobilePhoneNumber.length > 10) {
                                        setMobilePhoneNumbererror(true)
                                    }
                                    // else if (formData.ConfirmMobilePhoneNumber.length === 0 ||
                                    //     formData.ConfirmMobilePhoneNumber.length < 10 ||
                                    //     formData.ConfirmMobilePhoneNumber.length > 10) {
                                    //     setConfirmMobilePhoneNumbererror(true)
                                    // }
                                    else if (formData.StreetAddress.length === 0) {
                                        setStreetAddresserror(true)
                                    }
                                    else if (formData.PostalCode.length === 0) {
                                        setPostalCodeerror(true)
                                    }
                                    else if (formData.Email.length === 0) {
                                        setEmailerror(true)
                                    }
                                    else { setpage((currPage) => currPage + 1); }
                                }
                                else if (page === 2) {
                                    if (formData.IdentityType.length === 0) {
                                        setIdentityTypeerror(true)
                                    }
                                    else if (formData.IdentityNumber.length === 0) {
                                        setIdentityNumbererror(true)
                                    }
                                    else if (formData.file.length === 0) {
                                        setfileerror(true)
                                    }
                                    // else if (formData.Password.length === 0 || formData.Password.length < 6) {
                                    //     setPassworderror(true)
                                    // }
                                    // else if (formData.ConfirmPassword.length === 0 || formData.ConfirmPassword !== formData.Password) {
                                    //     setConfirmPassworderror(true)
                                    // }
                                    else {

                                        // alert("worked")
                                        // swal({
                                        //     title: "Good job!",
                                        //     text: "We will Contact Through Email",
                                        //     icon: "success",
                                        //     button: "ok",
                                        // });
                                        console.log(formData);
                                        const formdata = new FormData()
                                        formdata.append("WorkType", formData.WorkType)
                                        formdata.append("district", formData.district)
                                        // formdata.append("Title", formData.Title)
                                        formdata.append("FirstName", formData.FirstName)
                                        formdata.append("LastName", formData.LastName)
                                        formdata.append("MobilePhoneNumber", formData.MobilePhoneNumber)
                                        formdata.append("StreetAddress", formData.StreetAddress)
                                        formdata.append("PostalCode", formData.PostalCode)
                                        formdata.append("Email", formData.Email)
                                        formdata.append("IdentityType", formData.IdentityType)
                                        formdata.append("IdentityNumber", formData.IdentityNumber)
                                        formdata.append("file", formData.file)
                                        console.log(formdata);

                                        axios.post("http://localhost:3001/serviceman/user", formdata)
                                            .then((res) => {
                                                console.log("posted");

                                            })
                                    }

                                }
                            }}>
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                        </Button>
                    </div>}
            </div>
        </div>
    )
}

export default Serviceman;