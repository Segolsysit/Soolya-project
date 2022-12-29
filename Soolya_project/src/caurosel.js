import './caurosel.css';
import logo from "./images/logo.png";
import slider_1 from "./images/slider-1.png";
import slider_2 from "./images/slider-2.jpg";
import slider_3 from "./images/slider-3.jpg";
import slider_4 from "./images/slider-4.jpg";
import carousel_slide_1 from "./images/carousel_slider_1.jpg";

import owl_1 from "./images/1.jpg";
import owl_2 from "./images/2.jpg";
import owl_3 from "./images/3.jpg";
import video_line from "./video/demo-video.mp4";
import payment_method from "./images/payment.png";
import car_service from "./images/car-service.png";
import Slider from 'react-slick';
// import carousel_slide_2 from "./images/two.jpg";
// react-slick........
// import React, { Component } from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from './data';
import imgGirl from './images/1.jpg';
import { useState } from 'react';

function Caurosel() {
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    const handleErrorImage = (data) => {
      setDefaultImage((prev) => ({
        ...prev,
        [data.target.alt]: data.target.alt,
        linkDefault: imgGirl,
      }));
    };
  
    // const scrollUpButton = document.querySelector("scroll_up"); 

    // scrollUpButton.addEventListener("click",function() {
    //    window.scrollTo(0,0);
    // });

    return (
        <div>
            <div>
                <div className="header">
                    <div className="header_content">
                        <div className="header_content_div">
                            <img className="company_logo" src={logo} alt="Company-logo"></img>
                        </div>
                        <div className="header_content_div">
                            <ul className="header_menu">
                                <li className="header_list"><a className="header_link" href="_self">Home</a></li>
                                <li className="header_list"><a className="header_link" href="self">Categories</a></li>
                                <li className="header_list"><a className="header_link" href="self">Services</a></li>
                            </ul>
                        </div>
                        <div className="header_content_div">
                            <form>
                                <input id="search_bar" type="text" placeholder="Search for services"></input>
                                <button className="search_button"><i id="search_icon" className="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                        </div>
                        <div className="header_content_div">
                           <div className="service_man">
                            {/* <a className="service_man__register" href="self">Become a Service man</a> */}
                            <button className="service_man__register">Become a Service man</button>

                        </div>
                        </div>
                        <div className="header_content_div">
                        <div className="header_border_right">

                        </div>
                        </div>
                        <div className="header_content_div">
                            <ul className="header_unorder">

                                <li className="header_list"><a href="self"><i id="header_icon" className="fa-solid fa-bell"></i></a></li>
                                <li className="header_list"><a href="self"><i id="header_icon" className="fa-solid fa-crown"></i></a></li>
                                <li className="header_list"><a href="self"><i id="header_icon" className="fa-solid fa-cart-plus"></i></a></li>
                               {/* offcanvas list */}
                                <button className="btn btn-primary" id="off_canvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <li className="header_list"><i id="header_icon" className="fa-solid fa-list-ul"></i></li>
                                </button> 
                                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header">
                                        {/* <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                                        <h4>Menu</h4>
                                    </div>
                                    <div className="offcanvas-body">
                                        <button className="offcanvas_menu_btn">
                                            <div className="offcanvas_menu_item">
                                            <div className="offcanvas_menu_item_img_bor">
                                                <i className="fa-regular fa-user"></i>
                                            </div>
                                            <div className="offcanvas_menu_item_name">
                                                <h6>Profile</h6>
                                            </div>
                                            </div>
                                        </button>
                                        <button className="offcanvas_menu_btn">
                                            <div className="offcanvas_menu_item">
                                            <div className="offcanvas_menu_item_img">
                                                <i className="fa-solid fa-comment-dots"></i>
                                            </div>
                                            <div className="offcanvas_menu_item_name">
                                                <h6>Inbox</h6>
                                            </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div className="header_content_div">
                            <button type="button" className="sign_in__buttton"><i id="sign_icon" className="fa-solid fa-arrow-right-to-bracket"></i>Sign In</button>
                        </div>
                    </div>


                </div>
            </div>

            <div className="sub_body">
                <div>
                    <div className="sub_header">
                        <ul className="sub_header__unorder">
                            <li className="sub_header__list"><a className="sub_header__link" href="_slef">Plumbing</a></li>
                            <li className="sub_header__list"><a className="sub_header__link" href="_slef">Electrician</a></li>
                            <li className="sub_header__list"><a className="sub_header__link" href="_slef">Home Appliances</a></li>
                            <li className="sub_header__list"><a className="sub_header__link" href="_slef">Installations</a></li>
                            <li className="sub_header__list"><a className="sub_header__link" href="_slef">Home services</a></li>
                            <li className="sub_header__list"><a className="sub_header__link" href="_slef">AC repair services</a></li>
                            <li className="sub_header__list"><a className="sub_header__link" href="_slef">& more</a></li>
                        </ul>
                    </div>
                </div>
                {/* header finished */}
                <div>
                    <div className="carousel_div">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={slider_1} id="carousel_image" className="d-block w-100" alt="slider-1"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src={slider_2} id="carousel_image" className="d-block w-100" alt="slider-2"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src={slider_3} id="carousel_image" className="d-block w-100" alt="slider-3"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src={slider_4} id="carousel_image" className="d-block w-100" alt="slider-3"></img>
                                </div>
                            </div>
                            <div>
                                <span className="carousel-left-icon" data-bs-target="#carouselExampleControls" data-bs-slide="prev"><i id="carousel_right_icon" className="fa-solid fa-chevron-left"></i></span>
                                <span className="carousel-right-icon" data-bs-target="#carouselExampleControls" data-bs-slide="next"><i id="carousel_left_icon" className="fa-solid fa-chevron-right"></i></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* First carousel finished */}

                <div>
                    {/* <div>
                    <h3>Top categories to choose from</h3>
                </div> */}
                    <div className="advertise_phase">
                        <div className="advertise_1">
                            <img src={carousel_slide_1} alt="advert-1" className="advertise_image"></img>
                            <div className="advertise_cont">
                                <div className="advertise_cont_head">
                                    <h3>Best services</h3>
                                </div>
                                <button className="advertise_button">View all</button>
                                
                            </div>
                        
                        </div>
                        <div className="App">
                            <Slider {...settings}>
                                {dataDigitalBestSeller.map((item) => (
                                <div className="card">
                                    <div className="card-top">
                                    <img
                                        src={
                                        defaultImage[item.title] === item.title
                                            ? defaultImage.linkDefault
                                            : item.linkImg
                                        }
                                        alt={item.title}
                                        onError={handleErrorImage}
                                    />
                                    <h1>{item.title}</h1>
                                    </div>
                                    <div className="card-bottom">
                                    <h3>{item.price}</h3>
                                    <span className="category">{item.category}</span>
                                    </div>
                                </div>
                                ))}
                            </Slider>
    </div>

                        <div className="advertise_2">


                        </div>
                        {/* <div className="advertise_3">
                     <img src={carousel_slide_2} alt="advert-2" id="advertise_image"></img>
                    </div> */}

                    </div>
                </div>

                {/* service category div */}


                <div className="scroll_div">
                    <button className="scroll_up">
                        <i id="scroll_up_icon" className="fa-solid fa-arrow-up"></i>
                    </button>
                </div>


                <div className="service_category">
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
                </div>


                <div className="video_line">
                    <div className="one">
                        <div className="video_line_border">
                            <div id="border">
                                <video controls autoplay muted className="frame_video">
                                    <source src={video_line} type="video/mp4"></source>
                                </video>
                            </div>
                        </div>
                    </div>
                    <div id="video_line_right_side">
                        <div>
                            <h2>Reasons to  <span className="title_color">Choose Us</span></h2>
                            <p id="video_line_para">
                                Behind our commitment to excellence are
                                few key attributes that define who we are and what makes us different from any other.
                            </p>
                        </div>
                        <div className="video_line_sub_para">
                            <div>
                                <h4><i className="fa-solid fa-leaf"></i> Top-Rated Company</h4>
                                <p>We hold a successful track record of satisfying our customers and getting back their bond money.</p>
                            </div>
                            <div>
                                <h4><i className="fa-solid fa-leaf"></i> Superior Quality</h4>
                                <p>We use the most excellent quality tools and equipment to get all the dust and dirt out of your premises.</p>
                            </div>
                            <div>
                                <h4><i className="fa-solid fa-leaf"></i> Eco-Friendly Products</h4>
                                <p>We use biodegradable products which do not harm the environment, pets or humans in any way.</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* faq question accordion */}

                <div className="faq">

                    <h4>FAQs</h4>
                    <div className="faq-body">
                        <ul id="unorder">
                            <li id="list">
                                <label for="question-one">
                                    <p>What are the most important steps involved in unclogging blocked pipes?</p>
                                    <span>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </label>
                                <input type="radio" name="accortion" id="question-one"></input>
                                <div className="faq-content">
                                    <p>
                                        Blocked pipes are a very common cause of plumbing issues, so it’s necessary for your applicant to be familiar with the most effective solutions. This involves the ability to evaluate each unique circumstance, so not all solutions are best for everyone. Failure to answer this question with confidence could be a sign you have the wrong candidate for the job. The right plumber will be quick to point out both the easy and the hard methods and when to use each.
                                    </p>
                                </div>
                            </li>
                            <li id="list">
                                <label for="question-two">
                                    <p>What plumbing tools are essential? Which ones do you bring to every job?</p>
                                    <span>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </label>
                                <input type="radio" name="accortion" id="question-two"></input>
                                <div className="faq-content">
                                    <p>
                                        As is true with any profession, skilled professionals need to have the right tools available and know how to put them to good use.
                                    </p>
                                    <p>
                                        It’s critical the candidate is familiar with the tools they’ll be using, and they should be capable of naming off the primary tools of the trade without any hesitation. It’s also a good idea to have them demonstrate use to ensure they’re not just listing tools from memory.
                                    </p>
                                </div>
                            </li>
                            <li id="list">
                                <label for="question-three">
                                    <p>Are you familiar with the various types of chemical drain cleaners used in plumbing?
                                    </p>
                                    <span>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </label>
                                <input type="radio" name="accortion" id="question-three"></input>
                                <div className="faq-content">
                                    <p>
                                        Chemical drain cleaners are often needed to unclog stubborn blockages, and they’re often a great solution. With so many options available, it’s important your plumbing candidate is able to identify the most viable solution for any situation they face. Be on the lookout for a candidate familiar with caustic, oxidizing and acid drain cleaners and the appropriate application of each type.
                                    </p>
                                </div>
                            </li>
                            <li id="list">
                                <label for="question-four">
                                    <p>Are you familiar with the various health hazards of working in the plumbing industry?</p>
                                    <span>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </label>
                                <input type="radio" name="accortion" id="question-four"></input>
                                <div className="faq-content">
                                    <p>
                                        Nobody wants to become ill or injured due to occupational hazards. As an employer, you need your employees to stay safe and healthy. It’s critical each job candidate is well aware of the various dangers involved in the day of a plumber. All it takes is knowledge to avoid these hazards, and you need a plumber who is aware.
                                    </p>
                                    <p>
                                        For more details,<a href="_self">visit here</a>.
                                    </p>
                                </div>
                            </li>
                            <li id="list">
                                <label for="question-five">
                                    <p>How do I use the service offer coupon code?</p>
                                    <span>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </label>
                                <input type="radio" name="accortion" id="question-five"></input>
                                <div className="faq-content">
                                    <p><span>&bull;</span> Go to ‘Rewards’ at the bottom right corner </p>
                                    <p><span>&bull;</span> Click on ‘My Rewards’ and tap on ‘Have a coupon code?’</p>
                                    <p><span>&bull;</span> Enter your code, tap ‘Apply now'</p>
                                    <p><span>&bull;</span> Enter any contest and enjoy your discount</p>
                                </div>
                            </li>
                            <li id="list">
                                <label for="question-six">
                                    <p> What are some ways customers could avoid bathroom plumbing issues in the future?</p>
                                    <span>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </label>
                                <input type="radio" name="accortion" id="question-six"></input>
                                <div className="faq-content">
                                    <p>
                                        A good and trustworthy plumbing company is about more than just money, and you want to establish a notable reputation in the community you serve. It’s also concerned with providing a long-term solution to best ensure customers don’t sustain any serious damage to their home and health. Therefore, it’s important the job candidate is able to identify preventive measures customers can take to avoid future issues. This allows them to educate your customers and help the company gain a good reputation.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* footer */}

                <div className="footer_content">
                    <div className="left_div">
                        <h2>About us</h2>
                        <div className="div_content">
                            <p>
                                From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time.
                            </p>
                            <div className="social_links">
                                <div>
                                    <h4>Social links</h4>
                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                                </div>
                                <div className="border_div">

                                </div>
                                <div className="payment_div">
                                    <h4>We accept</h4>
                                    <img src={payment_method} alt="payment"></img>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="center_div">
                        <h2>Address</h2>
                        <div className="div_content">
                            <div className="place">
                                <i className="fa-solid fa-location-dot"></i>
                                <span>Rangampalayam,Erode</span>
                            </div>
                            <div className="phone">
                                <i className="fa-solid fa-phone"></i>
                                <span>+91-7674872834</span>
                            </div>
                            <div className="email">
                                <i className="fa-solid fa-envelope"></i>
                                <span>abc@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="right_div">
                        <h2>Contact us</h2>

                        <div>
                            <div className="contact_us_head">Email *</div>
                            <input className="email_box" type="email" required></input>
                        </div>
                        <div>
                            <div className="contact_us_head">Message *</div>
                            <textarea row="3" col="20">
                            </textarea>
                        </div>
                        <div>
                            <button type="submit" className="footer_button">
                                send
                            </button>
                        </div>

                    </div>
                </div>

                <div className="policy">
                    <ul>
                        <li>
                            <a href="_self">Privacy Policy</a>
                        </li>
                        <li>
                            <span>|</span>
                        </li>
                        <li>
                            <a href="_self">Terms & Conditions</a>
                        </li>
                    </ul>
                </div>
                <div className="footer">
                    <p>
                        All rights reserved By @SoolyaLtd
                    </p>
                </div>


                <div className="wrapper">
                    <div className="item">
                        <img className="item_image" src={owl_1} alt="one"></img>
                    </div>
                    <div className="item">
                        <img className="item_image" src={owl_1} alt="one"></img>
                    </div>
                    <div className="item">
                        <img className="item_image" src={owl_1} alt="one"></img>
                    </div>
                    <div className="item">
                        <img className="item_image" src={owl_1} alt="one"></img>
                    </div>
                    <div className="item">
                        <img className="item_image" src={owl_1} alt="one"></img>
                    </div>
                    <div className="item">
                        <img className="item_image" src={owl_1} alt="one"></img>
                    </div>
                    <div className="item">
                        <img className="item_image" src={owl_1} alt="one"></img>
                    </div>
                    <div className="item">
                        <img className="item_image" src={owl_1} alt="one"></img>
                    </div>
                    <div className="item">
                        <img className="item_image" src={owl_1} alt="one"></img>
                    </div>
                    <div className="item">
                        <img className="item_image" src={owl_1} alt="one"></img>
                    </div>
                    <div className="item">
                        <img className="item_image" src={owl_1} alt="one"></img>
                    </div>
                </div>


                <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img src={car_service} alt="two"></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>



                {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="row">
                    <div className="col-lg-4 small-header">
                    <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img src={car_service} alt="two"></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>

                    </div>
                    <div className="col-lg-4 small-header">
                    <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img src={car_service} alt="two"></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>
             
                    </div>
                    <div className="col-lg-4 small-header">
                    <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img src={car_service} alt="two"></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>
                    </div>
                </div>

            </div>
            <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-4 small-header">
                  <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img src={car_service} alt="two"></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>

                    </div>
                    <div className="col-lg-4 small-header">
                    <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img src={car_service} alt="two"></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>

                    </div>
                    <div className="col-lg-4 small-header">
                    <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img src={car_service} alt="two"></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>

                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="row">
                    <div className="col-lg-4 small-header">
                    <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img src={car_service} alt="two"></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>

                    </div>
                    <div className="col-lg-4 small-header">
                    <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img src={car_service} alt="two"></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>

                    </div>
                    <div className="col-lg-4 small-header">
                    <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img src={car_service} alt="two"></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>

                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
                </div> */}


           {/* offcanvas list here */}

         

            </div>
        </div>
    );
}

export default Caurosel;
