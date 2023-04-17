import { useState } from "react"
import './signIn.css';
import logo from "./images/logo.png";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import Header from './header';
import Footer from './footer';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import bcrypt from 'bcryptjs';


const Admin_login = () => {
 
    const admin_email = "soolyaadmin@gmail.com"
    const admin_password = "Soolya123"

    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const [values, setValues] = useState({ email: "", password: "" });
    const generateError = (error) =>
        toast.error(error, {
            position: "bottom-right",
        });
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
      if(admin_email === email && admin_password === password){
        localStorage.setItem("adminemail",admin_email)
        localStorage.setItem("adminpassword",hashedPassword)
        nav("/admin_home")
      }
      else{
        toast.error("Email or Password Is Invalid", {
            position: "top-center",
        });
      }
    };

    const nav = useNavigate()

    return (
        <div>
            <Header></Header>

            <div className="sign_in">
                <div className="sign_in_div">
                    <div className="sign_in_logo_div">
                        <div>
                            <img className="sign_in_logo" src={logo} alt="sign_in_page"></img>
                        </div>
                        <div>
                            <h4 className='h1'>Admin Login</h4>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="sign_in_form">

                        <div className="form_div">
                            <div className="form_input">
                                <label>
                                    Email/Phone
                                </label>
                                <input className="data_input" onChange={(e) =>
                                    setemail( e.target.value )
                                }
                                    name="email" type="text" placeholder="Enter email or phone number"></input>
                            </div>
                            <div className="form_input">
                                <label>
                                    Password
                                </label>
                                <input className="data_input"
                                    onChange={(e) =>
                                        setpassword( e.target.value )
                                    }
                                    name="password"
                                    type="password" placeholder="********"></input>
                            </div>
                            <div className="form_checkbox">
                                <div className="form_checkbox">
                                    <input type="checkbox" htmlFor="rem"></input>
                                    <label className="form_checkbox_label">Remember me?</label>
                                </div>
                                <button id="forget_pass" type="button" onClick={() => { nav("/forget_password") }}>
                                    Forgot Password?
                                </button>



                            </div>
                            <div className="form_sign_in_button_div">
                                <button type="submit" className="form_sign_in_button" >log in</button>
                            </div>


                            {/* <div className="form_center">
                                <div className="or_cont">
                                    <p>or</p>
                                    <p>sign in with</p>
                                </div>
                                <div>
                                    <button className="inline_btn"><img className="inline_img" src={google} alt="btn_face"></img> Google</button>
                                    <button className="inline_btn"><img className="inline_img" src={facebook} alt="btn_goo"></img>facebook</button>
                                </div>
                                <div >
                                    <p>Don't have an account? <span><Link className="sign_up_link" to="/sign_up">sign up here</Link></span></p>
                                </div>
                                <div>
                                    <p>Continue as a <span><a href="_self">Guest</a></span></p>
                                </div> */}
                        </div>
                
            
        
            </form >

        </div >
            </div >

    <Footer></Footer>
    </div >
  )
}

export default Admin_login