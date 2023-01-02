import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Plumbing from './js_files/plumbing';
import SignIn from './signIn';
import SignUp from './signUp';
import ganapathy_raj from "./images/3.jpg";
import praveen from "./images/2.jpg";
import santhosh_kumar from "./images/1.jpg";
function App() {
    const array = [
        {
            id: 1,
            img: ganapathy_raj,
            name: "Ganapathy raj",
            type: "plumber",
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
            type: "plumber",
            timing: "Timing : 24 hrs",
            address: "3/59, Gandhipuram 3th Street Gandhipuram, Coimbatore-641012.",
            district: "Coimbatore"
        }

    ];
    return (
        <div>
            <Header></Header>
           <Routes>
                <Route path="/"  element={<Home array ={array}></Home>}></Route>
                <Route path="/sign_in" element={<SignIn></SignIn>}></Route>
                <Route path="/sign_up" element={<SignUp></SignUp>}></Route>
                <Route path="/plumbing" element={<Plumbing array={array}></Plumbing>}></Route>
            </Routes>
            <br></br>
            <Footer></Footer>
         </div>
       
    );
}

export default App;
