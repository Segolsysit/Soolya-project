import { Route, Routes} from 'react-router-dom';
import React, {Suspense} from "react" 
// import './App.css';
import Home from './home';
import Plumbing from './js_files/plumbing';
import SignIn from './signIn';
import SignUp from './signUp';
import ganapathy_raj from "./images/3.jpg";
import praveen from "./images/2.jpg";
import santhosh_kumar from "./images/1.jpg";
// import Electrician from './js_files/electrician';
import PlumberProfile from './js_files/plumber_profile';
import Serviceman from './js_files/serviceman';
import DashBoard from './js_files/dashboard';
import NotFound from './js_files/NotFound';

import ForgetPassword from './js_files/forgetPassword';
import EmployeeProfile from './js_files/Employee-Profile';
import Category from './js_files/category';
import SubCategory from './js_files/subCategory';
// import Cart from './js_files/Cart';
import Categorysetup from './Categorysetup';
import Sub_Category_Setup from './Sub_Category_Setup';
import Servicelist from './Servicelist';
import Admin from './Admin';
import Add_new_service from './Add_new_service';
import Cart from './js_files/Cart';
import List from './list';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Header from './header';
import ApplicationForm from './js_files/applictionform';
import Footer from './footer';
import Servicemanlist from './Servicemanlist';
import CustomerDetails from './js_files/customerdetails';
import BookingSteps from './js_files/bookingsteps';
import BookingDetails from './js_files/bookingdetails';
import BookingBill from './js_files/bookingbill';
import BookingFinish from './js_files/bookingfinish';
import Vendor_admin from './vendor_admin';
import Orders from './Orders';
import Rejected_list from './Rejected_list';
import Admin_login from './admin_login';
import Vendor_Orders from './Vendor_orders';
import Vendor_forgetpassword from './js_files/Vendor_forgotpassword';


function App() {


   
    const array = [
        {
            id: 1,
            img: ganapathy_raj,
            name: "Ganapathy raj",
            type: "plumbing",
            timing: "Timing : 9.30 AM - 6 PM",
            address: "553/A, Sanganoor Main Road Ganapathy Pudur, erode-641006.",
            district: "erode"

        },
        {
            id: 2,
            img: praveen,
            name: "Praveen",
            type: "electrician",
            timing: "Timing : 10 AM - 7:30 PM",
            address: "806 Wisdom Tree Neelambur, erode-638 011.",
            district: "erode"

        },
        {
            id: 3,
            img: santhosh_kumar,
            name: "Santhosh Kumar",
            type: "electrician",
            timing: "Timing : 24 hrs",
            address: "3/59, Gandhipuram 3th Street Gandhipuram, Coimbatore-641012.",
            district: "Coimbatore"

        },
        {
            id: 4,
            img: santhosh_kumar,
            name: "Santhosh Kumar",
            type: "plumbing",
            timing: "Timing : 24 hrs",
            address: "3/59, Gandhipuram 3th Street Gandhipuram, Coimbatore-641012.",
            district: "Coimbatore"
        }

    ];

 return (

      
        
<React.Fragment>
        <div>
    <ToastContainer/>

           <Routes>
            <Route path='/header' element={<Header></Header>}></Route>
                <Route path="/"  element={<Home array ={array}></Home>}></Route>
                <Route path="/sign_up" element={<SignUp></SignUp>}></Route>
                <Route path="/sign_in" element={<SignIn ></SignIn>}></Route>
                <Route path="service_man" element={<Serviceman></Serviceman>}></Route>
                <Route path="/admin" element={<Admin_login></Admin_login>}></Route>
                <Route path="/admin_home" element={<Admin></Admin>}/>
                <Route path="/categorysetup" element={<Categorysetup></Categorysetup>}></Route>
                <Route path="/subcategorysetup" element={<Sub_Category_Setup></Sub_Category_Setup>}></Route>
                <Route path="/servicelist" element={<Servicelist></Servicelist>}></Route>
                <Route path="/Add_new_service" element={<Add_new_service></Add_new_service>}></Route>
                <Route path="/cart" element={<Cart ></Cart>}></Route>
                <Route path='/servicemanlist' element={<Servicemanlist></Servicemanlist>}></Route>
                <Route path="/vendor_admin" element={<Vendor_admin></Vendor_admin>}></Route>
                <Route path='/orders' element={<Orders></Orders>}/>
                <Route path="/rejectedlist" element={<Rejected_list/>}></Route>
                <Route path={'/vendors_list'} element={<Plumbing array={array}></Plumbing>}></Route>
                <Route path="/plumber_profile" element={<PlumberProfile></PlumberProfile>}></Route>
                <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
                <Route path="/forget_password" element={<ForgetPassword></ForgetPassword>}></Route>
                <Route path="/emp-profile" element={<EmployeeProfile/>}></Route>
                <Route path="/category" element={<Suspense fallback="Loading....."><Category></Category></Suspense>}></Route>
                <Route path="/sub_category" element={<SubCategory></SubCategory>}></Route>
                <Route path="/list" element={<List></List>}></Route>
                <Route path="/customerdetails" element={<CustomerDetails></CustomerDetails>}></Route>
                <Route path="/bookingsteps" element={<BookingSteps></BookingSteps>}></Route>
                <Route path="/bookingdetails" element={<BookingDetails></BookingDetails>}></Route>
                <Route path="/bookingbill" element={<BookingBill></BookingBill>}></Route>
                <Route path="/bookingfinish" element={<BookingFinish></BookingFinish>}></Route>
                <Route path="/application" element={<ApplicationForm></ApplicationForm>}></Route>
                <Route path="/vendor_orders" element={<Vendor_Orders></Vendor_Orders>}/>
                <Route path='/vendor_forgotpassword' element={<Vendor_forgetpassword></Vendor_forgetpassword>}/>
                <Route path="/*" element={<NotFound></NotFound>}></Route>                
            </Routes>
            <br></br>
            {/* <Footer></Footer> */}
            
         </div>
         </React.Fragment>
    );
}

export default App;
