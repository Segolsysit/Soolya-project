import './signIn.css';
import logo from "./images/logo.png";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import { Link } from 'react-router-dom';

function SignIn(){
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
            
            <form className="sign_in_form">
          
             <div className="form_div">
                    <div className="form_input">
                        <label>
                            Email/Phone
                        </label>
                        <input className="data_input" type="text" placeholder="Enter email or phone number"></input>
                    </div>

                    <div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>Enter email or phone number</h6>
                        </div>
                    </div>

                    <div className="form_input">
                        <label>
                            Password
                        </label>
                        <input className="data_input"  type="password" placeholder="********"></input>
                    </div>

                    <div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>Enter password</h6>
                        </div>
                    </div>

                    <div id="d_flex_center" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h5>Custom error message</h5>
                        </div>
                    </div>
                 
                   <div className="form_checkbox">
                        <div className="form_checkbox">
                            <input type="checkbox" for="rem"></input>
                            <label className="form_checkbox_label">Remember me?</label>
                        </div>
                        <div>
                            <button className="forget_pass" href="_self">Forgot Password?</button>
                        </div>
                    </div>
                   
                   <div id="spinner_roll">
                        <div class="spinner-border text-primary" role="status">
                        </div>
                    </div>

                    <div className="form_sign_in_button_div">
                        <button className="form_sign_in_button">sign in</button>
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