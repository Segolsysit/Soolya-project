import './signIn.css';
import logo from "./images/logo.png";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {  useState , useEffect} from 'react';
// import { LoginApi } from './js_files/api';
// import { removeUserData1, storeUserData2 } from './js_files/storage';
// import { isAuthenticated, isAuthenticatedLogin } from './js_files/auth';
import Header from './header';
import Footer from './footer';
import { toast } from 'react-toastify';
import axios from "axios";
import { useCookies } from "react-cookie";
// axios.defaults.withCredentials = true

function SignIn() {



    
  const nav = useNavigate();
  const [cookies] = useCookies([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt2) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });

 const initialErrors = {
        email: null,
        password: null,
      
    }


    const [errors, setErrors] = useState(initialErrors);


    const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {

        let errors = initialErrors;

            let hasErrors = false;
    
    
            if (values.email === "") {
                errors.email = "Email is required";
                hasErrors = true;
            }
    
            if (values.password === "") {
                errors.password = "Password is required";
                hasErrors = true;
            }
    
            if (!hasErrors) {
                  setLoading(true);

                  const { data } = await axios.post(
                    "http://localhost:3001/auth_router/login",
                    {
                      ...values,
                    },
                    { withCredentials: true }
                  );
                  if (data) {
                    if (data.errors) {
                      const { email, password } = data.errors;
                      if (email) generateError(email);
                      else if (password) generateError(password);
                    } else {
                      navigate("/");
                    }
                  }
                }
            // catch (ex) {
            //       console.log(ex);
            //     }
            setLoading(false)

            setErrors({...errors})
  };


    // const initialErrors = {
    //     email: null,
    //     password: null,
    //     custom_error: null
    // }


    // const [errors, setErrors] = useState(initialErrors);


    // const [loading, setLoading] = useState(false);

    // const [inputs, setInputs] = useState({
    //     email: "",
    //     password: ""
    // });

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     let errors = initialErrors;

    //     let hasErrors = false;


    //     if (inputs.email === "") {
    //         errors.email = "Email or Phone number is required";
    //         hasErrors = true;
    //     }

    //     if (inputs.password === "") {
    //         errors.password = "Password is required";
    //         hasErrors = true;
    //     }



    //     if (!hasErrors) {
    //         setLoading(true);

    //         LoginApi(inputs).then((response) => {
    //             storeUserData2(response.data.idToken);
    //         }).catch((err) => {
    //             if (err.response.data.error.message == "MISSING_EMAIL") {
    //                 console.log(err);
    //                 setErrors({ ...errors, custom_error: "Invalid credential" });
    //             }
    //             if (err.code === "ERR_BAD_REQUEST") {
    //                 setErrors({ ...errors, custom_error: "Invalid credential" });
    //             }

    //         }).finally(() => {
    //             setLoading(false);
    //         })
    //     }


    //     setErrors({ ...errors });

    // }



    // if (isAuthenticatedLogin() ) {
    //     // removeUserData1();
    //     removeUserData1();
    //     // return <Navigate to="/dashboard"></Navigate>
    //     return <Navigate to="/"></Navigate>
    // }



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
                            <h4 className='h1'>Soolya</h4>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="sign_in_form">

                        <div className="form_div">
                            <div className="form_input">
                                <label>
                                    Email
                                </label>
                                <input className="data_input" onChange={(e) =>{
              setValues({ ...values, [e.target.name]: e.target.value });
              errors.email = null;
                                    
                                }
            }
            autoComplete="off"
                                 name="email"  type="text" placeholder="Enter email "></input>
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
                                   onChange={(e) =>{
                                    setValues({ ...values, [e.target.name]: e.target.value })
                                    errors.password = null;
                                   }
                                  }
                                  name="password"
                                   type="password" placeholder="********"></input>
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

{/* 
                            {errors.custom_error ?
                                (<div id="d_flex_center" className="sign_in_form_validation">
                                    <div>
                                        <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                                    </div>
                                    <div>
                                        <h5>{errors.custom_error}</h5>
                                    </div>
                                </div>) : null
                            } */}


                            <div className="form_checkbox">
                                <div className="form_checkbox">
                                    <input type="checkbox" htmlFor="rem"></input>
                                    <label className="form_checkbox_label">Remember me?</label>
                                </div>
                                {/* <div>
                                    <button className="forget_pass" href="_self">Forgot Password?</button>
                                </div> */}

                                <button id="forget_pass" type="button" onClick={()=>{nav("/forget_password")}}>
                                    Forgot Password?
                                </button>

                             

                            </div>



                            {loading ?
                                (<div id="spinner_roll">
                                    <div className="spinner-border text-primary" role="status">
                                    </div>
                                </div>) : null
                            }


                            <div className="form_sign_in_button_div">
                                <button type="submit"  className="form_sign_in_button" >sign in</button>
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

<Footer></Footer>
        </div>

    );
}

export default SignIn;