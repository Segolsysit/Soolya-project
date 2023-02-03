import './header.css';
import logo from "./images/logo.png";

// offcanvas menu item images
import profile from "./images/user.png";
import inbox from "./images/chat.png";
import setting from "./images/settings.png";
import booking from "./images/booking.png";
import coupons from "./images/coupon.png";
import about_us from "./images/about_us.png";
import terms from "./images/terms_and_conditions.png";
import privacy_policy from "./images/privacy_policy.png";
import cancellation_policy from "./images/cancellation_policy.png";
import refund_policy from "./images/refund_policy.png";
import help from "./images/help_support.png";
import sign_in from "./images/sign_in.png";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { isAuthenticated, isAuthenticatedLogin } from './js_files/auth';
import { logOut } from './js_files/auth';



function Header() {

    const nav = useNavigate();


    const [register, setRegister] = useState(true);

    const [login, setLogin] = useState(true);


    const logOutUser = () => {
        logOut();
        nav("/sign_in");

    }

    const navLogin = ()=>{
         nav("/sign_in");
         setLogin(null);     
    }

    const navRegister = ()=>{
        nav("/sign_up");
        setRegister(null);
    }
 

    return (
        <div>
            <header>
                <div className="header">
                    <div className="header_content">
                        <div className="header_content_div">
                            <NavLink to="/"><img className="company_logo" src={logo} alt="Company-logo"></img></NavLink>
                        </div>
                        <div className="d_flex">

                
                            <div className="header_content_div">
                                <div className="service_man">
                                    <button className="service_man__register" onClick={() => nav('/service_man')}>Become a Service man</button>

                                </div>
                            </div>

                      
        
       <div>
       <i  class="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="header_content_div">
            {/* onClick={() => { nav('/sign_in') }} */}

                                
                                {!isAuthenticatedLogin() && login?
                                    <button type="button" className="sign_in__buttton" 
                                    onClick={navLogin} >
                                        <i id="sign_icon" className="fa-solid fa-arrow-right-to-bracket"></i>
                                        Login
                                    </button>:null}

                                    {/* {login?
                                    <button type="button" className="sign_in__buttton" 
                                    onClick={navLogin} >
                                        <i id="sign_icon" className="fa-solid fa-arrow-right-to-bracket"></i>
                                        Login
                                    </button>:null} */}
                                    
                                    {isAuthenticated() || !isAuthenticatedLogin() && register?
                                    <button type="button" className="sign_up__buttton" onClick={navRegister}>
                                        <i id="sign_icon" className="fa-solid fa-arrow-right-to-bracket"></i>
                                        Register
                                    </button>:null}

                                    {/* {register?
                                    <button type="button" className="sign_up__buttton" onClick={navRegister}>
                                        <i id="sign_icon" className="fa-solid fa-arrow-right-to-bracket"></i>
                                        Register
                                    </button>:null} */}
    
                                  

                                    {isAuthenticatedLogin()?
                                    <button type="button" className="sign_in__buttton" onClick={logOutUser}>
                                        <i id="sign_icon" className="fa-solid fa-arrow-right-to-bracket"></i>
                                        Log Out
                                    </button>:null}
                                   
                                    {/* {!isAuthenticated() && !isAuthenticatedLogin()?
                                    <button type="button" className="sign_in__buttton" onClick={()=>{nav("/dashboard")}}>
                                        <i id="sign_icon" className="fa-solid fa-arrow-right-to-bracket"></i>
                                        Dash
                                    </button>:null} */}





        {/* offcanvas */}

        <button id="off_canvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i id="menu_space" className="fa-solid fa-list-ul"></i>
                        Menu
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h4>Menu</h4>
                    </div>
                    <div className="offcanvas-body">
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={profile} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Profile</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={inbox} alt="settings"></img>

                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Inbox</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={setting} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Settings</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={booking} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Bookings</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={coupons} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>coupons</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={about_us} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>About us</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={terms} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Terms & conditions</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={privacy_policy} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Privacy Policy</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={cancellation_policy} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>cancellation Policy</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={refund_policy} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Refund Policy</h6>
                                </div>
                            </div>
                        </button>
                        <button className="offcanvas_menu_btn">
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={help} alt="settings"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Help & Support</h6>
                                </div>
                            </div>
                        </button>
                       
                        <button  className="offcanvas_menu_btn" onClick={()=> nav('sign_in')} data-bs-dismiss="offcanvas" >
                            <div className="offcanvas_menu_item">
                                <div className="offcanvas_menu_item_img">
                                    <img className="offcanvas_font_img" src={sign_in} alt="settings" onClick={()=> nav('sign_in')} data-bs-dismiss="offcanvas"></img>
                                </div>
                                <div className="offcanvas_menu_item_name">
                                    <h6>Sign In</h6>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                </div>
</div>


    {/* </header > */}
    </div >

</div>
    </header>
    </div>
    );

}

export default Header;
