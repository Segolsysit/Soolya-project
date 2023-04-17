import axios from "axios";
import { useEffect, useState } from "react";

function BookingDetails({  error, setError, address, setaddress,
street,setstreet,city,setcity,zip,setzip,person,setperson,number,setnumber }) {

   

    return (
        <div>

            <fieldset>
                <div class="form-card">
                    <h2 class="fs-title">Billing Address</h2>
                    {/* <input type="email" name="email" placeholder="Email Id"/>
                                    <input type="text" name="uname" placeholder="UserName"/>
                                    <input type="password" name="pwd" placeholder="Password"/>
                                    <input type="password" name="cpwd" placeholder="Confirm Password"/> */}

                    {/* <CustomerDetails></CustomerDetails> */}

                    {error.custom_error ?
                        (<div id="d_flex_center_new" className="sign_in_form_validation">
                            <div>
                                <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                            </div>
                            <div>
                                <h6>{error.custom_error}</h6>
                            </div>
                        </div>) : null}

                    <div className="customer_details_overall">
                        <div className="customer_details_overall_div" >
                            {/* <div className="sign_in_logo_div"> 
                        <div>
                            <img className="sign_in_logo" src={logo} alt="sign_in_page"></img>
                        </div>
                        <div>
                            <h4 className='h1'>Soolya</h4>
                        </div>
                    </div> */}
                            <form>
                                <div className="customer_details_cont">
                                    <div className="customer_details_cont_div">
                                        <label className="customer_details_label">Sevice Address</label>
                                        <input className="customer_details_input" value={address} onChange={(e) => {
                                            setaddress( e.target.value );
                                            error.address = null;
                                            setError({ ...error, custom_error: null })
                                        }} type="text" ></input>
                                    </div>
                                    {error.address ?
                                        (<div id="d_flex" className="sign_in_form_validation">
                                            <div>
                                                <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                                            </div>
                                            <div>
                                                <h6>{error.address}</h6>
                                            </div>
                                        </div>) : null
                                    }
                                    <div className="customer_details_cont_div">
                                        <label className="customer_details_label">Street</label>
                                        <input className="customer_details_input" value={street} onChange={(e) => {
                                            setstreet( e.target.value );
                                            error.street = null;
                                            setError({ ...error, custom_error: null });
                                        }} type="text" ></input>
                                    </div>
                                    {error.street ?
                                        (<div id="d_flex" className="sign_in_form_validation">
                                            <div>
                                                <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                                            </div>
                                            <div>
                                                <h6>{error.street}</h6>
                                            </div>
                                        </div>) : null
                                    }
                                    <div className="customer_details_cont_div">
                                        <label className="customer_details_label">City</label>
                                        <input className="customer_details_input" value={city} onChange={(e) => {
                                            setcity( e.target.value );
                                            error.city = null;
                                            setError({ ...error, custom_error: null });
                                        }} type="text"></input>
                                    </div>
                                    {error.city ?
                                        (<div id="d_flex" className="sign_in_form_validation">
                                            <div>
                                                <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                                            </div>
                                            <div>
                                                <h6>{error.city}</h6>
                                            </div>
                                        </div>) : null
                                    }
                                    {/* <div className="customer_details_cont_div">
                                <label className="customer_details_label">Country</label>
                                <input className="customer_details_input"  type="text"></input>
                            </div> */}
                                    <div className="customer_details_cont_div">
                                        <label className="customer_details_label">Post code</label>
                                        <input className="customer_details_input" value={zip} onChange={(e) => {
                                            setzip( e.target.value );
                                            error.zip = null;
                                            setError({ ...error, custom_error: null });
                                        }} type="number"></input>
                                    </div>
                                    {error.zip ?
                                        (<div id="d_flex" className="sign_in_form_validation">
                                            <div>
                                                <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                                            </div>
                                            <div>
                                                <h6>{error.zip}</h6>
                                            </div>
                                        </div>) : null
                                    }
                                    <div className="customer_details_cont_div">
                                        <label className="customer_details_label">Contact person</label>
                                        <input className="customer_details_input" value={person} onChange={(e) => {
                                            setperson( e.target.value );
                                            error.person = null;
                                            setError({ ...error, custom_error: null });
                                        }} type="text"></input>
                                    </div>
                                    {error.person ?
                                        (<div id="d_flex" className="sign_in_form_validation">
                                            <div>
                                                <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                                            </div>
                                            <div>
                                                <h6>{error.person}</h6>
                                            </div>
                                        </div>) : null
                                    }
                                    <div className="customer_details_cont_div">
                                        <label className="customer_details_label">Phone number</label>
                                        <input className="customer_details_input" value={number} onChange={(e) => {
                                            setnumber( e.target.value );
                                            error.number = null;
                                            setError({ ...error, custom_error: null });
                                        }} type="number"></input>
                                    </div>
                                    {error.number ?
                                        (<div id="d_flex" className="sign_in_form_validation">
                                            <div>
                                                <i id="cross_sign" className="fa-regular fa-circle-xmark"></i>
                                            </div>
                                            <div>
                                                <h6>{error.number}</h6>
                                            </div>
                                        </div>) : null
                                    }
                                    {/* <div className="save_location_btn_div">
                                <button type="submit" className="save_location_btn">Save Location</button>
                            </div> */}
                                </div>
                                {/* <input type="submit"   value="Next Step" /> */}
                                {/* <button type="button" onClick={detailSubmit}>next</button> */}

                            </form>
                        </div>
                    </div>
                </div>
            </fieldset>

        </div>
    )
}

export default BookingDetails;