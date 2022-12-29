import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Plumbing from './js_files/plumbing';
import SignIn from './signIn';
import SignUp from './signUp';

function App() {

    return (
        <div>
            <Header></Header>
           <Routes>
                <Route path="/"  element={<Home></Home>}></Route>
                <Route path="/sign_in" element={<SignIn></SignIn>}></Route>
                <Route path="/sign_up" element={<SignUp></SignUp>}></Route>
                <Route path="/plumbing" element={<Plumbing ></Plumbing>}></Route>
            </Routes>
            <br></br>
            <Footer></Footer>
         </div>
       
    );
}

export default App;
