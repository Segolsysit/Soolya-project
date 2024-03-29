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

    const settings1 = {
        className: "center",
        infinite: true,
        slidesToShow: 6,
        arrows: false,
        swipeToSlide: true


    }

    const settings2 = {
        className: "center",
        infinite: true,
        slidesToShow: 5,
        arrows: false,
        swipeToSlide: true
    }

    const settings3 = {
        className: "center",
        infinite: true,
        slidesToShow: 4,
        arrows: false,
        swipeToSlide: true
    }

    const settings4 = {
        className: "center",
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        swipeToSlide: true
    }
    const settings5 = {
        className: "center",
        infinite: true,
        slidesToShow: 2.5,
        arrows: false,
        swipeToSlide: true
    }
    const settings6 = {
        className: "center",
        infinite: true,
        slidesToShow: 2,
        arrows: false,
        swipeToSlide: true
    }
    const settings7 = {
        className: "center",
        infinite: true,
        slidesToShow: 1.7,
        arrows: false,
        swipeToSlide: true
    }

const [ff , setFf] = useState("");

    useEffect(() => {

       setFf(localStorage.getItem("title"));

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

    const [sub, setSub] = useState(localStorage.getItem('title'))

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
            <div className="center_category_page">
                <div>
                    <div className="category_page_one">
{/* {ff} */}

                        {getData.length >= 8 ? (<Slider {...settings1}>

                            {getData.map((data, index) =>
                                <div className="category_div" key={index}>

                                    <button className="category_button_div" onClick={() => fg(data.catagorySetup)}>
                                        {/* <div> */}
                                        <img className="category_img-div" src={localpath + data.filename} alt="painting"></img>
                                        {/* </div> */}
                                        <div>
                                            <h5 className="category_text">{data.catagorySetup}</h5>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </Slider>) :
                            getData.map((data, index) =>
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
                        <div className="sub_category_page">

                            <div className="sub_category_title">
                                <h4>Sub Category</h4>
                            </div>

                            <div className="grid" id="grid_id">
                                {active ? filt.length === 0 ? (<h1 className="no_service">No service is found!</h1>) : filt.map(({ img, Subcategory, Discription, filename }, index) =>
                                    <div className="sub_category_overall" key={index}>

                                        <button className="sub_category_div" onClick={() => { service_list(Subcategory) }}>
                                            <div className="sub_category_img_div">
                                                <img className="sub_category_img" src={localpath + filename} alt="subCategory_image"></img>
                                            </div>
                                            <div className="sub_category_page_content_div">
                                                <h5 className="sub_category_h5">{Subcategory}</h5>
                                                <p className="sub_category_page_content_para">{Discription}</p>

                                            </div>
                                        </button>

                                    </div>
                                ) : ""}
                            </div>
                        </div>

                    </div>

                    <div className="category_page_two">


                        {getData.length >= 8 ? (<Slider {...settings2}>

                            {getData.map((data, index) =>
                                <div className="category_div" key={index}>

                                    <button className="category_button_div" onClick={() => fg(data.catagorySetup)}>
                                        {/* <div> */}
                                        <img className="category_img-div" src={localpath + data.filename} alt="painting"></img>
                                        {/* </div> */}
                                        <div>
                                            <h5 className="category_text">{data.catagorySetup}</h5>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </Slider>) :
                            getData.map((data, index) =>
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

                        <div className="sub_category_page">

                            <div className="sub_category_title">
                                <h4>Sub Category</h4>
                            </div>
                            <div className="grid" id="grid_id">
                                {active ? filt.length === 0 ? (<h1 className="no_service">No service is found!</h1>) : filt.map(({ img, Subcategory, Discription, filename }, index) =>
                                    <div className="sub_category_overall" key={index}>

                                        <button className="sub_category_div" onClick={() => { service_list(Subcategory) }}>
                                            <div className="sub_category_img_div">
                                                <img className="sub_category_img" src={localpath + filename} alt="subCategory_image"></img>
                                            </div>
                                            <div>
                                                <div className="sub_category_page_content_div">
                                                    <h5 className="sub_category_h5">{Subcategory}</h5>
                                                    <p className="sub_category_page_content_para">{Discription}</p>
                                                </div>
                                            </div>
                                        </button>

                                    </div>
                                ) : ""}
                            </div>
                        </div>




                    </div>

                    <div className="category_page_three">


                        {getData.length >= 8 ? (<Slider {...settings3}>

                            {getData.map((data, index) =>
                                <div className="category_div" key={index}>

                                    <button className="category_button_div" onClick={() => fg(data.catagorySetup)}>
                                        {/* <div> */}
                                        <img className="category_img-div" src={localpath + data.filename} alt="painting"></img>
                                        {/* </div> */}
                                        <div>
                                            <h5 className="category_text">{data.catagorySetup}</h5>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </Slider>) :
                            getData.map((data, index) =>
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

<div className="sub_category_page">

                            <div className="sub_category_title">
                                <h4>Sub Category</h4>
                            </div>

                        <div className="grid" id="grid_id">
                            {active ? filt.length === 0 ? (<h1 className="no_service">No service is found!</h1>) : filt.map(({ img, Subcategory, Discription, filename }, index) =>
                                <div className="sub_category_overall" key={index}>

                                    <button className="sub_category_div" onClick={() => { service_list(Subcategory) }}>
                                        <div className="sub_category_img_div">
                                            <img className="sub_category_img" src={localpath + filename} alt="subCategory_image"></img>
                                        </div>
                                        <div className="sub_category_page_content_div">
                                            <h5 className="sub_category_h5">{Subcategory}</h5>
                                            <p className="sub_category_page_content_para">{Discription}</p>

                                        </div>
                                    </button>

                                </div>
                            ) : ""}
                        </div>
</div>
                    </div>

                    <div className="category_page_four">


                        {getData.length >= 8 ? (<Slider {...settings4}>

                            {getData.map((data, index) =>
                                <div className="category_div" key={index}>

                                    <button className="category_button_div" onClick={() => fg(data.catagorySetup)}>
                                        {/* <div> */}
                                        <img className="category_img-div" src={localpath + data.filename} alt="painting"></img>
                                        {/* </div> */}
                                        <div>
                                            <h5 className="category_text">{data.catagorySetup}</h5>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </Slider>) :
                            getData.map((data, index) =>
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
<div className="sub_category_page">

<div className="sub_category_title">
    <h4>Sub Category</h4>
</div>


                        <div className="grid" id="grid_id">
                            {active ? filt.length === 0 ? (<h1 className="no_service">No service is found!</h1>) : filt.map(({ img, Subcategory, Discription, filename }, index) =>
                                <div className="sub_category_overall" key={index}>

                                    <button className="sub_category_div" onClick={() => { service_list(Subcategory) }}>
                                        <div className="sub_category_img_div">
                                            <img className="sub_category_img" src={localpath + filename} alt="subCategory_image"></img>
                                        </div>
                                        <div className="sub_category_page_content_div">
                                            <h5 className="sub_category_h5">{Subcategory}</h5>
                                            <p className="sub_category_page_content_para">{Discription}</p>

                                        </div>
                                    </button>

                                </div>
                            ) : ""}
                        </div>
</div>
                    </div>

                    <div className="category_page_five">


                        {getData.length >= 8 ? (<Slider {...settings5}>

                            {getData.map((data, index) =>
                                <div className="category_div" key={index}>

                                    <button className="category_button_div" onClick={() => fg(data.catagorySetup)}>
                                        {/* <div> */}
                                        <img className="category_img-div" src={localpath + data.filename} alt="painting"></img>
                                        {/* </div> */}
                                        <div>
                                            <h5 className="category_text">{data.catagorySetup}</h5>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </Slider>) :
                            getData.map((data, index) =>
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

<div className="sub_category_page">

                            <div className="sub_category_title">
                                <h4>Sub Category</h4>
                            </div>

                        <div className="grid" id="grid_id">
                            {active ? filt.length === 0 ? (<h1 className="no_service">No service is found!</h1>) : filt.map(({ img, Subcategory, Discription, filename }, index) =>
                                <div className="sub_category_overall" key={index}>

                                    <button className="sub_category_div" onClick={() => { service_list(Subcategory) }}>
                                        <div className="sub_category_img_div">
                                            <img className="sub_category_img" src={localpath + filename} alt="subCategory_image"></img>
                                        </div>
                                        <div className="sub_category_page_content_div">
                                            <h5 className="sub_category_h5">{Subcategory}</h5>
                                            <p className="sub_category_page_content_para">{Discription}</p>

                                        </div>
                                    </button>

                                </div>
                            ) : ""}
                        </div>
</div>
                    </div>

                    <div className="category_page_six">


                        {getData.length >= 8 ? (<Slider {...settings6}>

                            {getData.map((data, index) =>
                                <div className="category_div" key={index}>

                                    <button className="category_button_div" onClick={() => fg(data.catagorySetup)}>
                                        <img className="category_img-div" src={localpath + data.filename} alt="painting"></img>
                                        <div>
                                            <h5 className="category_text">{data.catagorySetup}</h5>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </Slider>) :
                            getData.map((data, index) =>
                                <div className="category_div" key={index}>

                                    <button className="category_button_div" onClick={() => fg(data.catagorySetup)}>
                                        <img className="category_img" src={localpath + data.filename} alt="painting"></img>
                                        <div>
                                            <h5 className="category_text">{data.catagorySetup}</h5>
                                        </div>
                                    </button>
                                </div>
                            )
                        }


<div className="sub_category_page">

                            <div className="sub_category_title">
                                <h4>Sub Category</h4>
                            </div>
                        <div className="grid" id="grid_id">
                            {active ? filt.length === 0 ? (<h1 className="no_service">No service is found!</h1>) : filt.map(({ img, Subcategory, Discription, filename }, index) =>
                                <div className="sub_category_overall" key={index}>

                                    <button className="sub_category_div" onClick={() => { service_list(Subcategory) }}>
                                        <div className="sub_category_img_div">
                                            <img className="sub_category_img" src={localpath + filename} alt="subCategory_image"></img>
                                        </div>
                                        <div className="sub_category_page_content_div">
                                            <h5 className="sub_category_h5">{Subcategory}</h5>
                                            <p className="sub_category_page_content_para">{Discription}</p>

                                        </div>
                                    </button>

                                </div>
                            ) : ""}
                        </div>
</div>
                    </div>

                    <div className="category_page_seven">


                        {getData.length >= 8 ? (<Slider {...settings7}>

                            {getData.map((data, index) =>
                                <div className="category_div" key={index}>

                                    <button className="category_button_div" onClick={() => fg(data.catagorySetup)}>
                                        <img className="category_img-div" src={localpath + data.filename} alt="painting"></img>
                                        <div>
                                            <h5 className="category_text">{data.catagorySetup}</h5>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </Slider>) :
                            getData.map((data, index) =>
                                <div className="category_div" key={index}>

                                    <button className="category_button_div" onClick={() => fg(data.catagorySetup)}>
                                        <img className="category_img" src={localpath + data.filename} alt="painting"></img>
                                        <div>
                                            <h5 className="category_text">{data.catagorySetup}</h5>
                                        </div>
                                    </button>
                                </div>
                            )
                        }

<div className="sub_category_page">

                            <div className="sub_category_title">
                                <h4>Sub Category</h4>
                            </div>

                        <div className="grid" id="grid_id">
                            {active ? filt.length === 0 ? (<h1 className="no_service">No service is found!</h1>) : filt.map(({ img, Subcategory, Discription, filename }, index) =>
                                <div className="sub_category_overall" key={index}>

                                    <button className="sub_category_div" onClick={() => { service_list(Subcategory) }}>
                                        <div className="sub_category_img_div">
                                            <img className="sub_category_img" src={localpath + filename} alt="subCategory_image"></img>
                                        </div>
                                        <div className="sub_category_page_content_div">
                                            <h5 className="sub_category_h5">{Subcategory}</h5>
                                            <p className="sub_category_page_content_para">{Discription}</p>

                                        </div>
                                    </button>

                                </div>
                            ) : ""}
                        </div>
</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Category;