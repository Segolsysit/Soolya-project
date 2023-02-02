// import { useNavigate } from "react-router-dom";
import "../css_files/dashboard.css";
import Header from "../header";
// import { logOut } from "./auth";
// import { removeUserData1 } from "./storage";



function DashBoard(){

    // const nav = useNavigate();

    // const logOutUser = () => {
    //     logOut();
    //     nav("/sign_in");

    // }

    
    
    // const initialErrors_1 = {
    //     email_input: null,
    //     custom_error: null
    // };
  
    // const [wrong, setWrong] = useState(initialErrors_1);
  
  
    // const [dataLoading, settDataLoading] = useState(false);
  
    // const [email_input, setEmail_Input] = useState("");
  
  
    // const handleForgetsubmit = (event) => {
    //     event.preventDefault();
  
    //     let wrong = initialErrors_1;
  
  
    //     if (email_input === "")
    //         wrong.email_input = "Registered Email is required";
  
    //     if(email_input !== ""){
    //             settDataLoading(true);
    //             ResetApi(email_input).then((response)=>{
    //                console.log(response);
    //             }).catch((err)=>{
  
    //             if(err.code === "ERR_BAD_REQUEST"){
    //                 setWrong({...wrong,custom_error:"Registered email is required"})   
    //             }
    //             })
    //     }
  
    //     setWrong({ ...wrong })
    // }


//    const demo = (setBtn)=>{

//     if (isAuthenticatedLogin()) {
        
//         setBtn(false);
        
//         return <Navigate to="/dashboard"></Navigate>
//         return <Navigate to="/"></Navigate>
//     }

//    } 

  

   

    return(
        <div>

            <Header></Header>

            <div className="demo_div">           
                    <h1 className="demo_h1">Welcome to Dashboard</h1>
            </div>
            <div className="demo_h1">
                <button type="button" >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default DashBoard;