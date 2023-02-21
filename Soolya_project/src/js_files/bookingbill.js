import axios from "axios";
import { useEffect } from "react";

function BookingBill({setpage}){

useEffect(()=>{
    axios.get("https://63bd5802d660062388a24683.mockapi.io/Soolya").then((res)=>{
        console.log(res.data);
    })
},[])
   

    return(
        <div>

<fieldset>
                                <div class="form-card">
                                    <h2 class="fs-title">Biling Summary</h2>
                                    {/* <input type="text" name="fname" placeholder="First Name"/>
                                    <input type="text" name="lname" placeholder="Last Name"/>
                                    <input type="text" name="phno" placeholder="Contact No."/>
                                    <input type="text" name="phno_2" placeholder="Alternate Contact No."/> */}
                                    <div className="card_summary">
                                        <div className="card_summary_left">
                                            <h4>Plumbing Checkup service</h4>
                                            <h6>Plumbing Checkup service</h6>
                                            <div>
                                                <p className="total">Grant Total</p>
                                            </div>
                                        </div>
                                        <div className="card_summary_right">
                                            <p className="card_summar_right_para">₹ 300</p>
                                            <div className="amount_div">
                                                <p className="total">₹ 300</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card_summary_address">
                                        <div className="card_summary_address_div">
                                            <i id="card_summary_icon" class="fa-solid fa-user"></i>
                                            <p>Ramkumar</p>
                                        </div>
                                        <div className="card_summary_address_div">
                                            <i id="card_summary_icon" class="fa-solid fa-phone"></i>
                                            <p>978764535</p>
                                        </div>
                                        <div className="card_summary_address_div">
                                            <i id="card_summary_icon" class="fa-solid fa-location-dot"></i>
                                            <address>
                                                <p>41/1 Annamalai Layout, Nalli Hospital Rd
                                                    , Municipal Colony, Muncipal Colony, Erode, Tamil Nadu 638011, India</p>
                                            </address>
                                        </div>
                                    </div>
                                

                                </div>
                                <input type="button" name="previous" onClick={()=>{setpage((currentpage)=> currentpage - 1)}
                            } class="previous action-button-previous" value="Previous"/>
                                <input type="button" name="next" onClick={()=>{setpage((currentpage)=> currentpage + 1)}} class="next action-button" value="Continue Booking"/>
                            </fieldset>


        </div>
    )
}

export default BookingBill;