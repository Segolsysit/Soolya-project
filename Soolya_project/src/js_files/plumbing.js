import "../css_files/plumbing.css";
import main_1 from "../images/main_1.jpg";
import rating from "../images/ratings.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Plumbing(props) {
    // let array = props.array;
    const [array,setArray] = useState([]);

useEffect(()=>{
axios.get("https://63bd5802d660062388a24683.mockapi.io/Soolya").then((res)=>{
    setArray(res.data);
    console.log(res.data);

})
},[])
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
    //     if(district === "Coimbatore"){
    //         filter = array.filter((arr) => {

    //         return arr.district === district &&  arr.type === get;


    //         })
    //     }
    // else if(district === "erode" && (get === "plumber")){
    //     filter = array.filter((arr) => {

    //     return arr.district === "erode" && arr.type==="plumber";


    //     })
    // }
    if (get.length === 0 ||get === "") {
        filter = array.filter((arr) => {

            return district === arr.district;

        })
    } else if (district.length === 0 || district === "") {
        filter = array.filter((arr) => {

            return get === arr.WorkType;

        })

    }
    else if (get.length === 0 && district.length === 0) {
        filter = array.filter((arr) => {

            return district === arr.district || get === arr.WorkType

        })
    }
    else {
        filter = array.filter((arr) => {

            return district === arr.district && get === arr.WorkType

        })
    }
    // return get === arr.type;
    // })
    //    const filter1 = filter.filter((fil)=>{
    //     return get === fil.type;
    //    })

    function chg(e) {
        // setGet(localStorage.setItem("search","plumber"));

        // setDistrict("erode")
        setDistrict(e.target.value)
        console.log(e.target.value);
    }

    return (
        <div>




            <div className="plumber_page ">
                <div className="plumber_div_1 " value={district} onChange={chg} >
                    {/* <button onClick={chg}>change</button> */}
                    <input type="radio" value="erode" name="district" id="erd" ></input>
                    <label htmlFor="erd" className="text-light h3 btn btn-primary w-50">Erode</label><br></br>
                    <input type="radio" value="Coimbatore" name="district" id="cbr" ></input>
                    <label htmlFor="cbr" className="text-light h3 btn btn-primary w-50">Coimbatore</label> 
                                   {/* <select value={district} onChange={chg}>
                <option value="">
                    select
                </option>
                    <option value="erode">erode</option>
                    <option value="Coimbatore">coimbatore</option>
                </select> */}
                    {/* <button onClick={fil}>search</button>  */}
                </div>
                {/* <div className="plumber_page"> */}
                <div className="plumber_div_2 ">
                <div className="text-center">
                    <button onClick={back} className="btn btn-primary ">home page</button></div>

                    {/* {filter.length === 0 ?
                        array.map((a) => (

                            <div className="plumber_profile" key={a.id}>

                                <div className="plumber_profile_inner">
                                    <div className="plumber_image_size">
                                        <img className="plumber_img" src={a.img} alt="plumber_man"></img>
                                    </div>

                                    <div className="plumber_bio">
                                        <div>
                                            <h4>{a.FirstName} {a.LastName}</h4>
                                            <h5><b><u>{a.WorkType}</u></b></h5>
                                        </div>
                                        <div className="d_flex">
                                            <h5>Ratings</h5>
                                            <img className="ratings_image" src={rating} alt="plumber_man"></img>
                                        </div>
                                        <div>
                                            <h6>{a.Email}</h6>
                                        </div>
                                        <div className="d_flex">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <address className="profile_address">
                                            {a.StreetAddress}<br></br>
                                            {a.district}
                                            </address>
                                        </div>
                                    </div>

                                    <div className="plumber_booking">
                                        <button className="plumber_booking_btn" onClick={() => nav('/plumber_profile')}>View more</button>
                                    </div>
                                </div>

                            </div>)) : */}
                        {filter.length === 0 ? <h1>no data is found</h1> :filter.map((a) => (


                            <div className="plumber_profile" key={a.id}>

                                <div className="plumber_profile_inner">
                                    <div className="plumber_image_size">
                                        <img className="plumber_img" src={main_1} alt="plumber_man"></img>
                                    </div>

                                    <div className="plumber_bio">
                                        <div>
                                            <h4>{a.FirstName} {a.LastName}</h4>
                                            <h5><b><u>{a.WorkType}</u></b></h5>
                                        </div>
                                        <div className="d_flex">
                                            <h5>Ratings</h5>
                                            <img className="ratings_image" src={rating} alt="plumber_man"></img>
                                        </div>
                                        <div>
                                            <h6>{a.Email}</h6>
                                        </div>
                                        <div className="d_flex">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <address className="profile_address">
                                                {a.StreetAddress}
                                                <br></br>
                                                {a.district}
                                            </address>
                                        </div>
                                    </div>

                                    <div className="plumber_booking">
                                        <button className="plumber_booking_btn btn btn-primary " onClick={() => nav('/plumber_profile')}>View more</button>
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