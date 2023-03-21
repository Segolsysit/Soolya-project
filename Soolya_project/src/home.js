import './home.css'
// import plumbing_offer from "./images/plumbing-offer.png"
// import slider_1 from "./images/slider-1.png";
// import slider_2 from "./images/slider-2.jpg";
// import slider_3 from "./images/slider-3.jpg";
// import slider_4 from "./images/slider-4.jpg";
import main_1 from "./images/elect1.jpg";
import main_2 from "./images/main_2.jpg";
import main_3 from "./images/elect.jpg";
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
import Header from './header';
import Footer from './footer';

import axios from "axios";
// import video_back from "./videos/video_background.mp4";





function Home(props) {

    const [getData, setgetData] = useState([]);
    const [getData_sub, setgetDataSub] = useState([]);
    const [categorysearch,setCategorysearch] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/api/fetch_items").then((res) => {
            setgetData(res.data);
        })
        axios.get("http://localhost:3001/sub_api/new_fetch_items_limits").then((res) => {
            setgetDataSub(res.data);
        })
        axios.get("http://localhost:3001/api/fetch_items").then((res) => {
            setCategorysearch(res.data);
        })
        if(search.length >0){
            setShow(true)
        }

    }, [])

    const localpath = "http://localhost:3001/";

    // scroll up btn
    const scrollToUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
    // scroll up btn finished 

    // const res = window.matchMedia("(max-width:940)");

    // function responsive(res) {
    //     if(res.matches){

    //     }
    // }

    const set = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };


    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        autoplay: true,
        speed: 1000,
        arrows: false,
        dots: false,
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
        slidesToScroll: -1,
        autoplay: true,
        speed: 1000,
        arrows: false,
        dots: false,
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
        // if (e.target.value === "") {
        //     setShow(false)
        // } else {
        //     setShow(true);

        // }


    }
   
    function dist(e) {
        setDistrict(e.target.value)
    }
    function btn() {

        nav("/category")
        // if (search === "plumbing" || (district === "erode") || (district === "Coimbatore")) {
        //     localStorage.setItem("search", search)
        //     localStorage.setItem("dist", district)
        //     // props.pass(search)
        //     // props.array.map((ar)=>{
        //     nav('/vendors_list')

        //     // })
        // } else if (search === "electrician" || (district === "erode") || (district === "Coimbatore")) {
        //     localStorage.setItem("search", search)
        //     localStorage.setItem("dist", district)
        //     //     // props.pass(search)
        //     nav('/vendors_list')
        // }
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
        modalName = "type any"
    } else {
        modalName = "search the correct word...."
        // setSearch("")

    }
    // else{
    //     modalName = null;
    // }

    let filter;
    // if(search.length > 0){

    filter =categorysearch.filter((arr) => {
        return arr.catagorySetup.toLowerCase().match(search.toLowerCase());
    })
    // }


