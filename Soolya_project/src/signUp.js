import "./signUp.css";
import logo from "./images/logo.png";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp(){
     
    const [errors,setErrors] = useState({
        fname:{required:false},
        lname:{required:false},
        email:{required:false},
        number:{required:false},
        password:{required:false},
        c_password:{required:false},
        custom_error:null
    });

    const [loading,setLoading] = useState(false);

    const handleSubmit = (event)=>{
           event.preventDefault();
    }

    const [inputs,setInputs] = useState({
        fname:"",
        lname:"",
        email:"",
        number:"",
        password:"",
        c_password:""
    })

    const handleInput = (event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
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
                        <input className="sign_up_inupt_box" type="text" onChange={handleInput} name="fname" placeholder="Enter your first name"></input>
                    </div>

                    {errors.fname.required?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>Enter your first name</h6>
                        </div>
                    </div>):null
                    }

                    <div className="sign_up_input">
                        <label>
                            Last name
                        </label>
                        <input className="sign_up_inupt_box" type="text" onChange={handleInput} name="lname" placeholder="Enter your first name"></input>
                    </div>

                    {errors.lname.required?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>Enter your last name</h6>
                        </div>
                        </div>):null
                    }

                    <div className="sign_up_input">
                        <label>
                            Email Address
                        </label>
                        <input className="sign_up_inupt_box" type="email" onChange={handleInput} name="email" placeholder="Enter your email address"></input>
                    </div>

                    {errors.email.required?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>Enter your email address</h6>
                        </div>
                    </div>):null
                    }
                        </div>

                     


                        <div className="label_display_div">
                    <div className="sign_up_input">
                        <label>
                            Mobile Number
                        </label>
                        <input className="sign_up_inupt_box" type="tel" onChange={handleInput} name="number" placeholder="Enter your Phone Number"></input>
                    </div>

                    {errors.number.required?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>Enter your Mobile Number</h6>
                        </div>
                    </div>):null
                    }

                    
                    <div className="sign_up_input">
                        <label>
                            Password
                        </label>
                        <input className="sign_up_inupt_box" type="password" onChange={handleInput} name="password" placeholder="***********"></input>
                    </div>

                    {errors.password.required?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>Enter your Password</h6>
                        </div>
                    </div>):null
                    }

                    <div className="sign_up_input">
                        <label>
                            confirm Password
                        </label>
                        <input className="sign_up_inupt_box" type="Password" onChange={handleInput} name="c_password" placeholder="************"></input>
                    </div>

                    {errors.c_password.required?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>Enter your confirm password</h6>
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
                                <input type="checkbox" for="rem"></input>
                                <label className="sign_up_checkbox_label">I agree with the <a href="_self">Terms & Conditions</a></label>
                            </div>
                        </div>
                    
                    {loading?
                        (<div id="spinner_roll">
                            <div class="spinner-border text-primary" role="status">
                            </div>
                        </div>):null
                    }
                   
                    <div className="form_sign_up_button_div">
                        <button type="submit" className="form_sign_up_button">sign up</button>
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