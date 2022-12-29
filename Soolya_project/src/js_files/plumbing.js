import "../css_files/plumbing.css";
import ganapathy_raj from "../images/3.jpg";
import praveen from "../images/2.jpg";
import santhosh_kumar from "../images/1.jpg";
import rating from "../images/ratings.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Plumbing(props) {

    const array = [
        {
            id: 1,
            img: ganapathy_raj,
            name: "Ganapathy raj",
            type: "plumber",
            timing: "Timing : 9.30 AM - 6 PM",
            address: "553/A, Sanganoor Main Road Ganapathy Pudur, erode-641006.",
            district:"erode"

        },
        {
            id: 2,
            img: praveen,
            name: "Praveen",
            type: "electrician",
            timing: "Timing : 10 AM - 7:30 PM",
            address: "806 Wisdom Tree Neelambur, erode-638 011.",
            district:"erode"

        },
        {
            id: 3,
            img: santhosh_kumar,
            name: "Santhosh Kumar",
            type: "electrician",
            timing: "Timing : 24 hrs",
            address: "3/59, Gandhipuram 3th Street Gandhipuram, Coimbatore-641012.",
            district:"Coimbatore"

        },
        {
            id: 4,
            img: santhosh_kumar,
            name: "Santhosh Kumar",
            type: "plumber",
            timing: "Timing : 24 hrs",
            address: "3/59, Gandhipuram 3th Street Gandhipuram, Coimbatore-641012.",
            district:"Coimbatore"
        }

    ];

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

if(get.length === 0 || get.length === undefined){
   filter = array.filter((arr) => {
        
            return district === arr.district;
            
        })
    }else if(district.length === 0 ||district.length === undefined){
        filter = array.filter((arr) => {
        
            return get === arr.type;
            
        })

    }
    else if((get.length === 0 || get.length === undefined) && (district.length === 0 ||district.length === undefined)){
        filter = array.filter((arr) => {
        
            return district === arr.district || get === arr.type
            
        })
    }else{
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

                    {filter.length === 0 ? array.map((a) => (

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
                                    <button className="plumber_booking_btn">Book Now</button>
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
                                        <button className="plumber_booking_btn">Book Now</button>
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