function cat(vv){
    localStorage.setItem("title",vv)
    nav("/category")
}


    return (
        <div>

            {/* header component ----INCLUDED --- */}

            <Header></Header>

            {/* sub-header ---  START--- */}

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
                            <li className="sub_header__list"><NavLink className="sub_header__link" to="/plumber_profile">Employee Profiles</NavLink></li>
                        </ul>
                    </div>
                </div>

                {/* sub-header ---  END--- */}

                {/* carousel and z-index div --- START ----*/}

                <div>
                    <div className="carousel_div">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-pause="none" data-bs-ride="carousel" >
                            <Slider {...set}>
                                <div>
                                    <img src={main_4} id="carousel_image" class="d-block w-100" alt="slider-1"></img>
                                </div>
                                <div>
                                    <img src={main_3} id="carousel_image_mob" class="d-block w-100" alt="slider-1"></img>
                                </div>
                                <div>
                                    <img src={main_2} id="carousel_image" class="d-block w-100" alt="slider-1"></img>
                                </div>
                                <div>
                                    <img src={main_1} id="carousel_image_mob" class="d-block w-100" alt="slider-1"></img>
                                </div>
                            </Slider>

                            <div className="carousel_z_index_div " >
                                <div className="caruosel_z_index">
                                    <div className="caruosel_z_index_title">
                                        <h1 className="z_index_title">World's Largest NoBrokerage Handyman Site</h1>
                                    </div>
                                    <div id="gap">
                                        <span className="z_index_offer">
                                            <h6 className="z_index_offer_cont">Plumbing work | 50% off</h6>
                                        </span>
                                    </div>
                                    <div className="z_index_search" id="gap_last">
                                        <div className="select_div">
                                            <select className="locality" onChange={dist} >
                                                {/* <option className="locality_option" selected disabled>Select District</option> */}
                                                <option className="select_div" selected hidden value="erode">Erode</option>
                                                <option className="select_div" disabled >Upcoming</option>
                                                {/* <option className="locality_option" value="Coimbatore">Coimbatore</option> */}
                                            </select>
                                        </div>
                                        <div className="search_div">
                                            <input id="search" className={search.length === 0 ? "locality_search" : "locality_search_active"} type="search" placeholder="search your service category"  onChange={chg} value={search}></input>
                                        </div>
                                        <div className="button_div">
                                            <button className="locality_search_button" onClick={btn} data-bs-toggle={(search === "electrician" || search === "plumbing" || district.length > 0 ? "" : "modal")} data-bs-target="#staticBackdrop"><i id="Z_index_search_icon" class="fa-solid fa-magnifying-glass" ></i>Search</button>
                                        </div>

                                    </div>
                                    {show ? <label for="search" className='suggest'>

                                        {filter.map((arr) => (
                                            <div className='sugg' onClick={() => { setSearch(arr.catagorySetup); setShow(false) }}>
                                                <span >{arr.catagorySetup}</span>

                                            </div>
                                        ))}


                                    </label> : <div></div>}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div>
                    <div className="carousel_div_mob">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-pause="none" data-bs-ride="carousel" >
                            <Slider {...set}>
                                <div>
                                    <img src={main_4} id="carousel_image_mob" class="d-block w-100" alt="slider-1"></img>
                                </div>
                                <div>
                                    <img src={main_2} id="carousel_image_mob" class="d-block w-100" alt="slider-1"></img>
                                </div>
                                <div>
                                    <img src={main_3} id="carousel_image_mob" class="d-block w-100" alt="slider-1"></img>
                                </div>
                                <div>
                                    <img src={main_1} id="carousel_image_mob" class="d-block w-100" alt="slider-1"></img>
                                </div>
                            </Slider>

                            <div className="carousel_z_index_div_mob " >
                                <div className="caruosel_z_index_mob">
                                    <div className="caruosel_z_index_title_mob">
                                        <h1 className="z_index_title_mob">World's Largest NoBrokerage Handyman Site</h1>
                                    </div>
                                    <div id="gap_mob">
                                        <span className="z_index_offer_mob">
                                            <h6 className="z_index_offer_cont_mob">Plumbing work | 50% off</h6>
                                        </span>
                                    </div>
                                    <div className="z_index_search_mob" id="gap_last_mob">
                                        <div className="select_div_mob">
                                            <select className="locality_mob" onChange={dist} >
                                                {/* <option className="locality_option" selected disabled>Select District</option> */}
                                                <option className="select_div_mob" selected hidden value="erode">Erode</option>
                                                <option className="select_div_mob" disabled >Upcoming</option>
                                                {/* <option className="locality_option" value="Coimbatore">Coimbatore</option> */}
                                            </select>
                                        </div>
                                        <div className="search_div_mob">
                                            <input id="search_mob" className={search.length === 0 ? "locality_search_mob" : "locality_search_active_mob"} type="search" placeholder="search your service category" onChange={chg} value={search}></input>
                                        </div> {show ? <label for="search" className='suggest_mob'>

                                            {filter.map((arr) => (
                                                <div className='sugg_mob' onClick={() => { setSearch(arr.catagorySetup); setShow(false) }}>
                                                    <span >{arr.catagorySetup}</span>

                                                </div>
                                            ))}


                                        </label> : <div></div>}
                                        <div className="button_div_mob">
                                            <button className="locality_search_button_mob" onClick={btn} data-bs-toggle={(search === "electrician" || search === "plumbing" || district.length > 0 ? "" : "modal")} data-bs-target="#staticBackdrop"><i id="Z_index_search_icon" class="fa-solid fa-magnifying-glass" ></i>Search</button>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* carousel and z-index div --- END ---- */}


                {/* owl-carousel one --- START --- */}

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

                    </div>
                </div>

                {/* owl-carousel one --- END --- */}


                {/* MOBILE VIEW DIV */}

                <div className="review_div_mobile">
                    <ul class="nav nav-tabs" id="myTabMobile" role="tablist">
                        <div className="front_category_div">
                            <li class="nav-item" id="first_li" role="presentation">
                                <button class="nav-link-category active" id="home-tab_mobile" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                    Category
                                </button>
                            </li>
                            <li class="nav-item" id="second_li" role="presentation">
                                <button class="nav-link-category" id="profile-tab_mobile" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                    Sub-category
                                </button>
                            </li>
                        </div>
                    </ul>

                    <div class="tab-content"  id="myTabContent_mobile">
                        {/* <div> */}
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab_mobile">
                            <div className="category_div_mobile_overall" id="category_div_mobile_overall">

                                {getData.map((data, index) =>
                                    <div className="category_div_mobile" key={index}>

                                        <button className="category_button_div_mobile" onClick={()=>cat(data.catagorySetup)}>
                                            <div>
                                            <img className="category_img_mobile" src={localpath + data.filename} alt="painting"></img>

                                            </div>
                                            <div>
                                                <h4 className="category_text_mobile">{data.catagorySetup}</h4>
                                            </div>
                                        </button>

                                    </div>
                                )}
                            </div>

                        </div>
                        
                        <div class="tab-pane fade profile" id="profile" role="tabpanel" aria-labelledby="profile-tab_mobile">
                            <div className="sub_category_overall_mob">

                                <div className="sub_category_grid_mob">
                                {getData_sub.map(({ Subcategory, Discription, filename }) =>
                                    <div className="sub_category_overall">

                                        <button className="sub_category_div">
                                            <div className="sub_category_img_div">
                                                <img className="sub_category_img" src={localpath + filename} alt="subCategory_image"></img>
                                            </div>
                                            <div className="sub_category_page_content_div">
                                                <h4>{Subcategory}</h4>
                                                <p className="sub_category_page_content_para">{Discription}</p>

                                            </div>
                                        </button>

                                    </div>
                                )}
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>


                </div>



                {/* scroll div --- START --- */}

                <div className="scroll_div">
                    <button className="scroll_up" onClick={scrollToUp}>
                        <i id="scroll_up_icon" class="fa-solid fa-arrow-up"></i>
                    </button>
                </div>

                {/* scroll div --- END --- */}

                {/* owl-carousel two --- START --- */}

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
                                    <h3>Best</h3>
                                </div>
                                <button className="advertise_button">View all</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* owl-carousel two --- end --- */}


                {/* frame line div --- START --- */}

                <div className="frame_line">
                    <div className="one">
                        <img className="frame_img_size" src={frame_line} alt="you"></img>
                    </div>
                    <div id="frame_line_right_side">
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

                {/* frame line div --- END --- */}


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
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => { setSearch(""); setShow(false) }}>Understood</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>


            {/* footer content --- INCLUDED ---  */}

            <Footer></Footer>

        </div>
    )
}
export default Home;