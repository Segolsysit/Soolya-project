import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./css_files/list.css";
import Header from "./header";
import Servicelist from "./Servicelist";
// import { AppContext } from "./App";
// import list_photo from "./images/1.jpg";


function List(props) {
    const [servicedata, setservicedata] = useState([]);
    const [model1, setmodel1] = useState([]);
    const [sublist, setSublist] = useState('')
    // const [cart, setcart] = useState([])

    // const { cartdata, setcartdata } = useContext(AppContext)

    // const usercontext = createContext()

    async function model(_id) {
        await axios.get(`http://localhost:3001/service_api/new_fetch_service_items/${_id}`).then((res) => {
            setmodel1(res.data)
            // console.log(res.data);
        })
    }



    function addtocart(_id) {

        axios.get(`http://localhost:3001/service_api/new_fetch_service_items/${_id}`).then((res) => {
            // setcart(...cart, res.data)
            setcartdata(...cartdata, res.data)
            // return props.setcartdata(cart)
            // localStorage.setItem("cartdata",...cart)
            // localStorage.setItem("Category",cart.Category)
            // localStorage.setItem("Subcategory",cart.Subcategory)
            // localStorage.setItem("Discription",cart.Discription)
            // localStorage.setItem("price",cart.price)
            // localStorage.setItem("filename",cart.filename)


            // console.log(cart);
        })
        console.log(cartdata);
    }
    // console.log(cart);
    //    let list = [
    //       {  id:1,
    //          img:"/images/1.jpg",
    //          heading:"Commercial space shifting",
    //          type:"Commercial space shifting",
    //          category:"start from",
    //          amt:"₹ 200"
    //       },
    //       {
    //          id:2,
    //          img:"/images/1.jpg",
    //          heading:"Scooty service",
    //          type:"Scooty service",
    //          category:"start from",
    //          amt:"₹ 1999"
    //       },
    //       {
    //          id:3,
    //          img:"/images/1.jpg",
    //          heading:"plumbing",
    //          type:"plumbing",
    //          category:"start from",
    //          amt:"₹ 100"
    //       },
    //       {
    //          id:4,
    //          img:"/images/1.jpg",
    //          heading:"Electrician",
    //          type:"Electrician",
    //          category:"start from",
    //          amt:"₹ 99"
    //       },
    //       {
    //          id:5,
    //          img:"/images/1.jpg",
    //          heading:"wiring",
    //          type:"wiring",
    //          category:"start from",
    //          amt:"₹ 49"
    //       }
    //    ]

    // const [modal, setModal] = useState(false);

    // const modalSubmit = ()=>{
    //     setModal(true);
    // }

    useEffect(() => {
        axios.get("http://localhost:3001/service_api/new_fetch_service_items").then((res) => {
            setservicedata(res.data)
            // console.log(res.data);
            setSublist(localStorage.getItem("subcategory"))
            // servicedata.map((ser) => {
            // })
            // service_filt(sublist)

        })
    }, [])
    var filte;
    filte = servicedata.filter(servi => {
        return servi.Subcategory === sublist
    })

    const localpath = "http://localhost:3001/";

    // const usecontext = useContext(AppContext)



    return (
        <div>
            {/* <usercontext.Provider value={cart}> */}
            <Header></Header>
            {/* </usercontext.Provider> */}
            <div className="list_page">


                {filte.map((data, index) =>
                    <div className="list_overall_div" key={index}>
                        <button className="list_btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                            <div>
                                <img className="list_image" src={localpath + data.filename} alt="list_img"></img>
                            </div>
                            <div className="list_cont">
                                <h6>{data.Service}</h6>
                                <div className="list_flex_div">
                                    <div className="list_flex_div_cont">
                                        <h6 className="list_flex_div_cont_heading">{data.Category}</h6>
                                        <p><i class="fa-solid fa-indian-rupee-sign"></i> {data.price}</p>
                                    </div>
                                    <button className="list_add_btn"
                                        onClick={() => model(data._id)}>
                                        <i id="list_add_icon" class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </button>
                        {/* {modal? */}
                        {/* ( */}


                        {/* ):""} */}

        </div>
    )
}
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered  modal-lg" role="document">
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
                        <img className="add_card_img" src={localpath + model1.filename} alt="plumber_profile_book_image"></img>
                    </div>
                    <div>
                        {/* <h5>{heading}</h5> */}
                        <h5>{model1.Category}</h5>
                    </div>
                </div>
                <div className="add_to_card_div">
                    <div>
                        {/* <h6>{category}</h6>
                        <h6>{amt}</h6>*/}
                                        <h6>{model1.Subcategory}</h6>
                                        <h6>{model1.price}</h6>
                                    </div>
                                    <div className="add_to_card_btn_div">
                                        <button className="add_to_card_btn btn btn-primary" data-bs-dismiss="modal" onClick={() => addtocart(model1._id)}>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default List;