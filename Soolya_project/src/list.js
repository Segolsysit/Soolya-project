import "./css_files/list.css";
import Header from "./header";
// import list_photo from "./images/1.jpg";


function List(){


   let list = [
      {
         img:"/images/1.jpg",
         heading:"Commercial space shifting",
         category:"start from",
         amt:"₹ 200"
      },
      {
         img:"/images/1.jpg",
         heading:"Commercial space shifting",
         category:"start from",
         amt:"₹ 200"
      },
      {
         img:"/images/1.jpg",
         heading:"Commercial space shifting",
         category:"start from",
         amt:"₹ 200"
      },
      {
         img:"/images/1.jpg",
         heading:"Commercial space shifting",
         category:"start from",
         amt:"₹ 200"
      },
      {
         img:"/images/1.jpg",
         heading:"Commercial space shifting",
         category:"start from",
         amt:"₹ 200"
      },
      {
         img:"/images/1.jpg",
         heading:"Commercial space shifting",
         category:"start from",
         amt:"₹ 200"
      },
      {
         img:"/images/1.jpg",
         heading:"Commercial space shifting",
         category:"start from",
         amt:"₹ 200"
      },
      {
         img:"/images/1.jpg",
         heading:"Commercial space shifting",
         category:"start from",
         amt:"₹ 200"
      },
      {
         img:"/images/1.jpg",
         heading:"Commercial space shifting",
         category:"start from",
         amt:"₹ 200"
      }
   ]



   return(
    <div>

      <Header></Header>
   
      <div className="list_page">


         {list.map(({img,heading,category,amt})=>
            <div className="list_overall_div">
               <button className="list_btn">
                     <div>
                        <img className="list_image" src={img} alt="list_img"></img>
                     </div>
                     <div className="list_cont">
                        <h6>{heading}</h6>
                        <div className="list_flex_div">
                           <div className="list_flex_div_cont">
                                 <h6>{category}</h6>
                                 <p>{amt}</p>
                           </div>
                           <button className="list_add_btn">
                              <i id="list_add_icon" class="fa-solid fa-plus"></i>
                           </button>
                        </div>
                     </div>
               </button>
            </div>
         )}



      </div>

    </div>
   )
}

export default List;