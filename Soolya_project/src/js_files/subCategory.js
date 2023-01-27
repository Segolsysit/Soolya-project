import "../css_files/subCategory.css";
import demo_img from "../images/1.jpg";

function SubCategory(){
    return(
        <div>
            <div className="sub_category_page">
                <div className="sub_category_title">
                    <h5>Sub Category</h5>
                </div>
                

                <button className="sub_category_div">
                    <div className="sub_category_img_div">
                        <img className="sub_category_img" src={demo_img} alt="plumbing_subCategory_image"></img>
                    </div>
                    <div className="sub_category_page_content_div">
                        <h6>Plumbing Checkup Service</h6>
                        <p className="sub_category_page_content_para">From Bikes and Autos to Prime Sedans and Prime SUVs,
                         you will find a ride in your budget at your convenience 
                         any time.
                         <a href="_self">1 services</a> 
                        </p>
                    </div>
                </button>
             </div>
        </div>

    )
}

export default SubCategory;