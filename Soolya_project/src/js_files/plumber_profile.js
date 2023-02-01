import "../css_files/plumber_profile.css";
import plumber_banner from "../images/1.jpg";
import photo from "../images/3.jpg";
import photo2 from "../images/2.jpg";

import fb from "../images/share_profile_facebook.png";
import insta from "../images/share_profile_instagram.png";
import twitt from "../images/share_profile_twitter.png";
import {useEffect, useState} from "react"
import copy_link from "../images/share_profile_copy_link.png";
import sweet from "sweetalert";
import axios from "axios";


function PlumberProfile() {
    const [id,setId]  = useState();


    useEffect(() => {
     axios.get("https://63bd5802d660062388a24683.mockapi.io/Soolya").then((res)=>{
        setId(res.data)
        console.log(id);
     })
    
    }, [id])
    

    const handleCard = ()=>{
        sweet("Successfully Booked!", "Good job!", "success");
    }

    return (
        <div>


            <div className="profile_page">
                <div className="profile_page_main_div">
                    <div className="plumber_profile_relative">
                        <img className="plumber_profile_banner" src={plumber_banner} alt="profile_data"></img>
                        <div className="plumber_profile_absolute">
                            <div className="plumber_name">
                                <div>
                                    <div>
                                        <h1>New Jai Maa Bhavani Tiles and Plumbing</h1>
                                    </div>
                                </div>


                                <button id="share_btn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    Share profile <i id="share_profile" class="fa-solid fa-share-from-square"></i>
                                </button>

                                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div id="share_profile_modal_width" class="modal-dialog modal-dialog-centered " role="document">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <div className="share_profile_cont">
                                                    <div>
                                                        <h4 className="share_profile_heading">Share with your friends</h4>
                                                    </div>
                                                    <div>
                                                        <button id="share_profile_links_close_btn" type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">
                                                                <i class="fa-solid fa-xmark"></i>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className="share_profile_select_heading">Select from the options below</h5>
                                                </div>
                                                <div className="share_profile_link">
                                                    <button className="share_profile_link_btn">
                                                        <div className="share_profile_link_div">
                                                            <div className="share_profile_img_div">
                                                                <img src={fb} alt="facebook_link"></img>
                                                            </div>
                                                        </div>
                                                        Facebook
                                                    </button>
                                                    <button className="share_profile_link_btn">
                                                        <div className="share_profile_link_div">
                                                            <div className="share_profile_img_div">
                                                                <img src={insta} alt="instagram_link"></img>
                                                            </div>
                                                        </div>
                                                        Instagram
                                                    </button>
                                                    <button className="share_profile_link_btn">
                                                        <div className="share_profile_link_div">
                                                            <div className="share_profile_img_div">
                                                                <img src={twitt} alt="twitter_link"></img>
                                                            </div>
                                                        </div>
                                                        Twitter
                                                    </button>
                                                    <button className="share_profile_link_btn">
                                                        <div className="share_profile_link_div">
                                                            <div className="share_profile_img_div">
                                                                <img src={copy_link} alt="copy_link"></img>
                                                            </div>
                                                        </div>
                                                        Copy Link
                                                    </button>

                                                </div>
                                            </div>
                                            {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div> */}
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>



                    <div className="plumber_profile_address_side">


                        <div>
                            <div>
                                <h5>Photos</h5>
                            </div>

                            <div className="img_wrapper">
                                <div>
                                    <img className="company_images" src={photo} alt="demo_bn"></img>
                                </div>
                                <div>
                                    <img className="company_images" src={plumber_banner} alt="demo_bn"></img>
                                </div>
                                <div>
                                    <img className="company_images" src={photo2} alt="demo_bn"></img>
                                </div>
                                <div>
                                    <img className="company_images" src={photo} alt="demo_bn"></img>
                                </div>
                                <div>
                                    <img className="company_images" src={photo} alt="demo_bn"></img>
                                </div>
                                <div>
                                    <img className="company_images" src={photo} alt="demo_bn"></img>
                                </div>
                                <div>
                                    <img className="company_images" src={photo} alt="demo_bn"></img>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h5>Address</h5>
                                </div>
                                <address>
                                    Cts NO, 301/A 301B, 301/C, Marol Village Road, Andheri East, Mumbai - 400059, Opposite Deepti Wines
                                </address>
                            </div>

                            <div>
                                <div>
                                    <h6>Hours of operations</h6>
                                </div>
                                <div>
                                    <p>
                                        Today:10.00 am - 8.00 pm
                                    </p>
                                </div>
                            </div>
                        </div>




                        <div className="plumber_profile_bio_side">
                            <div className="plumber_profile_bio_btn_inline">
                                <div>
                                    <button className="bio_side_inline_btn">
                                        <div className="inline_btn_cont">
                                            <h5>Reviews</h5>
                                            {/* <p>demo reviews</p> */}
                                        </div>
                                        <div>
                                            <i id="hover_arrow_inline_btn" class="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <button className="bio_side_inline_btn">
                                        <div className="inline_btn_cont">
                                            <h5>More Information</h5>
                                            {/* <p>Address,services..</p> */}
                                        </div>
                                        <div>
                                            <i id="hover_arrow_inline_btn" class="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <button className="bio_side_inline_btn">
                                        <div className="inline_btn_cont">
                                            <h5>Hours of Operation</h5>
                                            {/* <p>Today:10.00 am - 8.00 pm</p> */}
                                        </div>
                                        <div>
                                            <i id="hover_arrow_inline_btn" class="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="book_now_btn">
                                {/* <button>
                                    Book Now
                                    <i id="book_now_arrow" class="fa-solid fa-chevron-right"></i>
                                </button> */}

                                <button  id="book_now" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCente">
                                    Book Now <i id="book_now_arrow" class="fa-solid fa-chevron-right"></i>
                                </button>

                                    <div class="modal fade" id="exampleModalCente" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div  class="modal-dialog modal-dialog-centered  modal-lg" role="document">
                                            <div class="modal-content">
                                                <div class="modal-body">
                                                    <div className="share_profile_cont">
                                                        <div>
                                                            <div>
                                                                <h4 className="add_card_profile_heading">Book Here</h4>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button id="book_now_links_close_btn" type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">
                                                                    <i class="fa-solid fa-xmark"></i>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </ div>  
                                                    <div className="add_card_profile_div">
                                                        <div>
                                                            <img className="add_card_img" src={photo} alt="plumber_profile_book_image"></img>
                                                        </div>
                                                        <div>
                                                            <h5>New Jai Maa Bhavani Tiles and Plumbing</h5>
                                                        </div>
                                                    </div>  
                                                    <div className="add_to_card_div">
                                                        <div>
                                                            <h6>Plumbing service</h6>
                                                            <h6>Per hour ₹ 50</h6>
                                                        </div>
                                                        <div className="add_to_card_btn_div">
                                                            <button onClick={handleCard} className="add_to_card_btn btn btn-primary" data-bs-dismiss="modal">
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>                 
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                            </div>

                            {/* <div className="review_div">
                                <button>
                                    Write a Review
                                </button>
                                <button>
                                    Reviews & Ratings
                                </button>
                            </div> */}

                            <div className="review_div">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                            <i id="review_box_icon" class="fa-regular fa-pen-to-square"></i>
                                            Write a Review
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <i id="review_box_icon" class="fa-regular fa-comment"></i>
                                            Reviews & Ratings
                                        </button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                        <div className="review_box">
                                            <div>
                                                <h4 className="review_box_heading">Add Review</h4>
                                            </div>
                                            <div>
                                                <textarea className="review_box_cont" rows={5} placeholder="Be specific and relevant to the place you're reviewing and describe what other visitor are likely to experience. Be authentic and describe why you liked or disliked">
                                                </textarea>
                                            </div>
                                            <div>
                                                <button className="review_submit_btn">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                </div>

                            </div>


                            {/* <div className="review_box">
                                <div>
                                    <h4>Add Review</h4>
                                </div>
                                <div>
                                    <textarea className="review_box_cont" rows={5} placeholder="Be specific and relevant to the place you're reviewing and describe what other visitor are likely to experience. Be authentic and describe why you liked or disliked">
                                    </textarea>
                                </div>
                                <div>
                                    <button>
                                        submit
                                    </button>
                                </div>
                            </div> */}

                            <div className="business_info_div">
                                <div className="tag_style">
                                    <h3>Business Information</h3>
                                </div>
                                <div className="business_info_cont">

                                    <h5> New Jai Maa Bhavani Tiles and Plumbing in Dombivli East, Thane, Mumbai </h5>
                                    <p>New Jai Maa Bhavani Tiles and Plumbing in Thane, Mumbai is one of the leading businesses in the Plumbers. Also known for Plumbers, Tiling Contractors, Tile Contractors, Tile Fixing Services, Ceramic Tile Contractors and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of New Jai Maa Bhavani Tiles and Plumbing, Thane, Mumbai.

                                        A leaking pipe flooding your apartment? Looking forward to installing new plumbing fixtures in your new home? Then Plumbers are the professionals you need to contact. They are highly skilled in installing several piping systems in your home and repairing various fittings in case of a problem. Completing any industrial, commercial or industrial project is impossible without them.

                                        If you are looking for a good plumber to take care of the piping in any of your properties, then look no further than New Jai Maa Bhavani Tiles and Plumbing located in Dombivli East, Mumbai. Established in 2004, New Jai Maa Bhavani Tiles and Plumbing has served many satisfied clients.
                                    </p>

                                    <h5> New Jai Maa Bhavani Tiles and Plumbing in Dombivli East, Thane, Mumbai </h5>
                                    <p>New Jai Maa Bhavani Tiles and Plumbing in Thane, Mumbai is one of the leading businesses in the Plumbers. Also known for Plumbers, Tiling Contractors, Tile Contractors, Tile Fixing Services, Ceramic Tile Contractors and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of New Jai Maa Bhavani Tiles and Plumbing, Thane, Mumbai.

                                        A leaking pipe flooding your apartment? Looking forward to installing new plumbing fixtures in your new home? Then Plumbers are the professionals you need to contact. They are highly skilled in installing several piping systems in your home and repairing various fittings in case of a problem. Completing any industrial, commercial or industrial project is impossible without them.

                                        If you are looking for a good plumber to take care of the piping in any of your properties, then look no further than New Jai Maa Bhavani Tiles and Plumbing located in Dombivli East, Mumbai. Established in 2004, New Jai Maa Bhavani Tiles and Plumbing has served many satisfied clients.
                                    </p>
                                </div>
                            </div>

                            <div className="business_info_div">
                                <div className="tag_style">
                                    <h3>Frequently Asked Question</h3>
                                </div>
                                <div className="business_info_cont">

                                    <h5>1. What are the average visiting charges of New Jai Maa Bhavani Tiles and Plumbing?</h5>
                                    <p>New Jai Maa Bhavani Tiles and Plumbing charges an average visiting fee of Rs..</p>

                                    <h5>2. Do the technicians at New Jai Maa Bhavani Tiles and Plumbing bring their own plumbing tools for projects?</h5>
                                    <p>Yes, typically all plumbing companies provide their technicians with the plumbing tools.</p>

                                    <h5>3. How can I get in touch with New Jai Maa Bhavani Tiles and Plumbing in Dombivli East?</h5>
                                    <p>To get in touch with New Jai Maa Bhavani Tiles and Plumbing, you can call them on the number provided during their working hours from Monday:- 9:30 am - 10:30 pm, Tuesday:- 9:30 am - 10:30 pm, Wednesday:- 9:30 am - 10:30 pm, thu:- 9:30 am - 10:30 pm, Friday:- 9:30 am - 10:30 pm, Saturday:- 9:30 am - 10:30 pm, Sunday:- 9:30 am - 10:30 pm.</p>

                                    <h5>4. How long does New Jai Maa Bhavani Tiles and Plumbing take to complete a project?</h5>
                                    <p>The time taken to complete a project depends on the amount of work. It is suggested that you consult New Jai Maa Bhavani Tiles and Plumbing for more details regarding this.</p>

                                    <h5>5. Is it essential to book services in advance at New Jai Maa Bhavani Tiles and Plumbing?</h5>
                                    <p>Some plumbers are readily available if you need them to fix a minor issue. However, if it is a big project, we suggest you contact New Jai Maa Bhavani Tiles and Plumbing and book their services in advance.</p>


                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <button className="list_btn"  data-bs-toggle="modal" data-bs-target="#exampleModalCente">
                     <div>
                        <img className="list_image" src={photo} alt="list_img"></img>
                     </div>
                     <div className="list_cont">
                        <h6>heading</h6>
                        <div className="list_flex_div">
                           <div className="list_flex_div_cont">
                                 <h6 className="list_flex_div_cont_heading">category</h6>
                                 <p>299</p>
                           </div>
                           <button className="list_add_btn" >
                              <i id="list_add_icon" class="fa-solid fa-plus"></i>
                           </button>
                        </div>
                     </div>
               </button>


               <div class="modal fade" id="exampleModalCente" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div  class="modal-dialog modal-dialog-centered  modal-lg" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <div className="share_profile_cont">
                                                    <div>
                                                        <div>
                                                            <h4 className="add_card_profile_heading">Book Here</h4>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button id="book_now_links_close_btn" type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">
                                                                <i class="fa-solid fa-xmark"></i>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </ div>  
                                                <div className="add_card_profile_div">
                                                    <div>
                                                        <img className="add_card_img" src={photo} alt="plumber_profile_book_image"></img>
                                                    </div>
                                                    <div>
                                                        <h5>New Jai Maa Bhavani Tiles and Plumbing</h5>
                                                    </div>
                                                </div>  
                                                <div className="add_to_card_div">
                                                    <div>
                                                        <h6>Plumbing service</h6>
                                                        <h6>Per hour ₹ 50</h6>
                                                    </div>
                                                    <div className="add_to_card_btn_div">
                                                        <button onClick={handleCard} className="add_to_card_btn btn btn-primary" data-bs-dismiss="modal">
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>                 
                                            </div>
                                        </div>
                                    </div>
                                </div>


        </div>
    );
}

export default PlumberProfile;