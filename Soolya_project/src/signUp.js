import "./signUp.css";
import logo from "./images/logo.png";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { RegisterApi } from "./js_files/api";
import { storeUserData } from "./js_files/storage";
import { isAuthenticated } from "./js_files/auth";


function SignUp(){


    const initialErrors = {
        fname:null,
        lname:null,
        email:null,
        number:null,
        password:null,
        c_password:null,
        checked:null,
        custom_error:null
    }
     
    const [errors,setErrors] = useState(initialErrors);
    

    const [loading,setLoading] = useState(false);

   
   
   const handleSubmit = (event)=>{
           event.preventDefault();

           let errors = initialErrors;

           let hasErrors = false;

           if (inputs.fname === "") {

               errors.fname = "First name is required";
               hasErrors = true;
           }

           if (inputs.lname === "") {
            errors.lname = "Last name is required";
            hasErrors = true;
           }

            if (inputs.email === "") {
                errors.email ="Email is required";
               hasErrors = true;
            }

            if (inputs.number === "") {
                errors.number = "Number is required";
               hasErrors = true;
            }

            else if(inputs.number.length <10 || inputs.number.length >10){
                errors.number ="Number must have 10 digit";
            }


            if (inputs.password === ""  ) {
                errors.password = "Password is required";
               hasErrors = true;
            }

            if (inputs.c_password === "") {
                errors.c_password = "Confirm password is required";
               hasErrors = true;
            }

            if (inputs.password !== inputs.c_password) {
                errors.c_password = "Password and Confirm password are not same";
               hasErrors = true;
            }

            if (inputs.checked === false) {
                 errors.checked = "Agree terms & Conditions is required";
                 hasErrors = true; 
            }

           
          
            if (!hasErrors) {
                setLoading(true); 
                
                RegisterApi(inputs).then((response)=>{
                    // console.log(response);
                    storeUserData(response.data.idToken);
                }).catch((err)=>{
                    if(err.response.data.error.message === "EMAIL_EXISTS"){
                        setErrors({...errors,custom_error:"Already this email has been registered"});
                    }
                    else if ( String(err.response.data.error.message).includes("WEAK_PASSWORD")) {
                        setErrors({...errors,custom_error:"Password should be at least 6 characters"});
                    }

                }).finally(()=>{
                    setLoading(false);
                })

            }
         
            setErrors({...errors});
    }

    const [inputs,setInputs] = useState({
        fname:"",
        lname:"",
        email:"",
        number:"",
        password:"",
        c_password:"",
        checked:false
    })

    
    
 
    if(isAuthenticated()){
        // alert("Registraion is successfull Login here!");
        return <Navigate to="/sign_in"></Navigate>   
    }


    return(
    <div>



     <div className="sign_up">
        <div className="sign_up_div">
            <div className="sign_up_logo_div">
                <div>
                    <img className="sign_up_logo" src={logo} alt="sign_up_page"></img>
                </div>
                <div>
                    <h4>Soolya</h4>
                </div>
             </div>
            
            <form onSubmit={handleSubmit} className="sign_up_form">
          
             <div className="form_div">
                    <div className="label_display">
                    <div className="label_display_div">
                    <div className="sign_up_input">
                        <label>
                            First name
                        </label>
                        <input className="sign_up_inupt_box" type="text" 
                        onChange={(event)=>{
                            setInputs({...inputs,fname:event.target.value});
                            errors.fname = null;
                        }} 
                        value={inputs.fname} name="name"  placeholder="Enter your first name"></input>
                    </div>

                    {errors.fname?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>{errors.fname}</h6>
                        </div>
                    </div>):null
                    }

                    <div className="sign_up_input">
                        <label>
                            Last name
                        </label>
                        <input className="sign_up_inupt_box" type="text" 
                        onChange={(event)=>{
                            setInputs({...inputs,lname:event.target.value})
                              errors.lname = null;
                            }} 
                        value={inputs.lname} name="lname" placeholder="Enter your first name"></input>
                    </div>

                    {errors.lname?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>{errors.lname}</h6>
                        </div>
                        </div>):null
                    }

                    <div className="sign_up_input">
                        <label>
                            Email Address
                        </label>
                        <input className="sign_up_inupt_box" type="email" 
                        onChange={(event)=>{
                            setInputs({...inputs,email:event.target.value})
                            errors.email = null;
                            }} 
                        value={inputs.email} name="email" placeholder="Enter your email address"></input>
                    </div>

                    {errors.email?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            {/* <h6>Email address is required</h6> */}
                            <h6>{errors.email}</h6>
                        </div>
                    </div>):null
                    }
                        </div>

                     


                        <div className="label_display_div">
                    <div className="sign_up_input">
                        <label>
                            Mobile Number
                        </label>
                        <input className="sign_up_inupt_box" type="tel" 
                        onChange={(event)=>{
                            setInputs({...inputs,number:event.target.value})
                            errors.number = null;
                            }}
                        name="number" value={inputs.number} placeholder="Enter your Phone Number"></input>
                    </div>

                    {errors.number?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            {/* <h6>Mobile Number is required</h6> */}
                             <h6>{errors.number}</h6>
                        </div>
                    </div>):null
                    }

                    
                    <div className="sign_up_input">
                        <label>
                            Password
                        </label>
                        <input className="sign_up_inupt_box" type="password" 
                        onChange={(event)=>{
                            setInputs({...inputs,password:event.target.value})
                            errors.password = null;
                        }} 
                        value={inputs.password} name="password" placeholder="***********"></input>
                    </div>

                    {errors.password?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>{errors.password}</h6>
                        </div>
                    </div>):null
                    }

                    <div className="sign_up_input">
                        <label>
                            confirm Password
                        </label>
                        <input className="sign_up_inupt_box" type="Password" 
                        onChange={(event)=>{
                            setInputs({...inputs,c_password:event.target.value})
                            errors.c_password = null;
                            }} 
                        value={inputs.c_password} name="c_password" placeholder="************"></input>
                    </div>

                    {errors.c_password?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>{errors.c_password}</h6>
                        </div>
                    </div>):null
                    }

                        </div>
                        </div>  


                    {errors.custom_error?
                        (<div id="d_flex_center_new" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h5>{errors.custom_error}</h5>
                        </div>
                    </div>):null
                    }
   
                        <div className="sign_up_checkbox">
                            <div className="sign_up_checkbox">
                                <input type="checkbox" checked={inputs.checked}
                                onChange={(event)=>{
                                    setInputs({...inputs,checked:event.target.checked})
                                    errors.checked = null;
                                }} 
                            htmlFor="rem" ></input>
                                <label className="sign_up_checkbox_label">I agree with the <a href="_self">Terms & Conditions</a></label>
                            </div>
                        </div>

                        {errors.checked?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>{errors.checked}</h6>
                        </div>
                    </div>):null
                    }
                    
                    {loading?
                        (<div id="spinner_roll">
                            <div class="spinner-border text-primary" role="status">
                            </div>
                        </div>):null
                    }
                   
                    <div className="form_sign_up_button_div">
                        <button type="submit" disabled={loading} className="form_sign_up_button">sign up</button>
                    </div>
                    <div className="form_center">
                    <div className="or_cont">
                        <p>or</p>
                        <p>sign in with</p>
                    </div>
                    <div>
                        <button className="inline_btn"><img className="inline_img" src={google} alt="btn_face"></img> Google</button>
                        <button className="inline_btn"><img className="inline_img" src={facebook} alt="btn_goo"></img>facebook</button>
                    </div>
                    <div>
                        <p>Already have an account? <span><Link className="sign_up_link" to="/sign_in">sign in here</Link></span></p>
                    </div>
                    <div>
                        <p>Continue as a <span><a href="_self">Guest</a></span></p>
                    </div>
                    </div>
            </div>
             </form>
        
        </div>
        </div>





    </div>
    )
}

export default SignUp;