import { useState } from "react";
import "../css_files/forgetPassword.css";
import { ResetApi } from "./api";


function ForgetPassword() {


    const initialErrors = {
        email: null,
        custom_error: null
    };

    const [errors, setErrors] = useState(initialErrors);


    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();

        let errors = initialErrors;


        if (email === "")
            errors.email = "Email is required";

        if(email !== ""){
                setLoading(true);
                ResetApi(email).then((response)=>{
                   console.log(response);
                }).catch((err)=>{
                console.log(err);

                if(err.code === "ERR_BAD_REQUEST"){
                    setErrors({...errors,custom_error:"Registered email is required"})   
                }
                })
        }


        setErrors({ ...errors })
    }



    return (
        <div>

            <div className="forget_page_overall_div">
                <div className="forget_page_div">
                    <form onSubmit={handleSubmit}>
                        <div>
                            {/* <div>
                                <label>
                                    Registered email
                                </label>
                            </div> */}
                            <div>
                                <input type="email" value={email} onChange={(event) => {
                                    setEmail(event.target.value)
                                    errors.email = null;
                                    errors.custom_error = null;
                                }} placeholder="Registered email"></input>
                            </div>

                            {errors.email ?
                                (<div id="d_flex" className="sign_in_form_validation">
                                    <div>
                                        <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                                    </div>
                                    <div>
                                        <h6>{errors.email}</h6>
                                    </div>
                                </div>) : null
                            }
                        </div>

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

                        {loading?
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