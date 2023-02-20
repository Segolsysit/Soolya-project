import ReCAPTCHA from "react-google-recaptcha";
import swal from 'sweetalert';


function BookingFinish({setpage}){

    
    const onChange=(value)=>{
        localStorage.setItem("captcha", value)
      }
  
  
      const captchaValue = ()=>{
          return localStorage.getItem("captcha")
      }
  
      const authenticate = ()=>{
          captchaValue() ===""?true:false;
      }
  
      const captchaSubmit = (e)=>{
  
            e.preventDefault();
  
          if (!authenticate()){
            swal({
                title: "Booked Successfull!",
                text: "Your Booking is confirmed!",
                icon: "success",
                button: "Ok",
              });
          }

        else{
            console.log("captcha error");

            }
      
      }

  
    return(
        <div>

<fieldset>
                                {/* <div class="form-card">
                                    <h2 class="fs-title">Payment Information</h2>
                                    <div class="radio-group">
                                        <div class='radio' data-value="credit"><img src="https://i.imgur.com/XzOzVHZ.jpg" width="200px" height="100px"></img></div>
                                        <div class='radio' data-value="paypal"><img src="https://i.imgur.com/jXjwZlj.jpg" width="200px" height="100px"></img></div>
                                        <br/>
                                    </div>
                                    <label class="pay">Card Holder Name*</label>
                                    <input type="text" name="holdername" placeholder=""/>
                                    <div class="row">
                                        <div class="col-9">
                                            <label class="pay">Card Number*</label>
                                            <input type="text" name="cardno" placeholder=""/>
                                        </div>
                                        <div class="col-3">
                                            <label class="pay">CVC*</label>
                                            <input type="password" name="cvcpwd" placeholder="***"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-3">
                                            <label class="pay">Expiry Date*</label>
                                        </div>
                                        <div class="col-9">
                                            <select class="list-dt" id="month" name="expmonth">
                                                <option selected>Month</option>
                                                <option>January</option>
                                                <option>February</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option>July</option>
                                                <option>August</option>
                                                <option>September</option>
                                                <option>October</option>
                                                <option>November</option>
                                                <option>December</option>
                                            </select>
                                            <select class="list-dt" id="year" name="expyear">
                                                <option selected>Year</option>
                                            </select>
                                        </div>
                                    </div>
                                </div> */}
                                <form>
                                    <div className="captcha_overall">
                                        <div>
                                            <h5 className="captcha_heading">Confirm here!</h5>
                                            <div className="alig"> 
                                            <ReCAPTCHA 
                                                    sitekey="6LdyhYIkAAAAAJj04Umnf4rQ427h49pItJtiBJ_l"
                                                    onChange={onChange}
                                            />               
                                            </div>
                                <input type="button" name="previous" onClick={()=>{setpage((currentpage)=> currentpage - 1)}} class="previous action-button-previous" value="Previous"/>
                                <input type="submit" name="make_payment" onClick={captchaSubmit} class="next action-button" value="Confirm Booking"/>
                                </div>
                                    </div>
                                </form>
                            </fieldset>
            
        </div>
    )
}

export default BookingFinish;