import axios from "axios";
import { useEffect, useState } from "react";

function BookingBill({bookingdata,setbookingdata}) {

    const id = localStorage.getItem("service_id")
    const address = localStorage.getItem("address")
    const person =localStorage.getItem("person")
    const number =localStorage.getItem("number")

    useEffect(() => {
        // axios.get("https://63bd5802d660062388a24683.mockapi.io/Soolya").then((res) => {
        //     console.log(res.data);
        // })
        axios.get(`http://localhost:3001/service_api/new_fetch_service_items/${id}`).then((res) => {
            setbookingdata(res.data)
        })
    }, [])


    return (
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
                            <h4>{bookingdata.Service}</h4>
                            <h6>{bookingdata.Subcategory}</h6>
                            <div>
                                <p className="total">Grant Total</p>
                            </div>
                        </div>
                        <div className="card_summary_right">
                            <p className="card_summar_right_para">₹ {bookingdata.price}</p>
                            <div className="amount_div">
                                <p className="total">₹ {bookingdata.price}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card_summary_address">
                        <div className="card_summary_address_div">
                            <i id="card_summary_icon" class="fa-solid fa-user"></i>
                            <p>{person}</p>
                        </div>
                        <div className="card_summary_address_div">
                            <i id="card_summary_icon" class="fa-solid fa-phone"></i>
                            <p>{number}</p>
                        </div>
                        <div className="card_summary_address_div">
                            <i id="card_summary_icon" class="fa-solid fa-location-dot"></i>
                            <address>
                                <p>{address}</p>
                            </address>
                        </div>
                    </div>


                </div>
                {/* <input type="button" name="previous" onClick={() => { setpage((currentpage) => currentpage - 1) }
                } class="previous action-button-previous" value="Previous" />
                <input type="button" name="next" onClick={() => { setpage((currentpage) => currentpage + 1) }} class="next action-button" value="Continue Booking" /> */}
            </fieldset>


        </div>
    )
}

export default BookingBill;