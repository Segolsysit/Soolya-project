import React, { useState,useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";
const PaymentOptions = ({setpage}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [bookingdata, setbookingdata] = useState({})

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };



  
  const handleSubmit = (event) => {
    event.preventDefault();

    if(selectedOption === "cashOnDelivery"){
      localStorage.setItem("paymentType",selectedOption)
    }
    else{
      localStorage.setItem("paymentType",selectedOption);
      
      var options = {
        key:"rzp_test_1SnQnLm783h5Op",
        key_secret:"W3x1XiUXiyqIKQJrSBqaXGmE",
        amount:bookingdata.price *100,
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
    console.log(selectedOption);
    // handle payment based on selected option
    return setpage((currentpage) => currentpage + 1)
  };
  const id = localStorage.getItem("service_id")

  useEffect(() => {
    // axios.get("https://63bd5802d660062388a24683.mockapi.io/Soolya").then((res) => {
    //     console.log(res.data);
    // })
    axios.get(`http://localhost:3001/service_api/new_fetch_service_items/${id}`).then((res) => {
        setbookingdata(res.data)
    })
}, [])

  return (
    <Card>
      <Card.Header>
        <h4>Payment Options</h4>
      </Card.Header>
      <Card.Body>
      ₹ {bookingdata.price}
        <Form onSubmit={handleSubmit}>
          <Form.Check
            type="radio"
            id="cashOnDelivery"
            label="Cash on Delivery"
            value="cashOnDelivery"
            checked={selectedOption === "cashOnDelivery"}
            onChange={handleOptionChange}
          />
          <Form.Check
            type="radio"
            id="onlinePayment"
            label="Online Payment"
            value="onlinePayment"
            checked={selectedOption === "onlinePayment"}
            onChange={handleOptionChange}
          />
          {selectedOption === "onlinePayment" && (
            <div>
               <input type="button" name="next" onClick={handleSubmit}
        class="next action-button" value="Continue Booking" />
            </div>
          )
          }
           {selectedOption === "cashOnDelivery" && (
            <div>
              <input type="button" name="next" onClick={handleSubmit}
        class="next action-button" value="Continue Booking" />
            </div>
          )
          }
         
         
        </Form>
      </Card.Body>
    </Card>
  );
};

export default PaymentOptions;
