
function BookingDetails({setpage, input, setInput, error, setError}){

const detailSubmit = ()=>{


    let hasError =  false;
    

  if(input.address === ""){
    // setError({...error, address: "Address is required"});
    // setError({...error, street:"Street is required"});
    error.address = "Address is required";
    hasError = true;
  }

 if(input.street === ""){
    // setError({...error, street:"Street is required"});
    error.street = "Street is required";
    hasError = true;
  }

  if(input.city === ""){
    // setError({...error, city:"city is required"});
    error.city = "City is required";
    hasError = true;
  }
   
  if(input.zip === ""){
    // setError({...error, zip:"zip is required"});
    error.zip = "Zip is required";
    hasError = true;
  }

   if(input.person === ""){
    // setError({...error, person:"Name is required"});
    error.person = "Person is required";
    hasError = true;
  }

 if(input.number === ""){
    // setError({...error, number:"Number is required"});
    error.number = "Number is required";
    hasError = true;
  }

  else if(input.number.length <10 || input.number.length >10){
    error.number ="Number must have 10 digit";
    hasError = true;
}

  if(input.address === "" || input.street === "" || input.city === "" || input.zip === "" || input.person ==="" || input.number === ""){
    setError({...error, custom_error:"Please fill required field"});
    hasError = true;
  }

  if(!hasError){
    setpage(2);     
  }



//   if(input.street === ""){
//     error.street = "Street is required";
//     setError(true);

//   }

//    else{
//    }        
}

    return(
        <div>
            
                            <fieldset>
                                <div class="form-card">
                                    <h2 class="fs-title">Billing Address</h2>
                                    {/* <input type="email" name="email" placeholder="Email Id"/>
                                    <input type="text" name="uname" placeholder="UserName"/>
                                    <input type="password" name="pwd" placeholder="Password"/>
                                    <input type="password" name="cpwd" placeholder="Confirm Password"/> */}
                                    
                                    {/* <CustomerDetails></CustomerDetails> */}

                                    {error.custom_error?
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
                                <input className="customer_details_input" value={input.address} onChange={(e)=>{
                                    setInput({...input,address:e.target.value});
                                    error.address = null;
                                    setError({...error, custom_error:null})
                                    }} type="text" ></input>
                            </div>
                            {error.address?
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
                                <input className="customer_details_input" value={input.street} onChange={(e)=>{
                                    setInput({...input,street:e.target.value});
                                    error.street = null;
                                    setError({...error, custom_error:null});
                                    }} type="text" ></input>
                            </div>
                            {error.street?
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
                                <input className="customer_details_input" value={input.city} onChange={(e)=>{
                                    setInput({...input,city:e.target.value});
                                    error.city = null;
                                    setError({...error, custom_error:null});
                                    }} type="text"></input>
                            </div>
                            {error.city?
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
                                <label className="customer_details_label">Zip</label>      
                                <input className="customer_details_input" value={input.zip} onChange={(e)=>{
                                    setInput({...input,zip:e.target.value});
                                    error.zip = null;
                                    setError({...error, custom_error:null});
                                    }} type="text"></input>
                            </div>
                            {error.zip?
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
                                <input className="customer_details_input" value={input.person} onChange={(e)=>{
                                    setInput({...input,person:e.target.value});
                                    error.person = null;
                                    setError({...error, custom_error:null});
                                    }} type="text"></input>
                            </div>
                            {error.person?
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
                                <input className="customer_details_input" value={input.number} onChange={(e)=>{
                                    setInput({...input,number:e.target.value});
                                    error.number = null;
                                    setError({...error, custom_error:null});
                                    }} type="text"></input>
                            </div>
                            {error.number?
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
                    </form>
                </div>
            </div>
                                </div>
                                <input type="button" name="next" onClick={()=>detailSubmit()} class="next action-button" value="Next Step"/>
                            </fieldset>

        </div>
    )
}

export default BookingDetails;