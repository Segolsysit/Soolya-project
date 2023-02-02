import "../css_files/category.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
// import SubCategory from "./subCategory";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header";

function Category() {

    let nav = useNavigate();

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
            text: "Electrician"
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
            text: "Electrician"
        },
        {
            img: "/images/plumber_category.png",
            text: "Plumbing"
        },
        {
            img: "/images/plumber_category.png",
            text: "Electrician"
        },
        {
            img: "/images/plumber_category.png",
            text: "Plumbing"
        },
        {
            img: "/images/plumber_category.png",
            text: "Electrician"
        },
        {
            img: "/images/plumber_category.png",
            text: "wiring"
        }
        
    ];

    const [active, setActive] = useState(false);
    let subCategory = [
        {
           img:"/images/1.jpg",
           title:"electric Service",
           type:"Electrician",
           para:"From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time."
        },
        {
            img:"/images/1.jpg",
            title:"electrical work",
           type:"Electrician",
            para:"From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time."
        },
        {
            img:"/images/1.jpg",
           type:"Plumbing",
           title:"plumbing work",
            para:"From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time."
        },
        {
            img:"/images/1.jpg",
           type:"Plumbing",
           title:"Plumbing Checkup Service",
            para:"From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time."
        },
         {
           type:"Electrician",
           img:"/images/1.jpg",
            title:"electrical works",
            para:"From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time."
        },
    ]
    const [sub,setSub] = useState("")

let filt;
function fg(te){
    setActive(true);
    setSub(te);
    // console.log(te)
        }
        filt= subCategory.filter((su)=>{
            return su.type === sub;
         })
    return (
        <div>
<Header></Header>
            <div className="category_page">


             <Slider {...settings}>

                {category.map(({ img, text }) =>
                <div className="category_div">
                    
                    <button className="category_button_div" onClick={()=>fg(text)}> 
                        {/* <div> */}
                            <img className="category_img" src={img} alt="painting"></img>
                        {/* </div> */}
                        <div>
                            <h5 className="category_text">{text}</h5>
                        </div>
                    </button>
                
                   
                </div>
                )}
            
                
          
            </Slider>

            <div className="sub_category_page">
                <div className="sub_category_title">
                    <h4>Sub Category</h4>
                </div>


            {/* {active?<SubCategory fil={category}></SubCategory>:false} */}
            <div className="grid">
{active ? filt.length === 0 ? (<h1>no service is found!</h1>) : filt.map(({img,title,para})=>
                <div className="sub_category_overall">
                    
                        <button className="sub_category_div" onClick={()=>{nav("/list")}}>
                        <div className="sub_category_img_div">
                            <img className="sub_category_img" src={img} alt="plumbing_subCategory_image"></img>
                        </div>
                        <div className="sub_category_page_content_div">
                            <h6>{title}</h6>
                            <p className="sub_category_page_content_para">{para}</p>
                            <a href="_self">1 services</a> 
                        </div>
                        </button>
                    
                </div>
                ): ""}
</div>
</div>
            </div>

        </div>
    )
}

export default Category;