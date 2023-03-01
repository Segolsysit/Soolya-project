import "./signUp.css";
import logo from "./images/logo.png";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import { RegisterApi } from "./js_files/api";
import { storeUserData } from "./js_files/storage";
import { isAuthenticated, isAuthenticatedLogin } from "./js_files/auth";
import Header from "./header";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
// axios.defaults.withCredentials = true

function SignUp(){

    
    const [cookies] = useCookies(["cookie-name"]);
    const navigate = useNavigate();
    useEffect(() => {
      if (cookies.jwt2) {
        navigate("/");
      }
    }, [cookies, navigate]);
//     const [loading,setLoading] = useState(false);
  
    const [values, setValues] = useState({
        firstName:"",
        lastName:"",
        phoneNumber:"", 
        email: "", 
        password: "",
        confirmpassword:"",
        checked:false
    });
    // const generateError = (error) =>
     
    
      const initialErrors = {
        fname:null,
        lname:null,
        email:null,
        number:null,
        password:null,
        c_password:null,
        checked:null,
        custom_error:null
    }
     
    const [errors,setErrors] = useState(initialErrors);

    const [loading,setLoading] = useState(false);

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(values);
    //   try {

        let errors = initialErrors;

        let hasErrors = false;

        
           if (values.firstName === "") {

               errors.fname = "First name is required";
               hasErrors = true;
           }

           if (values.lastName === "") {
            errors.lname = "Last name is required";
            hasErrors = true;
           }

            if (values.email === "") {
                errors.email ="Email is required";
               hasErrors = true;
            }

            if (values.phoneNumber === "") {
                errors.number = "Number is required";
               hasErrors = true;
            }

            else if(values.phoneNumber.length <10 || values.phoneNumber.length >10){
                errors.number ="Number must have 10 digit";
                hasErrors = true;
            }

            


            if (values.password === ""  ) {
                errors.password = "Password is required";
               hasErrors = true;
            }

            if (values.confirmpassword === "") {
                
         
                errors.c_password = "Confirm password is required";
               hasErrors = true;
            }

            if (values.password !== values.confirmpassword) {
                errors.c_password = "Password and Confirm password are not same";
               hasErrors = true;
            }


            if (values.checked === false) {
                 errors.checked = "Agree terms & Conditions is required";
                 hasErrors = true; 
            }


            if(!hasErrors){
                setLoading(true);
                 const { data } = await axios.post(
          "http://localhost:3001/auth_router/register",
          {
            firstName:values.firstName,
            lastName:values.lastName,
            PhoneNumber:values.phoneNumber,
            email:values.email,
            password:values.password

          },
          { withCredentials: true }
        )
        console.log(data);
        if (data) {
                  if (data.errors) {
                    const { email, password } = data.errors;
                    if (email){
                        toast.error(email, {
                            position: "bottom-right",
                          });
        // setErrors({custom_error:email});

                    }
                    else if (password) {
                        toast.error(password, {
                            position: "bottom-right",
                          });
                    }
                        
                  } else {
                    navigate("/sign_in");
                  }
                }
            }
        setLoading(false);
             

    setErrors({...errors})

    //     const { data } = await axios.post(
    //       "http://localhost:3001/auth_router/register",
    //       {
    //         firstName:values.firstName,
    //         lastName:values.lastName,
    //         PhoneNumber:values.phoneNumber,
    //         email:values.email,
    //         password:values.password

    //       },
    //       { withCredentials: true }
    //     );
    //     if (data) {
    //       if (data.errors) {
    //         const { email, password } = data.errors;
    //         if (email) generateError(email);
    //         else if (password) generateError(password);
    //       } else {
    //         navigate("/sign_in");
    //       }
    //     }
    //   } catch (err) {
    //     if(err.response.data.error.message === "EMAIL_EXISTS"){
    //                                 setErrors({...errors,custom_error:"Already this email has been registered"});
    //                             }
    //                             else if ( String(err.response.data.error.message).includes("WEAK_PASSWORD")) {
    //                                 setErrors({...errors,custom_error:"Password should be at least 6 characters"});
    //                             }
    //   }
    };

