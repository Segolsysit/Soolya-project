import ReCAPTCHA from "react-google-recaptcha";
import swal from 'sweetalert';


function BookingFinish(onChange) {


    

    return (
        <div>

            <fieldset>
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

                        </div>
                    </div>
                </form>
            </fieldset>

        </div>
    )
}

export default BookingFinish;