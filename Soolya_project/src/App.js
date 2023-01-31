import { Route, Routes } from 'react-router-dom';
import React, {useState} from "react" 
// import './App.css';
import Footer from './footer';
// import Header from './header';
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
// import DashBoard from './js_files/dashboard';
import ForgetPassword from './js_files/forgetPassword';
import EmployeeProfile from './js_files/Employee-Profile';
import Category from './js_files/category';
import SubCategory from './js_files/subCategory';
// import Cart from './js_files/Cart';

import Categorysetup from './Categorysetup';
import Admin from './Admin';
import Cart from './js_files/Cart';

export let AppContext =React.createContext(true)

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

    const [tog,setTog] = useState(true);
    console.log(tog);
    
    return (
        
<React.Fragment>
    <AppContext.Provider value={tog}>
        <div>
            {/* <Header></Header> */}
           <Routes>
                <Route path="/"  element={<Home array ={array}></Home>}></Route>
                <Route path="/sign_up" element={<SignUp></SignUp>}></Route>
                <Route path="/sign_in" element={<SignIn setTog={setTog}></SignIn>}></Route>
                <Route path="service_man" element={<Serviceman></Serviceman>}></Route>
                <Route path="/admin" element={<Admin></Admin>}></Route>
                <Route path="/categorysetup" element={<Categorysetup></Categorysetup>}></Route>
                {/* {array.map((arr)=>(
                <Route path={`/${arr.type || arr.district}`} element={<Plumbing array={array}></Plumbing>}></Route>
                 ))} */}

                
                <Route path={'/vendors_list'} element={<Plumbing array={array}></Plumbing>}></Route>

                 
                {/* <Route path="/electrician" element={<Electrician array={array}></Electrician>}></Route> */}

                <Route path="/plumber_profile" element={<PlumberProfile></PlumberProfile>}></Route>
                {/* <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route> */}
                <Route path="/forget_password" element={<ForgetPassword></ForgetPassword>}></Route>
                <Route path="/emp-profile" element={<EmployeeProfile/>}></Route>
                <Route path="/category" element={<Category></Category>}></Route>
                <Route path="/sub_category" element={<SubCategory></SubCategory>}></Route>
            </Routes>
            <br></br>
            {/* <Footer></Footer> */}
            
         </div>
         </AppContext.Provider>
         </React.Fragment>
    );
}

export default App;
