import "../css_files/plumber_profile.css";
import plumber_banner from "../images/1.jpg";
import photo from "../images/3.jpg";
import photo2 from "../images/2.jpg";


function PlumberProfile() {
    return (
        <div>


            <div className="profile_page">
                <div className="profile_page_main_div">
                    <div>
                        <img className="plumber_profile_banner" src={plumber_banner} alt="profile_data"></img>
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
                                            <p>demo reviews</p>
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
                                            <p>Address,services..</p>
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
                                            <p>Today:10.00 am - 8.00 pm</p>
                                        </div>
                                        <div>
                                            <i id="hover_arrow_inline_btn" class="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="book_now_btn">
                                <button>Book Now</button>
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
                                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"> Write a Review</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Reviews & Ratings</button>
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
                                <div  className="business_info_cont">

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
                                <div  className="business_info_cont">

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


        </div>
    );
}

export default PlumberProfile;