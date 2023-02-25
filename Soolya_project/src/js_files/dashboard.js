import { useState } from "react";
import "../css_files/dashboard.css";





function DashBoard(){


    const [amount, setAmount] = useState("");
    const handlePayment = (e)=>{
          e.preventDefault();

          if(amount === ""){
              alert("Please enter amount");
          }
          else{
            // alert("payment gateway open");

            var options = {
                key:"rzp_test_1SnQnLm783h5Op",
                key_secret:"W3x1XiUXiyqIKQJrSBqaXGmE",
                amount:amount *100,
                currency:"INR",
                name:"SOOLYA",
                description:"Payment here",
                handler:function(res){
                    console.log(res);
                    alert(res.razorpay_payment_id);
                },
                prefill:{
                    name:'vignesh',
                    email:"vigneshvignesh4727@gmail.com",
                    contact:"9791823953"
                },
                notes:{
                    address:"Segolsys software solutions"
                },
                theme:{
                    color:"#3399cc"
                }
            };

            var pay = new window.Razorpay(options);

            pay.open();
          }
    }


    

    return(
        <div>


        <div className="demo_h1">

            <div>
           

                <input type="text" value={amount} onChange={(e)=>{setAmount(e.target.value)}}></input>
                <br/>
                <br/>
                <div className="three">
                    <button  type="button" onClick={handlePayment} >Submit</button>
                </div>

            </div>

        </div>

        </div>
    )
}

export default DashBoard;