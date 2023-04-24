import axios from 'axios';
import { useState } from 'react';
import './footer.css';
import payment_method from "./images/payment.png";


function Footer() {

    const initialErrors = {
        email: null,
        comment: null
    }

    const [error, setError] = useState(initialErrors);

    const [input, setInput] = useState({
        email: "",
        comment: ""
    });

    const handleSubmit = (event) => {

        event.preventDefault();

        let error = initialErrors;

        let hasErrors = false;

        if (input.email === "") {
            console.log("done");
            error.email = "Email is required";
            hasErrors = true;
        }
        if (input.comment === "") {
            console.log("done 2");
            error.comment = "comment is required";
            hasErrors = true;
        }
        if(!hasErrors){
            setError(true);
            let gg = {
                email:input.email,
                comment:input.comment
            }
            axios.post("http://localhost:3001/feedback_api/feedback",{
                email:input.email,
                message:input.comment
            })
           
            console.log(gg);
        }
        
  setError({...error});
// axios.post("http://localhost:3001/footer_api/new_footer",{
//                     email:input.email,
//                     comment:input.comment
//                 },{withCredentials:true})
    }

    return (
        <div>

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
                                                <img className="payment_img" src={payment_method} alt="payment"></img>
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
                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <div className="contact_us_head ">Email *</div>
                                                <input className="email_box form-control" id="email_box_mob" type="email" value={input.email} onChange={(e) => {
                                                    setInput({ ...input, email: e.target.value });
                                                    error.email = null;
                                                }}></input>
                                            </div>
                                            {error.email ?
                                                (<div id="d_flex_foot" className="sign_in_form_validation">
                                                    {/* <div>
                                                        <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                                                    </div> */}
                                                    <div className="d_flex_error_name">
                                                    <h6><i id="cross_sign_foot" class="fa-regular fa-circle-xmark"></i>
                                                       {error.email}</h6>
                                                    </div>
                                                </div>) : null
                                            }
                                            <div>
                                                <div className="contact_us_head">Message *</div>
                                                <textarea row="3" col="20" className='comment_box form-control' value={input.comment} onChange={(e) => {
                                                    setInput({ ...input, comment: e.target.value });
                                                    error.comment = null;
                                                }} id="email_box_mob">
                                                </textarea>
                                            </div>
                                            {error.comment ?
                                                (<div id="d_flex_foot" className="sign_in_form_validation">
                                                    {/* <div>
                                                        <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                                                    </div> */}
                                                    <div className="d_flex_error_name">
                                                    <h6><i id="cross_sign_foot" class="fa-regular fa-circle-xmark"></i>
                                                        {error.comment}</h6>
                                                    </div>
                                                </div>) : null
                                            }
                                            <div>
                                                <button type="submit" className="footer_button btn btn-outline-primary" id="email_box_mob">
                                                    send
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="policy">
                        <ul className="policy_unorder">
                            <li>
                                <p><a className="policy_mobile" href="_self">Privacy Policy</a></p>
                            </li>
                            <li>
                                <span>|</span>
                            </li>
                            <li>
                                <p><a className="policy_mobile" href="_self">Terms & Conditions</a></p>
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