import './signIn.css';
import logo from "./images/logo.png";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState} from 'react';
import { LoginApi } from './js_files/api';
import { storeUserData2 } from './js_files/storage';
import { isAuthenticatedLogin } from './js_files/auth';



function SignIn(props) {

const nav=useNavigate()


    const initialErrors = {
        email: null,
        password: null,
        custom_error: null
    }

    
    const [errors, setErrors] = useState(initialErrors);

    //     if( <Navigate to="/sign_in" replace={true} /> ){
    //          alert("Registraion is successfull Login here vignesh!");

    //         errors.custom_error = "Registraion is successfull Login here!";
    //    }


    const [loading, setLoading] = useState(false);

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

     const handleSubmit = (event) => {
        event.preventDefault();

        let errors = initialErrors;

        let hasErrors = false;

        console.log(errors);

        if (inputs.email === "") {
            errors.email = "Email or Phone number is required";
            hasErrors = true;
        }

        if (inputs.password === "") {
            errors.password = "Password is required";
            hasErrors = true;
        }



        if (!hasErrors) {
            setLoading(true);

            LoginApi(inputs).then((response) => {
                storeUserData2(response.data.idToken);
            }).catch((err) => {
                // if(err.response.data.error.message == "MISSING_EMAIL"){
                //     console.log(err);
                //     setErrors({...errors,custom_error:"Invalid credential"});
                // }
                if (err.code === "ERR_BAD_REQUEST") {
                    // let errors = initialErrors;

                    console.log(err);
                    setErrors({ ...errors, custom_error: "Invalid credential" });
                    // errors.custom_error = "Invalid credential";

                }

            }).finally(() => {
                setLoading(false);
            })
        }


        setErrors({ ...errors });

        // nav("/")
       return props.setTog(false)


    }


    


    if (isAuthenticatedLogin()) {
        // return <Navigate to="/dashboard"></Navigate>

        return <Navigate to="/"></Navigate>

    }



    //    const [is,setIs] = useState();

    // if (isAuthenticated()){
    //     return logOut();
    // }




    return (
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

                    <form onSubmit={handleSubmit} className="sign_in_form">

                        <div className="form_div">
                            <div className="form_input">
                                <label>
                                    Email/Phone
                                </label>
                                <input className="data_input" onChange={(event) => {
                                    setInputs({ ...inputs, email: event.target.value })
                                    errors.email = null;
                                }}
                                    value={inputs.email} type="text" placeholder="Enter email or phone number"></input>
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

                            <div className="form_input">
                                <label>
                                    Password
                                </label>
                                <input className="data_input"
                                    onChange={(event) => {
                                        setInputs({ ...inputs, password: event.target.value })
                                        errors.password = null;
                                    }}
                                    value={inputs.password} type="password" placeholder="********"></input>
                            </div>

                            {errors.password ?
                                (<div id="d_flex" className="sign_in_form_validation">
                                    <div>
                                        <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                                    </div>
                                    <div>
                                        <h6>{errors.password}</h6>
                                    </div>
                                </div>) : null
                            }


                            {errors.custom_error ?
                                (<div id="d_flex_center" className="sign_in_form_validation">
                                    <div>
                                        <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                                    </div>
                                    <div>
                                        <h5>{errors.custom_error}</h5>
                                    </div>
                                </div>) : null
                            }


                            <div className="form_checkbox">
                                <div className="form_checkbox">
                                    <input type="checkbox" htmlFor="rem"></input>
                                    <label className="form_checkbox_label">Remember me?</label>
                                </div>
                                {/* <div>
                                    <button className="forget_pass" href="_self">Forgot Password?</button>
                                </div> */}

                                <button id="forget_pass" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                Forgot Password?
                                </button>

                                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div id="share_profile_modal_width" class="modal-dialog modal-dialog-centered " role="document">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <div className="share_profile_cont">
                                                    <div>
                                                        <h4 className="share_profile_heading">Registered Email</h4>
                                                    </div>
                                                    <div>
                                                        <button id="share_profile_links_close_btn" type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">
                                                                <i class="fa-solid fa-xmark"></i>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* <div>
                                                    <h5 className="share_profile_select_heading">Select from the options below</h5>
                                                </div>
                                                <div className="share_profile_link">

                                                </div> */}
                                                
                                                
                                            </div>
                                            {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div> */}
                                        </div>
                                    </div>
                                </div>


                            </div>




                            {loading ?
                                (<div id="spinner_roll">
                                    <div className="spinner-border text-primary" role="status">
                                    </div>
                                </div>) : null
                            }


                            <div className="form_sign_in_button_div">
                                <button type="submit" disabled={loading} className="form_sign_in_button">sign in</button>
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
                                <div >
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