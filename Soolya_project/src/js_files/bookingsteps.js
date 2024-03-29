import "../css_files/bookingsteps.css";
// import $ from "jquery";

import BookingDetails from "./bookingdetails";
import BookingBill from "./bookingbill";
import BookingFinish from "./bookingfinish";
import Payment from "./Payment";
import { useState,useEffect} from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import axios from "axios";


function BookingSteps() {

    const [cookies, setCookie, removeCookie] = useCookies([]);
    const [myorders,setMyorders] = useState([])
    // const [paymentMethod,setPaymentMethod] = useState('')
    // const [user_email,setUseremail] = useState([])
    const nav = useNavigate();

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
    const token = cookies.jwt2;
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.id;
// console.log(`The user ID is: ${userId}`);

const tokenVerify = () => {
    if(!cookies.jwt2){
        // nav("/sign_in")
        console.log("invalid token");
    }
}

const orders = () => {
    axios.get(`http://localhost:3001/auth_router/fetch_email/${userId}`)
    .then((res) => {
        console.log(res.data);
        setMyorders(res.data)
    })

  }
    useEffect(() => {
     
     
      
        // if(!cookies.jwt2){
        //     nav("/sign_in")
        // }
        tokenVerify()
   
    //   setUseremail(myorders.email)
    // setPaymentMethod()
    orders()

    }, [])
    // console.log(paymentMethod);
    
   
        
    

    const [error, setError] = useState({
        address: null,
        street: null,
        city: null,
        zip: null,
        person: null,
        number: null,
        custom_error: null
    });

    const [input, setInput] = useState([])

    const [bookingdata, setbookingdata] = useState({})


    const [address, setaddress] = useState("")
    const [street, setstreet] = useState("")
    const [city, setcity] = useState("")
    const [zip, setzip] = useState("")
    const [person, setperson] = useState("")
    const [number, setnumber] = useState("")


    const [page, setPage] = useState(1);


    const PageDisplay = () => {
        if (page === 1) {
            return <BookingDetails setpage={setPage} {...props}></BookingDetails>
        } else if (page === 2) {
            return <BookingBill setpage={setPage}  {...props}></BookingBill>
        } else if (page === 3) {
            return <Payment setpage={setPage} {...props}></Payment>
        }
     else if (page === 4) {
        return <BookingFinish setpage={setPage}  {...props}></BookingFinish>
    }
    }

    const detailSubmit = (e) => {

        // e.preventDefault();
        let hasError = false;

        if (address === "") {
            error.address = "Address is required";
            hasError = true;
        }

        if (street === "") {
            error.street = "Street is required";
            hasError = true;
        }

        if (city === "") {
            error.city = "City is required";
            hasError = true;
        }

        if (zip === "") {
            // setError({...error, zip:"zip is required"});
            error.zip = "Zip is required";
            hasError = true;
        }

         if (zip.length < 6 || zip.length > 6) {
            error.zip = "Post Code must have 6 digit";
            hasError = true;
        }

        if (person === "") {
            // setError({...error, person:"Name is required"});
            error.person = "Person is required";
            hasError = true;
        }

        if (number === "") {
            // setError({...error, number:"Number is required"});
            error.number = "Number is required";
            hasError = true;
        }

        if (number.length < 10 || number.length > 10) {
            error.number = "Number must have 10 digit";
            hasError = true;
        }

        if (address === "" || street === "" || city === "" || zip === "" || person === "" || number === "") {
            setError({ ...error, custom_error: "Please fill required field" });
            hasError = true;
        }

        if (!hasError) {

            // const formData = new FormData();
            // formData.append("address", address);
            // formData.append("street", street);
            // formData.append("city", city);
            // formData.append("zip", zip);
            // formData.append("person", person);
            // formData.append("number", number);
            // axios.post("http://localhost:3001/booking_api/new_booking", formData);

            localStorage.setItem("address", address)
            localStorage.setItem("street", street)
            localStorage.setItem("city", city)
            localStorage.setItem("zip", zip)
            localStorage.setItem("person", person)
            localStorage.setItem("number", number)
            setPage(2);
        }
    }

    const onChange = (value) => {
        localStorage.setItem("captcha", value)
    }

    const captchaValue = () => {
        return localStorage.getItem("captcha")
    }

    const authenticate = () => {
        captchaValue() === "" ? true : false;
    }

    const captchaSubmit = (e) => {

        e.preventDefault();
        
        if (!authenticate()) {
            swal({
                title: "Booked Successfull!",
                text: "Your Booking is confirmed!",
                icon: "success",
                button: "Ok",
            }).then(()=>{
                nav("/myorders")
            })
            axios.post("http://localhost:3001/booking_api/new_booking", {
            user_email: myorders.email,
            address,
            street,
            city,
            zip,
            person,
            number,
            Service:bookingdata.Service,
            Category:bookingdata.Category,
            price:bookingdata.price,
            paymentMethod:localStorage.getItem("paymentType")
        })
       

        }

        else {
            swal({
                title: "Captcha verification is required",
                text: "Please verify the captcha",
                icon: "error",
                button: "Ok",
            });
            console.log("captcha error");
            
        }

    }

    const props = {
        input, setInput, error, setError, address, setaddress, street, setstreet, city, setcity, zip, setzip,
        person, setperson, number, setnumber, onChange, bookingdata, setbookingdata
    }
 return (
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
                                            <li class={page === 1 ? "active" : " "} id="account"><strong>Details</strong></li>
                                            <li class={page === 2 ? "active" : " "} id="personal1"><strong>Bill</strong></li>
                                            <li class={page === 3  ? "active" : " "}  id="payment"><strong>payment</strong></li>
                                            <li class={page === 4 ? "active" : " "} id="confirm"><strong>Finish</strong></li>
                                        </ul>
                                        <div>
                                            {PageDisplay()}
                                        </div>

                                        {page === 1 ? (<input type="button" name="next" onClick={detailSubmit}
                                            class="next action-button" value="Next" />) : ((
                                                page === 2 ?
                                                    (<div><input type="button" name="previous" onClick={() => { setPage((currentpage) => currentpage - 1) }}
                                                        class="previous action-button-previous" value="Previous" />
                                                        <input type="button" name="next" onClick={() => { setPage((currentpage) => currentpage + 1) }}
                                                            class="next action-button" value="Continue Booking" /></div>) :
                                                            page === 4?
                                                    (<div> <input type="button" name="previous" onClick={() => { setPage((currentpage) => currentpage - 1) }}
                                                        class="previous action-button-previous" value="Previous"></input>
                                                        <input type="submit" name="make_payment" onClick={captchaSubmit}
                                                            class="next action-button" value="Confirm Booking" /></div>):
                                                            <input type="button" name="previous" onClick={() => { setPage((currentpage) => currentpage - 1) }}
                                                            class="previous action-button-previous" value="Previous" />
                                            ))}




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


