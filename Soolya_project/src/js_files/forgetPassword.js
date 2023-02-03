import { useState } from "react";
import "../css_files/forgetPassword.css";
import Footer from "../footer";
import Header from "../header";
import { ResetApi } from "./api";
import resetDone from 'sweetalert';
import { removeForgetUserData, resetPasswordstoreData } from "./storage";
import { isAuthenticatedReset } from "./auth";
import { useNavigate } from "react-router-dom";


function ForgetPassword() {

    let nav = useNavigate();




    const initialErrors_1 = {
        email_input: null,
        custom_error: null
    };

    const [wrong, setWrong] = useState(initialErrors_1);


    const [dataLoading, settDataLoading] = useState(false);

    const [email_input, setEmail_Input] = useState("");


    const handleForgetsubmit = (event) => {
        event.preventDefault();

        let wrong = initialErrors_1;


        if (email_input === "")
            wrong.email_input = "Registered Email is required";

        if (email_input !== "") {
            settDataLoading(true);
            ResetApi(email_input).then((response) => {
                resetPasswordstoreData (response.data.kind);
                  resetDone({
            title: "Done!",
            text: "Password Reset Link Sent Successfully in your Email",
            icon: "success",
            button:"ok",
          }).then(()=>{
             nav("/sign_in");
          })
                console.log(response);
            }).catch((err) => {
                // console.log(err);

                if (err.code === "ERR_BAD_REQUEST") {
                    setWrong({ ...wrong, custom_error: "Registered email is required" })
                    settDataLoading(false);
                }
            })
            // .finally(()=>{
            //     settDataLoading(false);
            // })
        }

        

        setWrong({ ...wrong })


   
    }

    


    // if(isAuthenticatedReset()){
      

    // }


    return (
        <div>

            <Header></Header>

            <div className="forget_page">

                <div className="forget_page_div">
                    <div className="forget_page_heading_div">

                        <div className="forget_page_heading">
                            <h2>Forget Password</h2>
                        </div>

                    </div>

                    <div>

                        <div className="forget_page_div">
                            <form onSubmit={handleForgetsubmit}>
                                <div>
                                    <div className="form_input">
                                        <label>
                                            Email address
                                        </label>
                                    
                                        <input className="data_input" type="email_input" value={email_input} onChange={(event) => {
                                            setEmail_Input(event.target.value)
                                            wrong.email_input = null;
                                            wrong.custom_error = null;
                                        }} placeholder="Registered email"></input>
                                    </div>

                                    {wrong.email_input ?
                                        (<div id="d_flex" className="sign_in_form_validation">
                                            <div>
                                                <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                                            </div>
                                            <div>
                                                <h6>{wrong.email_input}</h6>
                                            </div>
                                        </div>) : null
                                    }
                                </div>

                                {wrong.custom_error ?
                                    (<div id="d_flex_center" className="sign_in_form_validation">
                                        <div>
                                            <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                                        </div>
                                        <div>
                                            <h5 >{wrong.custom_error}</h5>
                                        </div>
                                    </div>) : null
                                }

                                {dataLoading ?
                                    (<div id="forget_spinner_roll">
                                        <div className="spinner-border text-primary" role="status">
                                        </div>
                                    </div>) : null
                                }


                                <div className="forget_page_btn">
                                    <button type="submit" className="form_sign_in_button">submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>

            <Footer></Footer>

        </div>
    );
}

export default ForgetPassword;