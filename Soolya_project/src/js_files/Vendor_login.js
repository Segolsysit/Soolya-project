import React, { useState } from 'react'
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Vendor_login = () => {

    const [cookies] = useCookies([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (cookies.jwt2) {
            navigate("/vendor_admin");
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
        // event.preventDefault();
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
                "http://localhost:3001/vendor_register/login",
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

        setErrors({ ...errors })
    }

    return (
        <div>
            <center>
                <label>Email</label><br />
                <input
                    onChange={(e) => {
                        setValues({ ...values, [e.target.name]: e.target.value });
                        errors.email = null;

                    }
                    } name="email"></input><br /><br />
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
                <label>Password</label><br />
                <input 
                onChange={(e) =>{
                    setValues({ ...values, [e.target.name]: e.target.value })
                    errors.password = null;
                   }
                  }
                  name="password"></input><br /><br />
                <button onClick={()=>handleSubmit()}>Sign in</button>
            </center>
        </div>
    )
}

export default Vendor_login