import "../css_files/customerdetails.css";
import logo from "../images/logo.png";

function CustomerDetails(){





    return(
        <div>


            <div className="customer_details_overall">
                <div className="customer_details_overall_div" >
                    <div className="sign_in_logo_div"> 
                        <div>
                            <img className="sign_in_logo" src={logo} alt="sign_in_page"></img>
                        </div>
                        <div>
                            <h4 className='h1'>Soolya</h4>
                        </div>
                    </div>
                    <form>
                        <div className="customer_details_cont">
                            <div className="customer_details_cont_div">
                                <label className="customer_details_label">Sevice Address</label>
                                <input className="customer_details_input" type="text" ></input>
                            </div>
                            <div className="customer_details_cont_div">
                                <label className="customer_details_label">Street</label>
                                <input className="customer_details_input"  type="text" ></input>
                            </div>
                            <div className="customer_details_cont_div">
                                <label className="customer_details_label">City</label>
                                <input className="customer_details_input" type="text"></input>
                            </div>
                            <div className="customer_details_cont_div">
                                <label className="customer_details_label">Country</label>
                                <input className="customer_details_input" type="text"></input>
                            </div>
                            <div className="customer_details_cont_div">
                                <label className="customer_details_label">Zip</label>      
                                <input className="customer_details_input" type="text"></input>
                            </div>
                            <div className="customer_details_cont_div">
                                <label className="customer_details_label">Contact person</label>      
                                <input className="customer_details_input" type="text"></input>
                            </div>
                            <div className="customer_details_cont_div">
                                <label className="customer_details_label">Phone number</label>      
                                <input className="customer_details_input" type="text"></input>
                            </div>
                            <div className="save_location_btn_div">
                                <button type="submit" className="save_location_btn">Save Location</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default CustomerDetails;