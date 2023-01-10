import "./signUp.css";
import logo from "./images/logo.png";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import { Link } from "react-router-dom";

function SignUp(){
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
            
            <form className="sign_up_form">
          
             <div className="form_div">
                    <div className="label_display">
                    <div>
                    <div className="sign_up_input">
                        <label>
                            First name
                        </label>
                        <input className="sign_up_inupt_box" type="text" placeholder="Enter your first name"></input>
                    </div>
                    <div className="sign_up_input">
                        <label>
                            Last name
                        </label>
                        <input className="sign_up_inupt_box" type="text" placeholder="Enter your first name"></input>
                    </div>
                    <div className="sign_up_input">
                        <label>
                            Email Address
                        </label>
                        <input className="sign_up_inupt_box" type="email" placeholder="Enter your email address"></input>
                    </div>
                        </div>


                        <div>
                    <div className="sign_up_input">
                        <label>
                            Mobile Number
                        </label>
                        <input className="sign_up_inupt_box" type="tel" placeholder="Enter your Phone Number"></input>
                    </div>
                    <div className="sign_up_input">
                        <label>
                            Password
                        </label>
                        <input className="sign_up_inupt_box" type="password" placeholder="***********"></input>
                    </div>
                    <div className="sign_up_input">
                        <label>
                            confirm Password
                        </label>
                        <input className="sign_up_inupt_box" type="Password" placeholder="************"></input>
                    </div>
                        </div>
                        </div>  
   
                        <div className="sign_up_checkbox">
                            <div className="sign_up_checkbox">
                                <input type="checkbox" for="rem"></input>
                                <label className="sign_up_checkbox_label">I agree with the <a href="_self">Terms & Conditions</a></label>
                            </div>
                        </div>
                    
                   
                    <div className="form_sign_up_button_div">
                        <button className="form_sign_up_button">sign up</button>
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