//     const initialErrors = {
//         fname:null,
//         lname:null,
//         email:null,
//         number:null,
//         password:null,
//         c_password:null,
//         checked:null,
//         custom_error:null
//     }
     
//     const [errors,setErrors] = useState(initialErrors);
    

//     const [loading,setLoading] = useState(false);

   
   
//    const handleSubmit = (event)=>{
//            event.preventDefault();

//            let errors = initialErrors;

//            let hasErrors = false;


//            if (inputs.fname === "") {

//                errors.fname = "First name is required";
//                hasErrors = true;
//            }

//            if (inputs.lname === "") {
//             errors.lname = "Last name is required";
//             hasErrors = true;
//            }

//             if (inputs.email === "") {
//                 errors.email ="Email is required";
//                hasErrors = true;
//             }

//             if (inputs.number === "") {
//                 errors.number = "Number is required";
//                hasErrors = true;
//             }

//             else if(inputs.number.length <10 || inputs.number.length >10){
//                 errors.number ="Number must have 10 digit";
//                 hasErrors = true;
//             }

            


//             if (inputs.password === ""  ) {
//                 errors.password = "Password is required";
//                hasErrors = true;
//             }

//             if (inputs.c_password === "") {
//                 errors.c_password = "Confirm password is required";
//                hasErrors = true;
//             }

//             if (inputs.password !== inputs.c_password) {
//                 errors.c_password = "Password and Confirm password are not same";
//                hasErrors = true;
//             }

//             if (inputs.checked === false) {
//                  errors.checked = "Agree terms & Conditions is required";
//                  hasErrors = true; 
//             }

           
          
//             if (!hasErrors) {
//                 setLoading(true); 
                
//                 RegisterApi(inputs).then((response)=>{
//                     // console.log(response);
//                     storeUserData(response.data.idToken);
                
//                     if(isAuthenticated() === true){
//                     nav("/sign_in");
//                     }

//                 }).catch((err)=>{
//                     if(err.response.data.error.message === "EMAIL_EXISTS"){
//                         setErrors({...errors,custom_error:"Already this email has been registered"});
//                     }
//                     else if ( String(err.response.data.error.message).includes("WEAK_PASSWORD")) {
//                         setErrors({...errors,custom_error:"Password should be at least 6 characters"});
//                     }

//                 }).finally(()=>{
//                     setLoading(false);
//                 })

//             }
         
//             setErrors({...errors});
//     }

//     const [inputs,setInputs] = useState({
//         fname:"",
//         lname:"",
//         email:"",
//         number:"",
//         password:"",
//         c_password:"",
//         checked:false
//     })

    
    
 
//     if(isAuthenticated()){
//         // return <Navigate to="/sign_in"></Navigate>   
//     }

