import { useState } from "react";
import "./css_files/list.css";
import Header from "./header";
// import list_photo from "./images/1.jpg";


function List(){


   let list = [
      {
         img:"/images/1.jpg",
         heading:"Commercial space shifting",
         type:"Commercial space shifting",
         category:"start from",
         amt:"₹ 200"
      },
      {
         img:"/images/1.jpg",
         heading:"Scooty service",
         type:"Scooty service",
         category:"start from",
         amt:"₹ 1999"
      },
      {
         img:"/images/1.jpg",
         heading:"plumbing",
         type:"plumbing",
         category:"start from",
         amt:"₹ 100"
      },
      {
         img:"/images/1.jpg",
         heading:"Electrician",
         type:"Electrician",
         category:"start from",
         amt:"₹ 99"
      },
      {
         img:"/images/1.jpg",
         heading:"wiring",
         type:"wiring",
         category:"start from",
         amt:"₹ 49"
      },
      {
         img:"/images/1.jpg",
         heading:"Drainage Cleaning",
         type:"Drainage Cleaning",
         category:"start from",
         amt:"₹ 799"
      },
      {
         img:"/images/1.jpg",
         heading:"House cleaning",
         type:"House Cleaning",
         category:"start from",
         amt:"₹ 499"
      },
      {
         img:"/images/1.jpg",
         heading:"Bike Service",
         type:"Bike Service",
         category:"start from",
         amt:"₹ 999"
      },
      {
         img:"/images/1.jpg",
         heading:"AC Service",
         type:"AC Service",
         category:"start from",
         amt:"₹ 699"
      }
   ]

   const [modal, setModal] = useState(false);

   const modalSubmit = ()=>{
       setModal(true);
   }


   return(
    <div>

      <Header></Header>
   
      <div className="list_page">


         {list.map(({img,heading,category,amt})=>
            <div className="list_overall_div">
               <button className="list_btn"  onClick={modalSubmit}  data-bs-toggle="modal" data-bs-target="#exampleModalCente">
                     <div>
                        <img className="list_image" src={img} alt="list_img"></img>
                     </div>
                     <div className="list_cont">
                        <h6>{heading}</h6>
                        <div className="list_flex_div">
                           <div className="list_flex_div_cont">
                                 <h6 className="list_flex_div_cont_heading">{category}</h6>
                                 <p>{amt}</p>
                           </div>
                           <button className="list_add_btn">
                              <i id="list_add_icon" class="fa-solid fa-plus"></i>
                           </button>
                        </div>
                     </div>
               </button>
               {modal?
(<div class="modal fade" id="exampleModalCente" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                        <img className="add_card_img" src={img} alt="plumber_profile_book_image"></img>
                    </div>
                    <div>
                        <h5>{heading}</h5>
                    </div>
                </div>  
                <div className="add_to_card_div">
                    <div>
                        <h6>Plumbing service</h6>
                        <h6>{amt}</h6>
                    </div>
                    <div className="add_to_card_btn_div">
                     {/* onClick={handleCard} */}
                        <button  className="add_to_card_btn btn btn-primary" data-bs-dismiss="modal">
                            Add to cart
                        </button>
                    </div>
                </div>                 
            </div>
        </div>
    </div>
    </div>):""}
           
      </div>
         )}



      </div>

    </div>
   )
}

export default List;