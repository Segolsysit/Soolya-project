import "../css_files/plumbing.css";
import ganapathy_raj from "../images/3.jpg";
import praveen from "../images/2.jpg";
import santhosh_kumar from "../images/1.jpg";
import rating from "../images/ratings.png";
import { useEffect, useState } from "react";


function Plumbing(){

    const array=[
        {
        id:1,
        img:ganapathy_raj,
        name:"Ganapathy raj",
        type:"plumber",
        timing:"Timing : 9.30 AM - 6 PM",
        address:"553/A, Sanganoor Main Road Ganapathy Pudur, Coimbatore-641006."
        },
        {
         id:2,
         img:praveen,
         name:"Praveen",
         type:"electrician",
         timing:"Timing : 10 AM - 7:30 PM",
         address:"806 Wisdom Tree Neelambur, Coimbatore-641062."
        },
        {
        id:3,
        img:santhosh_kumar,
        name:"Santhosh Kumar",
        type:"electrician",
        timing:"Timing : 24 hrs",
        address:"3/59, Gandhipuram 3th Street Gandhipuram, Coimbatore-641012.",
        },
        {
            id:4,
            img:santhosh_kumar,
            name:"Santhosh Kumar",
         type:"plumber",
            timing:"Timing : 24 hrs",
            address:"3/59, Gandhipuram 3th Street Gandhipuram, Coimbatore-641012.",
            }

];

//search
const [get, setGet]=useState("")

 useEffect(()=>{
setGet(localStorage.getItem("search"))
},[])


const filter = array.filter((arr)=>{
    return get === arr.type;
})
    return(
        <div> 




<div className="plumber_page">
            <div className="plumber_div_1">
                
            </div>
           {/* <div className="plumber_page"> */}
                    <div className="plumber_div_2">

{filter.length === 0 ?<div className="no"> <h1>No Data</h1> </div>: filter.map((a)=>(


                        <div className="plumber_profile">

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
                                <i class="fa-solid fa-location-dot"></i>
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
                                <i class="fa-solid fa-location-dot"></i>
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
                                <i class="fa-solid fa-location-dot"></i>
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