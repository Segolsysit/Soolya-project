import './home.css'
// import plumbing_offer from "./images/plumbing-offer.png"
// import slider_1 from "./images/slider-1.png";
// import slider_2 from "./images/slider-2.jpg";
// import slider_3 from "./images/slider-3.jpg";
// import slider_4 from "./images/slider-4.jpg";
import main_1 from "./images/main_1.jpg";
import main_2 from "./images/main_2.jpg";
import main_3 from "./images/main_3.jpg";
import main_4 from "./images/main_4.jpg";
import carousel_slide_1 from "./images/two.jpg";
import carousel_slide_2 from "./images/carousel_slider_2.jpg";
// import car_service from "./images/car-service.png";
import car_service from "./images/car-service-demo.png";
// import electrician from "./images/electrician.png";
import electrician from "./images/electrician-demo.png";
// import home_clean from "./images/home-clean.png";
import home_clean from "./images/home-clean-demo.png";
import electrician_work from "./images/plumbing-demo.png";
// import home_repair from "./images/home-repair.png";
import home_repair from "./images/home-repair-demo.png";
// import roofing from "./images/roofing.png";
import roofing from "./images/roofing-demo.png";
// import repair_work from "./images/repair-work.png";
import repair_work from "./images/repair-work-demo.png";
// import car_wash from "./images/car-wash.png";
import car_wash from "./images/car-wash-demo.png";
// import ac_installation from "./images/ac-installation.png";
import ac_installation from "./images/ac-installation-demo.png";


// import playstore from "./images/playstore.png";
// import appstore from "./images/appstore.png";
// import phone_image from "./images/download_phone_img.png";


// import carousel_slide_2 from "./images/two.jpg";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import owl_1 from "./images/1.jpg";
// import owl_2 from "./images/2.jpg";
// import owl_3 from "./images/3.jpg";
import frame_line from "./images/frame_img.png";
import Slider from 'react-slick';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  AOS  from 'aos';
import "aos/dist/aos.css";
import Header from './header';