//     if(isAuthenticatedLogin()){
//         return <Navigate to="/"></Navigate>   
//     }

    return(
    <div>

<Header></Header>

     <div className="sign_up">
        <div className="sign_up_div">
            <div className="sign_up_logo_div">
                <div>
                    <img className="sign_up_logo" src={logo} alt="sign_up_page"></img>
                </div>
                <div>
                    <h4>Soolya</h4>
                </div>
             </div>
            
            <form onSubmit={(e) => handleSubmit(e)} className="sign_up_form">
          
             <div className="form_div">
                    <div className="label_display">
                    <div className="label_display_div">
                    <div className="sign_up_input">
                        <label>
                            First name
                        </label>
                        <input className="sign_up_inupt_box" type="text" 
                        onChange={(e) =>{
                            setValues({ ...values, [e.target.name]: e.target.value });
                            errors.fname = null;
                        }      
                          }
                          
                         
                        name="firstName"  placeholder="Enter your first name"></input>
                    </div>

                    {errors.fname?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>{errors.fname}</h6>
                        </div>
                    </div>):null
                    }

                    <div className="sign_up_input">
                        <label>
                            Last name
                        </label>
                        <input className="sign_up_inupt_box" type="text" 
                       onChange={(e) =>{
                        setValues({ ...values, [e.target.name]: e.target.value });
                        errors.lname = null;
                       }            
                      }
                         name="lastName" placeholder="Enter your first name" ></input>
                    </div>

                    {errors.lname?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>{errors.lname}</h6>
                        </div>
                        </div>):null
                    }

                    <div className="sign_up_input">
                        <label>
                            Email Address
                        </label>
                        <input className="sign_up_inupt_box" type="email" 
                
                       onChange={(e) =>{
                        setValues({ ...values, [e.target.name]: e.target.value });
                        errors.email = null;
                       }
                      }
                        name="email" placeholder="Enter your email address" ></input>
                    </div>

                    {errors.email?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                         
                            <h6>{errors.email}</h6>
                        </div>
                    </div>):null
                    }
                        </div>

                     


                        <div className="label_display_div">
                    <div className="sign_up_input">
                        <label>
                            Mobile Number
                        </label>
                        <input className="sign_up_inupt_box" type="tel"  
                       onChange={(e) =>{
                        setValues({ ...values, [e.target.name]: e.target.value });
                        errors.number = null;
                       }
                      }
                        name="phoneNumber"  placeholder="Enter your Phone Number"></input>
                    </div>

                    {errors.number?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                          
                             <h6>{errors.number}</h6>
                        </div>
                    </div>):null
                    }

                    
                    <div className="sign_up_input">
                        <label>
                            Password
                        </label>
                        <input className="sign_up_inupt_box" type="password" 
                      onChange={(e) =>{
                        setValues({ ...values, [e.target.name]: e.target.value });
                        errors.password = null;
                      }
                      }
                       name="password" placeholder="***********"></input>
                    </div>

                    {errors.password?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>{errors.password}</h6>
                        </div>
                    </div>):null
                    }

                    <div className="sign_up_input">
                        <label>
                            confirm Password
                        </label>
                        <input className="sign_up_inupt_box" type="Password" 
                       onChange={(e) =>{
                        setValues({ ...values, [e.target.name]: e.target.value });
                        errors.c_password = null;
                       }
                      }
                        name="confirmpassword" placeholder="************"></input>
                    </div>

                    {errors.c_password?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>{errors.c_password}</h6>
                        </div>
                    </div>):null
                    }

                        </div>
                        </div>  


                    {errors.custom_error?
                        (<div id="d_flex_center_new" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h5>{errors.custom_error}</h5>
                        </div>
                    </div>):null
                    }
   
                        <div className="sign_up_checkbox">
                            <div className="sign_up_checkbox">
                                <input type="checkbox" checked={values.checked}
                                name="checked"
                                  onChange={(e) =>{
                                    setValues({ ...values, [e.target.name]: e.target.value });
                                    errors.checked = null;
                                  }
                                  }
                            htmlFor="rem" ></input>
                                <label className="sign_up_checkbox_label" for="terms">I agree with the <a href="_self">Terms & Conditions</a></label>
                            </div>
                        </div>

                        {errors.checked?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                            <h6>{errors.checked}</h6>
                        </div>
                    </div>):null
                    }
                    
                    {loading?
                        (<div id="spinner_roll">
                            <div class="spinner-border text-primary" role="status">
                            </div>
                        </div>):null
                    }
                   
                    <div className="form_sign_up_button_div">
                        <button type="submit" className="form_sign_up_button">sign up</button>
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
                    <div>
                        <p>Already have an account? <span><Link className="sign_up_link" to="/sign_in">sign in here</Link></span></p>
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
    )
}

export default SignUp;