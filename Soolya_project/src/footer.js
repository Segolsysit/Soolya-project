import './footer.css';
import payment_method from "./images/payment.png";


function Footer() {
    return (
        <div>

            {/* <div className="footer_relative">

            </div> */}

            <footer>
                <div>

                    <div className="footer_content">
                        <div className="left_div_overall_mobile">
                            <div className="left_div">
                                <h2 className="left_div_title">About us</h2>
                                <div className="div_content" id="div_content">
                                    <div>
                                        <h2 className="left_div_title_mobile">About us</h2>
                                        <div>
                                            <p>
                                                From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time.
                                                From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time.                                           
                                        </p>
                                        </div>
                                    </div>
                                    <div className="social_links">
                                        <div>
                                            <div>
                                                <h4>Social links</h4>
                                            </div>
                                            <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="https://www.twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                                        </div>
                                        <div className="border_div">

                                        </div>
                                        <div className="payment_div">
                                            <div>
                                                <h4>We accept</h4>
                                            </div>
                                            <div>
                                                <img src={payment_method} alt="payment"></img>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="last_two_div" id="margin_left_mob">
                            <div className="center_div">
                                <h2>Address</h2>
                                <div className="div_content" id="address_center_mob">
                                    <div className="address_mobile_space">
                                        <div className="place">
                                            <div>
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div>
                                                <span id="div_content_span_width">Rangampalayam,Erode</span>
                                            </div>
                                        </div>
                                        <div className="phone">
                                            <div>
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                            <div>
                                                <span id="div_content_span_width">+91-7674872834</span>
                                            </div>
                                        </div>
                                        <div className="email">
                                            <div>
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <div>
                                                <span id="div_content_span_width">abc@gmail.com</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="right_div" id="right_div_mob">
                                <h2>Contact us</h2>
                            <div id="contact_center_mob">
                                <div>
                                    <div>
                                        <div className="contact_us_head ">Email *</div>
                                        <input className="email_box form-control" id="email_box_mob" type="email" required></input>
                                    </div>
                                    <div>
                                        <div className="contact_us_head">Message *</div>
                                        <textarea row="3" col="20" className='comment_box form-control' id="email_box_mob">
                                        </textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="footer_button btn btn-outline-primary" id="email_box_mob">
                                            send
                                        </button>
                                    </div>
                                </div>
                            </div>
                                

                            </div>
                        </div>
                    </div>


                    <div className="policy">
                        <ul className="policy_unorder">
                            <li>
                                <a href="_self">Privacy Policy</a>
                            </li>
                            <li>
                                <span>|</span>
                            </li>
                            <li>
                                <a href="_self">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_class">
                        <p>
                            All rights reserved By @SoolyaLtd
                        </p>
                    </div>
                

                </div>

            </footer>

        </div>
    );
}

export default Footer;