import "../css_files/plumbing.css";

import rating from "../images/ratings.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Plumbing(props) {
let array =props.array;
    

    //search

    const nav = useNavigate();


    function back() {
        localStorage.setItem('search', "")
        localStorage.setItem('dist', "")


        nav('/')
    }
    const [get, setGet] = useState("")
    const [district, setDistrict] = useState("")
 
    

    useEffect(() => {
        setGet(localStorage.getItem("search"));
        setDistrict(localStorage.getItem("dist"));
    }, [])

    let filter;

    if (get.length === 0) {
        filter = array.filter((arr) => {

            return district === arr.district;

        })
    } else if (district.length === 0) {
        filter = array.filter((arr) => {

            return get === arr.type;

        })

    }
    else if (get.length === 0 && district.length === 0) {
        filter = array.filter((arr) => {

            return district === arr.district || get === arr.type

        })
    } else {
        filter = array.filter((arr) => {

            return district === arr.district && get === arr.type

        })
    }
    // return get === arr.type;
    // })
    //    const filter1 = filter.filter((fil)=>{
    //     return get === fil.type;
    //    })

    return (
        <div>




            <div className="plumber_page">
                <div className="plumber_div_1">

                </div>
                {/* <div className="plumber_page"> */}
                <div className="plumber_div_2">
                    <button onClick={back}>home page</button>

                    {filter.length === 0 ? 
                    array.map((a) => (

                        <div className="plumber_profile" key={a.id}>

                            <div className="plumber_profile_inner">
                                <div className="plumber_image_size">
                                    <img className="plumber_img" src={a.img} alt="plumber_man"></img>
                                </div>

                                <div className="plumber_bio">
                                    <div>
                                        <h4>{a.name}</h4>
                                        <h5><b><u>{a.type}</u></b></h5>
                                    </div>
                                    <div className="d_flex">
                                        <h5>Ratings</h5>
                                        <img className="ratings_image" src={rating} alt="plumber_man"></img>
                                    </div>
                                    <div>
                                        <h6>{a.timing}</h6>
                                    </div>
                                    <div className="d_flex">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <address className="profile_address">
                                            {a.address}
                                        </address>
                                    </div>
                                </div>

                                <div className="plumber_booking">
                                    <button className="plumber_booking_btn" onClick={()=>nav('/plumber_profile')}>View more</button>
                                </div>
                            </div>

                        </div>)) :
                        filter.map((a) => (


                            <div className="plumber_profile" key={a.id}>

                                <div className="plumber_profile_inner">
                                    <div className="plumber_image_size">
                                        <img className="plumber_img" src={a.img} alt="plumber_man"></img>
                                    </div>

                                    <div className="plumber_bio">
                                        <div>
                                            <h4>{a.name}</h4>
                                            <h5><b><u>{a.type}</u></b></h5>
                                        </div>
                                        <div className="d_flex">
                                            <h5>Ratings</h5>
                                            <img className="ratings_image" src={rating} alt="plumber_man"></img>
                                        </div>
                                        <div>
                                            <h6>{a.timing}</h6>
                                        </div>
                                        <div className="d_flex">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <address className="profile_address">
                                                {a.address}
                                            </address>
                                        </div>
                                    </div>

                                    <div className="plumber_booking">
                                        <button className="plumber_booking_btn" onClick={()=>nav('/plumber_profile')}>View more</button>
                                    </div>
                                </div>

                            </div>

                        ))}


                    {/* <div className="plumber_profile">
                            <div className="plumber_profile_inner">
                            <div className="plumber_image_size">
                                <img className="plumber_img" src={array[1].img} alt="plumber_man"></img>
                            </div>

                            <div className="plumber_bio">
                                <div>
                                    <h4>{array[1].name}</h4>
                                </div>
                                <div className="d_flex">
                                    <h5>Ratings</h5>
                                    <img className="ratings_image" src={rating} alt="plumber_man"></img> 
                                </div>
                                <div>
                                    <h6>{array[1].timing}</h6>
                                </div>
                                <div className="d_flex">
                                <i className="fa-solid fa-location-dot"></i>
                                <address className="profile_address">
                                    {array[1].address}
                                </address>
                                </div>
                            </div>

                            <div className="plumber_booking">
                                <button className="plumber_booking_btn">Book Now</button>
                            </div>
                            </div>
                        </div> */}


                    {/* <div className="plumber_profile">
                            <div className="plumber_profile_inner">
                            <div className="plumber_image_size">
                                <img className="plumber_img" src={array[2].img} alt="plumber_man"></img>
                            </div>

                            <div className="plumber_bio">
                                <div>
                                    <h4>{array[2].name}</h4>
                                </div>
                                <div className="d_flex">
                                    <h5>Ratings</h5>
                                    <img className="ratings_image" src={rating} alt="plumber_man"></img> 
                                </div>
                                <div>
                                    <h6>{array[2].timing}</h6>
                                </div>
                                <div className="d_flex">
                                <i className="fa-solid fa-location-dot"></i>
                                <address className="profile_address">
                                    {array[2].address}
                                </address>
                                </div>
                            </div>

                            <div className="plumber_booking">
                                <button className="plumber_booking_btn">Book Now</button>
                            </div>
                            </div>
                        </div>

                         */}
                </div>
                

                
                <div className="plumber_div_3">

                </div>
            </div>



        </div>
    );
}

export default Plumbing;