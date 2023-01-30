import "../css_files/category.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import SubCategory from "./subCategory";
import { useState } from "react";

function Category() {

    const settings = {
        className: "center",
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 8,
        arrows: false,
        swipeToSlide: true
        
        
    }

    let category = [
        {
            img: "/images/plumber_category.png",
            text: "Plumbing"
        },
        {
            img: "/images/plumber_category.png",
            text: "Electricain"
        },
        {
            img: "/images/plumber_category.png",
            text: "Plumbing"
        },
        {
            img: "/images/plumber_category.png",
            text: "Plumbing"
        },
        {
            img: "/images/plumber_category.png",
            text: "Plumbing"
        },
        {
            img: "/images/plumber_category.png",
            text: "Plumbing"
        },
        {
            img: "/images/plumber_category.png",
            text: "Plumbing"
        },
        {
            img: "/images/plumber_category.png",
            text: "Plumbing"
        },
        {
            img: "/images/plumber_category.png",
            text: "Plumbing"
        }
        
    ];

    const [active, setActive] = useState(false);


    return (
        <div>

            <div className="category_page">


             <Slider {...settings}>

                {category.map(({ img, text }) =>
                <div className="category_div">
                    <button className="category_button_div" onClick={()=>{setActive(true)}}>

                        <div className="g">
                            <img className="category_img" src={img} alt="painting"></img>
                        </div>
                        <div>
                            <h5 className="category_text">{text}</h5>
                        </div>
                    </button>
                </div>
                )}
            
                
          
            </Slider>


            {active?<SubCategory></SubCategory>:false}


            </div>

        </div>
    )
}

export default Category;