import "../css_files/category.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
// import SubCategory from "./subCategory";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header";
import axios from "axios";

function Category(props) {

    const [getData, setgetData] = useState([]);
    const [getData_sub, setgetDataSub] = useState([]);
    // const [listActive, setListActive] = useState(false);


    let nav = useNavigate();

    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: getData.length,
        arrows: false,
        swipeToSlide: true


    }

    useEffect(() => {
        axios.get("http://localhost:3001/api/fetch_items").then((res) => {
            setgetData(res.data);
        })

        axios.get("http://localhost:3001/sub_api/new_fetch_items").then((res) => {
            setgetDataSub(res.data)
            console.log(getData_sub);
        })

    }, [])

    const localpath = "http://localhost:3001/";


    const [active, setActive] = useState(false);

    const [sub, setSub] = useState("")

    let filt;
    function fg(te) {
        setActive(true);
        setSub(te);
        console.log(te)
    }
    filt = getData_sub.filter((su) => {
        return su.Category === sub;
    })
    //  console.log(filt);


    const service_list = (Subcategory) => {

        localStorage.setItem("subcategory", Subcategory);
        nav("/list")

    }

    return (
        <div>
            <Header></Header>
            <div className="category_page">


                {getData.length < 8 ? (<Slider {...settings}>

                    {getData.map((data, index) =>
                        <div className="category_div" key={index}>

                            <button className="category_button_div" onClick={() => fg(data.catagorySetup)}>
                                {/* <div> */}
                                <img className="category_img" src={localpath + data.filename} alt="painting"></img>
                                {/* </div> */}
                                <div>
                                    <h5 className="category_text">{data.catagorySetup}</h5>
                                </div>
                            </button>
                        </div>
                    )}
                </Slider>) : 
                     getData.map((data,index) =>
                        <div className="category_div" key={index}>

                            <button className="category_button_div" onClick={() => fg(data.catagorySetup)}>
                                {/* <div> */}
                                <img className="category_img" src={localpath + data.filename} alt="painting"></img>
                                {/* </div> */}
                                <div>
                                    <h5 className="category_text">{data.catagorySetup}</h5>
                                </div>
                            </button>
                        </div>
                    )
                }
                


                <div className="grid">
                    {active ? filt.length === 0 ? (<h1>no service is found!</h1>) : filt.map(({ img, Subcategory, Discription, filename }, index) =>
                        <div className="sub_category_overall" key={index}>

                            <button className="sub_category_div" onClick={() => { service_list(Subcategory) }}>
                                <div className="sub_category_img_div">
                                    <img className="sub_category_img" src={localpath + filename} alt="subCategory_image"></img>
                                </div>
                                <div className="sub_category_page_content_div">
                                    <h2>{Subcategory}</h2>
                                    <p className="sub_category_page_content_para">{Discription}</p>

                                </div>
                            </button>

                        </div>
                    ) : ""}
                </div>

            </div>

        </div>
    )
}

export default Category;