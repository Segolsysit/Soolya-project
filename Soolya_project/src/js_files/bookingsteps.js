import "../css_files/bookingsteps.css";
// import $ from "jquery";

import BookingDetails from "./bookingdetails";
import BookingBill from "./bookingbill";
import BookingFinish from "./bookingfinish";
import { useState } from "react";

function BookingSteps(){



    // details page

    // const initialErrors = {
    //     address:null,
    //     street:null,
    //     city:null,
    //     zip:null,
    //     person:null,
    //     number:null,
    //     custom_error:null
    // }

    const [error, setError] = useState({
        address:null,
        street:null,
        city:null,
        zip:null,
        person:null,
        number:null,
        custom_error:null
    });
 
    const [input, setInput] = useState({
  
        address:"",
        street:"",
        city:"",
        zip:"",
        person:"",
        number:""
        
    });
 

    const [page, setPage] = useState(1);


const props = {input, setInput, error, setError}

    const PageDisplay = ()=>{
        if(page === 1 ){
            return <BookingDetails setpage={setPage} {...props}></BookingDetails>
        } else if(page === 2){
           return <BookingBill setpage={setPage}  {...props}></BookingBill>
        } else if(page === 3){
            return <BookingFinish setpage={setPage}  {...props}></BookingFinish>
        }
    }

    


    return(
        <div>


<div class="container-fluid" id="grad1">
    <div class="row justify-content-center mt-0">
        <div class="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2><strong>Booking details</strong></h2>
                <p>Fill all form field to go to next step</p>
                <div >
                    <div class="col-md-12 mx-0">
                        <form id="msform">

                            <ul id="progressbar">
                                <li class={page ===  1 ? "active" : " "} id="account"><strong>Details</strong></li>
                                <li class={page ===  2 ? "active" : " "} id="personal1"><strong>Bill</strong></li>
                                {/* <li class={page === 3  ? "active" : " "}  id="payment"><strong>Finish</strong></li> */}
                                <li class={page === 3  ? "active" : " "}  id="confirm"><strong>Finish</strong></li>
                            </ul>


                           


                            <div>
                                {PageDisplay()}
                            </div>
                           


                           


                            {/* <fieldset>
                                <div class="form-card">
                                    <h2 class="fs-title text-center">Success !</h2>
                                    <div class="row justify-content-center">
                                        <div class="col-3">
                                            <img src="https://img.icons8.com/color/96/000000/ok--v2.png" class="fit-image"></img>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div class="row justify-content-center">
                                        <div class="col-7 text-center">
                                            <h5>You Have Successfully Signed Up</h5>
                                        </div>
                                    </div>
                                </div>
                            
                            </fieldset> */}


                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


        </div>

    );
}


export default BookingSteps;


