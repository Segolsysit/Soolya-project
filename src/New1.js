import React, { Component } from "react";
import Slider from "react-slick";
import "./home.css";
import car_service from "./images/car-service.png";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
          
        <h2>Swipe To Slide</h2>
        <Slider {...settings}>
          <div>
          <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img alt="demo"src={car_service}></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>
          </div>
          <div>
          <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img alt="demo"src={car_service}></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>
          </div>
          <div>
          <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img alt="demo"src={car_service}></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>
          </div>
          <div>
          <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img alt="demo"src={car_service}></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>
          </div>
          <div>
          <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img alt="demo"src={car_service}></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>
          </div>
          <div>
          <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img alt="demo"src={car_service}></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>
          </div>
          <div>
          <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img alt="demo"src={car_service}></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>
          </div>
          <div>
          <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img alt="demo"src={car_service}></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>
          </div>
          <div>
          <div className="carousel_box">
                    <a href="_self">
                        <div className="carosel_box_image">
                            <img alt="demo"src={car_service}></img>
                        </div>
                        <div className="carousel_box_content">
                            <h3>Car service</h3>
                            <h2>From ₹200</h2>
                            <p>Book now</p>
                        </div>
                    </a>
                </div>
          </div>
        </Slider>



      </div>
    );
  }
}