function Home(props) {


    useEffect(()=>{
        AOS.init({
            duration:1000
        })
    },[])
    
    // scroll up btn
    const scrollToUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
    // scroll up btn finished 


    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        autoplay:true,
        speed:1000,
        arrows: false,
        dots: true,
        swipeToSlide: true
       
        // afterChange: function (index) {
        //     console.log(
        //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //     );
        // }
    };


    const reverseSettings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        slidesToScroll:-1,
        autoplay:true,
        speed:1000,
        arrows: false,
        dots: true,
        swipeToSlide: true
       
        }
  

    //search option

    const [search, setSearch] = useState("");
    const [district, setDistrict] = useState("");
    const [show, setShow] = useState(false);

    //    let check =  "plumber" ||  "electrician";

    const nav = useNavigate();
    function chg(e) {
        // console.log(e.target.value);
        setSearch(e.target.value);
        if (e.target.value === "") {
            setShow(false)
        } else {
            setShow(true);

        }

    }
    function dist(e) {
        setDistrict(e.target.value)
    }
    function btn() {
        if (search === "plumbing" || (district === "erode") || (district === "Coimbatore")) {
            localStorage.setItem("search", search)
            localStorage.setItem("dist", district)
            // props.pass(search)
            // props.array.map((ar)=>{
                nav('/vendors_list')

            // })
        }else if(search === "electrician" || (district === "erode") || (district === "Coimbatore")){
            localStorage.setItem("search", search)
            localStorage.setItem("dist", district)
        //     // props.pass(search)
            nav('/vendors_list')
        }
        // else {

        // return alert("search the correct word....");
        // const modal = document.getElementById("staticBackdrop");

        // console.log(modal);

        // return modal;
        // }
    }

    

    // function model(){
    //     return "modal";
    // if(search === "plumber" || search ===  "electrician"){
    // // search.length > 0 ? ""  : "modal"{
    //     return "";
    // }else if(search === ""){
    //     return "modal"
    // }
    // }


    let modalName;
    if (search.length === 0) {

// }
// if(search.length > 0 || search !== "plumber" || search !== "electrician"){
    modalName ="type any"
}else {
    modalName="search the correct word...."
    // setSearch("")
  
}
// else{
//     modalName = null;
// }

    let filter;
    // if(search.length > 0){

    filter = props.array.filter((arr) => {
        return arr.type.match(search);
    })
    // }

    return (
        <div>

    <Header></Header>

            <div class="sub_body">
                <div>
                    <div className="sub_header">
                        <ul className="sub_header__unorder">
                            <li className="sub_header__list"><NavLink className="sub_header__link" to="/vendors_list" onClick={() => { localStorage.setItem("search", "plumbing"); localStorage.setItem("dist", '') }}>Plumbing</NavLink></li>
                            <li className="sub_header__list"><NavLink className="sub_header__link" to="/vendors_list" onClick={() => { localStorage.setItem("search", "electrician"); localStorage.setItem("dist", '') }}>Electrician</NavLink></li>
                            <li className="sub_header__list"><a className="sub_header__link" href="_slef">Home Appliances</a></li>
                            <li className="sub_header__list"><a className="sub_header__link" href="_slef">Installations</a></li>
                            <li className="sub_header__list"><a className="sub_header__link" href="_slef">Home services</a></li>
                            <li className="sub_header__list"><NavLink className="sub_header__link" to="/category">AC repair services</NavLink></li>
                            <li className="sub_header__list"><NavLink className="sub_header__link" to="/emp-profile">Employee Profiles</NavLink></li>
                        </ul>
                    </div>
                </div>
                {/* header finished */}
                <div>
                    <div className="carousel_div">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-interval="1000" data-bs-pause="none" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item">
                                    <img src={main_1} id="carousel_image" class="d-block w-100" alt="slider-1"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src={main_2} id="carousel_image" class="d-block w-100" alt="slider-2"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src={main_3} id="carousel_image" class="d-block w-100" alt="slider-3"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src={main_4} id="carousel_image" class="d-block w-100" alt="slider-3"></img>
                                </div>
                            </div>
                            {/* <div>
                        <span className="carousel-left-icon" data-bs-target="#carouselExampleControls" data-bs-slide="prev"><i id="carousel_right_icon" class="fa-solid fa-chevron-left"></i></span>
                        <span className="carousel-right-icon" data-bs-target="#carouselExampleControls" data-bs-slide="next"><i id="carousel_left_icon" class="fa-solid fa-chevron-right"></i></span>
                    </div> */}
                        </div>
                    </div>


                    <div className="carousel_z_index_div " >
                        <div className="caruosel_z_index">
                            <div >
                                <h2 className="z_index_title">World's Largest NoBrokerage Handyman Site</h2>
                            </div>
                            <div id="gap">
                                <span className="z_index_offer">
                                    {/* <img className="z_index_offer_img" src={plumbing_offer}></img> */}
                                    <h6 className="z_index_offer_cont">Plumbing work | 50% off</h6>
                                </span>
                            </div>
                            <div className="z_index_search" id="gap">
                                <div className="select_div">
                                    <select className="locality" onChange={dist} >
                                        <option selected disabled>Select District</option>
                                        <option value="erode">Erode</option>
                                        <option value="Coimbatore">Coimbatore</option>
                                    </select>
                                </div>
                                <div className="search_div">
                                    <input id="search" className={search.length === 0 ? "locality_search" :"locality_search_active" } type="search" placeholder="search your service category" onChange={chg} value={search}></input>
                                </div>
                                <div className="button_div">
                                    <button className="locality_search_button" onClick={btn} data-bs-toggle={(search === "electrician" || search === "plumbing" || district.length > 0 ? "" : "modal")} data-bs-target="#staticBackdrop"><i id="Z_index_search_icon" class="fa-solid fa-magnifying-glass" ></i>Search</button>
                                </div>

                            </div>
                            {show ? <label for="search" className='suggest'>

                                {filter.map((arr) => (
                                    //  <NavLink to="/plumbing"
                                    <div className='sugg' onClick={() => { setSearch(arr.type); setShow(false) }}>
                                        <span >{arr.type}</span>

                                    </div>
                                ))}

                                {/* // </NavLink> */}
                                {/* <NavLink to="/plumbing"><div className='sugg'><p>plumber</p></div></NavLink>
                            <p><NavLink to="/plumbing">electrician</NavLink></p> */}
                            </label> : <div></div>}

                        </div>
                    </div>



                </div>

                {/* First carousel finished */}

                {/* one ad */}

                <div className="owl_carou_1">
                    <div className="advertise_phase" class="row">
                        <div className="advertise_1" class="column left">
                            <img src={carousel_slide_1} alt="advert-1" className="advertise_image"></img>
                            <div className="advertise_cont">
                                <div className="advertise_cont_head">
                                    <h3>Best services</h3>
                                </div>
                                <button className="advertise_button">View all</button>
                            </div>
                        </div>
                        <div className="advertise_2" class="column right">
                            <div>
                                <Slider {...settings}>
                                    <div className="advertise_2_carousel">
                                        <div className="carousel_box" >

                                            <div className="carosel_box_image">
                                                <img className="iconic_image" alt="demo" src={car_service}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Car service</h5>
                                                <h3>From ₹900</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <NavLink to="/vendors_list" onClick={() => { localStorage.setItem("search", "electrician"); localStorage.setItem("dist", '') }}> <img alt="demo" src={electrician}></img></NavLink>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Electrician</h5>
                                                <h3>From ₹200</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={repair_work}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Car Repair</h5>
                                                <h3>From ₹600</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={ac_installation}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Ac Installations</h5>
                                                <h3>From ₹999</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={roofing}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Roofing</h5>
                                                <h3>From ₹450</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <NavLink to="/vendors_list" onClick={() => { localStorage.setItem("search", "plumbing"); localStorage.setItem("dist", '') }}> <img alt="demo" src={electrician}></img></NavLink>
                                                {/* <img alt="demo" src={electrician_work}></img> */}
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Plumbing</h5>
                                                <h3>From ₹150</h3>
                                                <button onClick={() => nav('/plumber_profile')}>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={home_clean}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Repair Work</h5>
                                                <h3>From ₹799</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={car_wash}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Car Wash</h5>
                                                <h3>From ₹99</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={home_repair}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Services</h5>
                                                <h3>From ₹199</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        {/* <div className="advertise_3" class="column right">
                    <img src={owl_1} alt="advert-2" className="advertise_image"></img>
                </div> */}
                    </div>
                </div>

                {/* two ad */}

                <div className="scroll_div">
                    <button className="scroll_up" onClick={scrollToUp}>
                        <i id="scroll_up_icon" class="fa-solid fa-arrow-up"></i>
                    </button>
                </div>





                <div className="owl_carou_2">
                    <div className="advertise_phase" class="row">
                        <div className="advertise_2" class="column right">
                            <div className="advertise_2_carousel">
                                <Slider {...reverseSettings}>
                                    <div>
                                        <div className="carousel_box" >

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={car_service}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Car service</h5>
                                                <h3>From ₹900</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={electrician}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Electrician</h5>
                                                <h3>From ₹200</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={repair_work}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Car Repair</h5>
                                                <h3>From ₹600</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={ac_installation}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Ac Installations</h5>
                                                <h3>From ₹999</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={roofing}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Roofing</h5>
                                                <h3>From ₹450</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={electrician_work}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Plumbing</h5>
                                                <h3>From ₹150</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={home_clean}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Repair Work</h5>
                                                <h3>From ₹799</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={car_wash}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Car Wash</h5>
                                                <h3>From ₹99</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="carousel_box">

                                            <div className="carosel_box_image">
                                                <img alt="demo" src={home_repair}></img>
                                            </div>
                                            <div className="carousel_box_content">
                                                <h5>Services</h5>
                                                <h3>From ₹199</h3>
                                                <button>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="advertise_1" class="column left">
                            <img src={carousel_slide_2} alt="advert-1" className="advertise_image"></img>
                            <div className="advertise_cont">
                                <div className="advertise_cont_head">
                                    <h3>Best services</h3>
                                </div>
                                <button className="advertise_button">View all</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* service category div */}





                {/* <div className="service_category">
            <div className="row_title"><h3>There's a service for <span className="title_color">everyone</span></h3></div>
            <div className="row_line">
                <div className="row_line_col">
                    <div className="col_img">
                        <img id="row_line_image" src={owl_1} alt="owl-1"></img>
                    </div>
                    <div className="col_cont">
                        <h4>Plumbing</h4>
                        <p>From Bikes and Autos to Prime Sedans and Prime SUVs,
                            you will find a ride in your budget at your convenience any time.</p>
                    </div>
                </div>
                <div className="row_line_col">
                    <div className="col_img">
                        <img id="row_line_image" src={owl_2} alt="owl-1"></img>
                    </div>
                    <div className="col_cont">
                        <h4>Electrician</h4>
                        <p>From Bikes and Autos to Prime Sedans and Prime SUVs,
                            you will find a ride in your budget at your convenience any time.</p>
                    </div>
                </div>
                <div className="row_line_col">
                    <div className="col_img">
                        <img id="row_line_image" src={owl_3} alt="owl-1"></img>
                    </div>
                    <div className="col_cont">
                        <h4>Refitting</h4>
                        <p>From Bikes and Autos to Prime Sedans and Prime SUVs,
                            you will find a ride in your budget at your convenience any time.</p>
                    </div>
                </div>

            </div>
        </div> */}


                <div className="frame_line">
                    <div className="one">
                        <div className="frame_line_border">
                            <div id="border">
                                <img className="frame_img_size" src={frame_line} alt="you"></img>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" id="frame_line_right_side">
                        <div>
                            <h2>Reasons to  <span className="title_color">Choose Us</span></h2>
                            <p id="frame_line_para">
                                Behind our commitment to excellence are
                                few key attributes that define who we are and what makes us different from any other.
                                Behind our commitment to excellence are
                                few key attributes that define who we are and what makes us different from any other.
                            </p>
                        </div>
                        <div className="frame_line_sub_para">
                            <div>
                                <h4><i class="fa-solid fa-leaf"></i> Top-Rated Company</h4>
                                <p>We hold a successful track record of satisfying our customers and getting back
                                    few key attributes that define who we are and what makes us different from any other their bond money.</p>
                            </div>
                            <div>
                                <h4><i class="fa-solid fa-leaf"></i> Superior Quality</h4>
                                <p>We use the most excellent quality tools and equipment to get all the
                                    few key attributes that define who we are and what makes us different from any other dust and dirt out of your premises.</p>
                            </div>
                            <div>
                                <h4><i class="fa-solid fa-leaf"></i> Eco-Friendly Products</h4>
                                <p>We use biodegradable products which do not harm the environment,
                                    few key attributes that define who we are and what makes us different from any other pets or humans in any way.</p>
                            </div>
                        </div>
                    </div>
                </div>



                         {/* download div */}

                {/* <div className="download_div">
                    <div className="download_inline">

                        <div data-aos="fade-right" className="download_inline_bio">
                            <div>
                                <h2>Download our app</h2>
                            </div>
                            <div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                            </div>
                            <div>
                                <button className="download_btn"><img src={playstore} alt="download-1"></img></button>
                                <button className="download_btn"><img src={appstore} alt="download-2"></img></button>

                            </div>
                        </div>
                        <div>
                            <img className="download_img" src={phone_image} alt="phone_photo"></img>
                        </div>

                    </div>
                </div> */}




                {/*             
<button type="button" class="btn btn-primary" >
  Launch static backdrop modal
</button> */}

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" id="one_w">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Error</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                {modalName}
                            </div>
                            <div class="modal-footer">
                                {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=> {setSearch(""); setShow(false)}}>Understood</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
export default Home;