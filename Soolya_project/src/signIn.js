import './signIn.css';
import logo from "./images/logo.png";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SignIn(){

const initialErrors = {
    email_phone:{required:false},
    password:{required:false},
    custom_error:null
};
 
const [errors,setErrors] = useState(initialErrors);

const [loading,setLoading] = useState(false);

const [inputs,setInputs] = useState({
    email_phone:"",
    password:""
});

const handleInput = (event)=>{
    setInputs({...inputs,[event.target.name]:event.target.value});
}

const handleSubmit = (event)=>{
     event.preventDefault();

     let errors = initialErrors;

     let hasErrors = false;

    if (inputs.email_phone === "") {
            errors.email_phone.required = true;
            hasErrors = true;
    }

    if (inputs.password === "") {
        errors.password.required = true;
        hasErrors = true;
    }

    if (hasErrors !== true) {
         setLoading(true);
    }

    setErrors(errors);

}



    return(
        <div>  

<div className="sign_in">
        <div className="sign_in_div">
            <div className="sign_in_logo_div">
                <div>
                    <img className="sign_in_logo" src={logo} alt="sign_in_page"></img>
                </div>
                <div>
                    <h4 className='h1'>Soolya</h4>
                </div>
             </div>
            
            <form  onSubmit={handleSubmit} className="sign_in_form">
          
             <div className="form_div">
                    <div className="form_input">
                        <label>
                            Email/Phone
                        </label>
                        <input className="data_input" name="email_phone" onChange={handleInput} type="text" placeholder="Enter email or phone number"></input>
                    </div>

                    {errors.email_phone.required?
                    (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>Email or phone number is required</h6>
                        </div>
                    </div>):null
                    }

                    <div className="form_input">
                        <label>
                            Password
                        </label>
                        <input className="data_input" name="password" onChange={handleInput} type="password" placeholder="********"></input>
                    </div>

                    {errors.password.required?
                    (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>Password is required</h6>
                        </div>
                    </div>):null
                    }

                    {errors.custom_error?
                    (<div id="d_flex_center" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h5>{errors.custom_error}</h5>
                        </div>
                    </div>):null
                    }
                 
                   <div className="form_checkbox">
                        <div className="form_checkbox">
                            <input type="checkbox" htmlFor="rem"></input>
                            <label className="form_checkbox_label">Remember me?</label>
                        </div>
                        <div>
                            <button className="forget_pass" href="_self">Forgot Password?</button>
                        </div>
                    </div>
                   
                   {loading?
                   (<div id="spinner_roll">
                        <div className="spinner-border text-primary" role="status">
                        </div>
                    </div>):null
                    }

                    <div className="form_sign_in_button_div">
                        <button type="submit" className="form_sign_in_button" disabled={loading} >sign in</button>
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
                        <p>Don't have an account? <span><Link className="sign_up_link" to="/sign_up">sign up here</Link></span></p>
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

    );
}

export default SignIn;