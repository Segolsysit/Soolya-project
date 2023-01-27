import { useState } from "react";
import "../css_files/forgetPassword.css";
import { ResetApi } from "./api";


function ForgetPassword() {


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
  
        if(email_input !== ""){
                settDataLoading(true);
                ResetApi(email_input).then((response)=>{
                   console.log(response);
                }).catch((err)=>{
                console.log(err);
  
                if(err.code === "ERR_BAD_REQUEST"){
                    setWrong({...wrong,custom_error:"Registered email is required"})   
                }
                })
        }
  
  
        setWrong({ ...wrong })
    }


    return (
        <div>

            <div className="forget_page_overall_div">
                <div className="forget_page_div">
                    <form onSubmit={handleForgetsubmit}>
                        <div>
                            {/* <div>
                                <label>
                                    Registered email_input
                                </label>
                            </div> */}
                            <div>
                                <input type="email_input" value={email_input} onChange={(event) => {
                                    setEmail_Input(event.target.value)
                                    wrong.email_input = null;
                                    wrong.custom_error = null;
                                }} placeholder="Email"></input>
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

                        {wrong.custom_error? 
                        (<div id="d_flex_center" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h5>{wrong.custom_error}</h5>
                        </div>
                    </div>):null
                    }

                        {dataLoading?
                                (<div id="spinner_roll">
                                    <div className="spinner-border text-primary" role="status">
                                    </div>
                                </div>):null
                            }


                        <div className="forget_page_btn">
                            <button type="submit">submit</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
}

export default ForgetPassword;