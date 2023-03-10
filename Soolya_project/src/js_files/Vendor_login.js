import React, { useState } from 'react'
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../signIn.css';


const Vendor_login = () => {

    const [cookies] = useCookies([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (cookies.jwt2) {
            navigate("/vendor_admin");
        }
    }, [cookies, navigate]);

    const [values, setValues] = useState({ Email: "", Password: "" });
    const generateError = (error) =>
        toast.error(error, {
            position: "bottom-right",
        });

    const initialErrors = {
        Email: null,
        Password: null,

    }


    const [errors, setErrors] = useState(initialErrors);


    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        // try {

        let errors = initialErrors;

        let hasErrors = false;


        if (values.Email === "") {
            errors.Email = "Email is required";
            hasErrors = true;
        }

        if (values.Password === "") {
            errors.Password = "Password is required";
            hasErrors = true;
        }


        setLoading(true);

        const { data } = await axios.post(
            "http://localhost:3001/vendor_register/login",
            {
                ...values,
            },
            { withCredentials: true }
        );
        if (data) {
            if (data.errors) {
                const { Email, Password } = data.errors;
                if (Email) generateError(Email);
                else if (Password) generateError(Password);
            } else {
                navigate("/vendor_admin");
            }
        }

        // catch (ex) {
        //       console.log(ex);
        //     }
        setLoading(false)

        setErrors({ ...errors })
    }

    return (
        <div className="sign_in1">
            {/* <center> */}
            <div className="sign_in_div1">
                <div className="sign_in_logo_div">
                    <div>
                        {/* <img className="sign_in_logo" src={logo} alt="sign_in_page"></img> */}
                    </div>
                    <div>
                        <h4 className='h1'>Vendor login</h4>
                    </div>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form_input">
                        <label>Email</label>
                        <input className="data_input"
                            onChange={(e) => {
                                setValues({ ...values, [e.target.name]: e.target.value });
                                errors.Email = null;

                            }

                            } name="Email" type="email"></input>

                    </div>
                        {errors.Email ?
                            (<div id="d_flex" className="sign_in_form_validation">
                                <div>
                                    <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                                </div>
                                <div>
                                    <h6>{errors.Email}</h6>
                                </div>
                            </div>) : null
                        }
                        <div className="form_input">
                        <label>Password</label>
                        <input className="data_input"
                            onChange={(e) => {
                                setValues({ ...values, [e.target.name]: e.target.value })
                                errors.Password = null;
                            }
                            }
                            name="Password" type="password"></input>
                            </div>
                        {errors.Password ?
                            (<div id="d_flex" className="sign_in_form_validation">
                                <div>
                                    <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                                </div>
                                <div>
                                    <h6>{errors.Password}</h6>
                                </div>
                            </div>) : null
                        }
                        <div className="form_sign_in_button_div1">
                        <button className="form_sign_in_button" >Sign in</button>
                       </div>
                </form>
            </div>
            {/* </center> */}
        </div>

    )
}

export default Vendor_login