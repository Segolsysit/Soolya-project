// import { useNavigate } from "react-router-dom";
import "../css_files/dashboard.css";
// import Header from "../header";
// import { logOut } from "./auth";
// import { removeUserData1 } from "./storage";
import ReCAPTCHA from "react-google-recaptcha";
import swal from 'sweetalert';




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




// jquery for step form




   
// $(document).ready(function(){
    
//     var current_fs, next_fs, previous_fs; //fieldsets
//     var opacity;
    
//     $(".next").click(function(){
        
//         current_fs = $(this).parent();
//         next_fs = $(this).parent().next();
        
//         //Add Class Active
//         $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        
//         //show the next fieldset
//         next_fs.show(); 
//         //hide the current fieldset with style
//         current_fs.animate({opacity: 0}, {
//             step: function(now) {
//                 // for making fielset appear animation
//                 opacity = 1 - now;
    
//                 current_fs.css({
//                     'display': 'none',
//                     'position': 'relative'
//                 });
//                 next_fs.css({'opacity': opacity});
//             }, 
//             duration: 600
//         });
//     });
    
//     $(".previous").click(function(){
        
//         current_fs = $(this).parent();
//         previous_fs = $(this).parent().prev();
        
//         //Remove class active
//         $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        
//         //show the previous fieldset
//         previous_fs.show();
    
//         //hide the current fieldset with style
//         current_fs.animate({opacity: 0}, {
//             step: function(now) {
//                 // for making fielset appear animation
//                 opacity = 1 - now;
    
//                 current_fs.css({
//                     'display': 'none',
//                     'position': 'relative'
//                 });
//                 previous_fs.css({'opacity': opacity});
//             }, 
//             duration: 600
//         });
//     });
    
//     $('.radio-group .radio').click(function(){
//         $(this).parent().find('.radio').removeClass('selected');
//         $(this).addClass('selected');
//     });
    
//     $(".submit").click(function(){
//         return false;
//     })
        
//     });

const onChange=(value)=>{
    localStorage.setItem("captcha", value)
  }


  const captchaValue = ()=>{
      return localStorage.getItem("captcha")
  }

  const authenticate = ()=>{
      captchaValue() ===""?true:false;
  }

  const captchaSubmit = (e)=>{

        e.preventDefault();


      if (!authenticate()){
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
      }
      else{
      alert("error");

      }

  }

  

   

    return(
        <div>

            {/* <Header></Header> */}
{/* 
            <div className="demo_div">           
                    <h1 className="demo_h1">Welcome to Dashboard</h1>
            </div>
            <div className="demo_h1">
                <button type="button" >
                    Logout
                </button>
            </div> */}


                                <form onSubmit={captchaSubmit}>
                                    <ReCAPTCHA
                                            sitekey="6LdyhYIkAAAAAJj04Umnf4rQ427h49pItJtiBJ_l"
                                            onChange={onChange}
                                    />
                                    <button type="submit">Confirm order</button>

                                </form>

        </div>
    )
}

export default DashBoard;