import './footer.css';
import payment_method from "./images/payment.png";


function Footer(){
    return(
        <div>
        
        <div className="footer_relative">

        </div>

        <footer>
                <div>

        <div className="footer_content">
            <div className="left_div">
                <h2 className="left_div_title">About us</h2>
                <div className="div_content" id="div_content">
                    <div>
                        <h2 className="left_div_title_mobile">About us</h2>
                        <p>
                            From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time.
                        </p>
                    </div>
                    <div className="social_links">
                        <div>
                            <h4>Social links</h4>
                            <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                        <div className="border_div">

                        </div>
                        <div className="payment_div">
                            <h4>We accept</h4>
                            <img src={payment_method} alt="payment"></img>
                        </div>

                    </div>
                </div>
            </div>
            <div className="last_two_div">
                <div className="center_div">
                    <h2>Address</h2>
                    <div className="div_content">
                        <div className="place">
                            <i className="fa-solid fa-location-dot"></i>
                            <span id="div_content_span_width">Rangampalayam,Erode</span>
                        </div>
                        <div className="phone">
                            <i className="fa-solid fa-phone"></i>
                            <span>+91-7674872834</span>
                        </div>
                        <div className="email">
                            <i className="fa-solid fa-envelope"></i>
                            <span>abc@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="right_div">
                    <h2>Contact us</h2>

                    <div>
                        <div className="contact_us_head ">Email *</div>
                        <input className="email_box form-control" type="email" required></input>
                    </div>
                    <div>
                        <div className="contact_us_head">Message *</div>
                        <textarea row="3" col="20" className='form-control'>
                        </textarea>
                    </div>
                    <div>
                        <button type="submit" className="footer_button btn btn-outline-primary">
                            send
                        </button>
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