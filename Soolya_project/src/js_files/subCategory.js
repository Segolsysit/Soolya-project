import { useState } from "react";
import { useEffect } from "react";
import "../css_files/subCategory.css";

function SubCategory(props){

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

    const [fil,setFil] = useState("");
    let filt;

useEffect(()=>{
    setFil(localStorage.getItem("cat"));
    
},[])

filt=subCategory.filter((sub)=>{
    return sub.type === fil;
     })

    return(
        <div>
            <div className="sub_category_page">
                <div className="sub_category_title">
                    <h4>Sub Category</h4>
                </div>

<div className="grid">
{filt.map(({img,title,para})=>
                <div className="sub_category_overall">
                    
                        <button className="sub_category_div">
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
                )}
</div>
                
             </div>
        </div>

    )
}

export default SubCategory;