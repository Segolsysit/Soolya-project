import "../css_files/applicationform.css";
import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableRow, TableHead } from '@mui/material';
import Switch from '@mui/material/Switch';
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


function ApplicationForm() {
    
    const [cookies] = useCookies(["cookie-name"]);
    const nav = useNavigate();
    // useEffect(() => {
    //   if (cookies.vjwt2) {
    //     nav("/");
    //   }

    
    // }, [cookies, nav]);

    let serialNumber = 1;
    const [getServiceManData, setGetServiceManData] = useState([]);
    const [viewdata,setviewdata] = useState([]);
    // const [Username,setusername] = useState("")
    // const [email,setemail] = useState("")
    // const [password,setpassword] = useState("")

    const aemail = localStorage.getItem("adminemail")
    const apassword = localStorage.getItem("adminpassword")


    const verify = ()=>{
        if(aemail === null && apassword === null){
            nav("/admin")
        }
    }

    const getdata1 = () =>{
        axios.get("http://localhost:3001/serviceman/get_user").then((response)=>{
            setGetServiceManData(response.data);
            // console.log(response);
        })
    }

    useEffect(()=>{
        getdata1()
        verify()
    });

    const viewdeatils = (id) => {
        axios.get(`http://localhost:3001/serviceman/get_by_id/${id}`).then((response) => {
         setviewdata(response.data);
         console.log(response.data);
        })
    }
    const adminlogout = ()=>{
        localStorage.removeItem("adminemail")
        localStorage.removeItem("adminpassword")
        nav("/admin")
    }

    const [values, setValues] = useState({
        Username:"",
        Email: "", 
        Password: ""
    });

    const initialErrors = {
        Username:null,
        Email:null,
        Password:null,
    }
     
    const [errors,setErrors] = useState(initialErrors);

    const [loading,setLoading] = useState(false);

    const vendor_login = async (e)=>{
        e.preventDefault()
          console.log(values);

        let errors = initialErrors;
        let hasErrors = false;
          
        if (values.Username === ""){
            errors.Username = "User name is required"
        }
        if (values.Email === ""){
            errors.Email = "Email is required"
        }
        if (values.Password === ""){
            errors.Password = "Password is required"
        }
        if(!hasErrors){
      const {data} = await  axios.post("http://localhost:3001/vendor_register/register",{

      ...values
            // Username:values.Username,
            // Email:values.Email,
            // Password:values.Password
        },
        {withCredentials:true}
        )
        console.log(data);
        if (data) {
            if (data.errors) {
                const { Email,Password} = data.errors;
                if (Email){
                    toast.error(Email,{
                        position: "bottom-right",
                    });
                }
                else if (Password) {
                    toast.error(Password,{
                        position: "bottom-right",
                    });
                }
            } else {
                nav("/")
            }
        }
    }
        setLoading(false);

    setErrors({...errors})
    }
    

    const reject_data = ()=>{
        // e.preventDefault()
         axios.post("http://localhost:3001/reject_api/new_rejection",{
            WorkType:viewdata.WorkType,
            district:viewdata.district,
            FirstName:viewdata.FirstName,
            LastName:viewdata.LastName,
            MobilePhoneNumber:viewdata.MobilePhoneNumber,
            StreetAddress:viewdata.StreetAddress,
            PostalCode:viewdata.PostalCode,
            Email:viewdata.Email,
            IdentityType:viewdata.IdentityType,
            IdentityNumber:viewdata.IdentityNumber,
         })
        //  deletedata(id)
        // console.log(viewdata._id);
    axios.delete(`http://localhost:3001/serviceman/delete_item/${viewdata._id}`).then(() => {
        toast.error('😈 Deleted Successed!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",

        });
    })        
    }
    const [style, setstyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")

    const changeStyle = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setstyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled")
        }
        else {
            setstyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    }

    const changeStyle1 = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setstyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1")
        }
        else {
            setstyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    }

    return (
        <div>
            {/* <!-- Page Wrapper --> */}
            <div id="wrapper">

                {/* <!-- Sidebar --> */}
                <ul className={style} id="accordionSidebar">

                    {/* <!-- Sidebar - Brand --> */}
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    </a>
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                    </div>


                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider my-0" />

                    {/* <!-- Nav Item - Dashboard --> */}
                    <li className="nav-item active">
                        <a className="nav-link" href="/admin">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="/application">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Application</span></a>
                    </li>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider" />

                    {/* <!-- Heading --> */}
                    <div className="sidebar-heading">
                        SERVICE MANAGEMENT
                    </div>

                    {/* <!-- Nav Item - Pages Collapse Menu --> */}
                    <li className="nav-item">
                        <a className="nav-link" href="/orders">
                            <i class="fa-regular fa-link-horizontal"></i>
                            <span>Orders</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i class="fa-solid fa-shapes"></i>
                            <span>Service Categories</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                {/* <h6 className="collapse-header">Custom Components:</h6> */}
                                <a className="collapse-item" href="/categorysetup">Category Setup</a>
                                <a className="collapse-item" href="/subcategorysetup">Sub Category Setup</a>
                            </div>
                        </div>
                    </li>

                    {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-wrench"></i>
                            <span>Services</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                {/* <h6 className="collapse-header">Custom Utilities:</h6> */}
                                <a className="collapse-item" href="/Servicelist">Service List</a>
                                <a className="collapse-item" href="/Add_new_service">Add New Service</a>
                                {/* <a className="collapse-item" href="utilities-animation.js">Animations</a>
<a className="collapse-item" href="utilities-other.js">Other</a> */}
                            </div>
                        </div>
                    </li>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider" />

                    {/* <!-- Heading --> */}
                    <div className="sidebar-heading">
                        SERVICE MAN MANAGEMENT
                    </div>

                    {/* <!-- Nav Item - Pages Collapse Menu --> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages1"
                            aria-expanded="true" aria-controls="collapsePages1">
                            <i className="fas fa-fw fa-user"></i>
                            <span>SERVICE MAN</span>
                        </a>
                        <div id="collapsePages1" className="collapse" aria-labelledby="headingPages1" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                {/* <h6 className="collapse-header">Login Screens:</h6> */}
                                <a className="collapse-item" href="/servicemanlist">Service Man List</a>
                                <a className="collapse-item" href="/rejectedlist">Rejected List</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages"
                            aria-expanded="true" aria-controls="collapsePages">
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </a>
                        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Login Screens:</h6>
                                <a className="collapse-item" href="/login.js">Login</a>
                                <a className="collapse-item" href="register.js">Register</a>
                                <a className="collapse-item" href="forgot-password.js">Forgot Password</a>
                                <div className="collapse-divider"></div>
                                <h6 className="collapse-header">Other Pages:</h6>
                                <a className="collapse-item" href="err404.js">404 Page</a>
                                <a className="collapse-item" href="blank.js">Blank Page</a>
                            </div>
                        </div>
                    </li>

                    {/* <!-- Nav Item - Charts --> */}
                    <li className="nav-item">
                        <a className="nav-link" href="charts.js">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Charts</span></a>
                    </li>

                    {/* <!-- Nav Item - Tables --> */}
                    <li className="nav-item">
                        <a className="nav-link" href="tables.html">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Tables</span></a>
                    </li>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider d-none d-md-block" />

                </ul>
                {/* <!-- End of Sidebar --> */}

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        {/* <!-- Topbar --> */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/* <!-- Sidebar Toggle (Topbar) --> */}
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                                <i className="fa fa-bars"></i>
                            </button>

                            {/* <!-- Topbar Search --> */}
                            <form
                                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            {/* <!-- Topbar Navbar --> */}
                            <ul className="navbar-nav ml-auto">

                                {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="/" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw"></i>
                                    </a>
                                    {/* <!-- Dropdown - Messages --> */}
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>

                                {/* <!-- Nav Item - Alerts --> */}
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-bell fa-fw"></i>
                                        {/* <!-- Counter - Alerts --> */}
                                        <span className="badge badge-danger badge-counter">3+</span>
                                    </a>
                                    {/* <!-- Dropdown - Alerts --> */}
                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="alertsDropdown">
                                        <h6 className="dropdown-header">
                                            Alerts Center
                                        </h6>
                                        <a className="dropdown-item d-flex align-items-center" href="/">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-primary">
                                                    <i className="fas fa-file-alt text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 12, 2019</div>
                                                <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="/">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-success">
                                                    <i className="fas fa-donate text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 7, 2019</div>
                                                $290.29 has been deposited into your account!
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="/">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-warning">
                                                    <i className="fas fa-exclamation-triangle text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 2, 2019</div>
                                                Spending Alert: We've noticed unusually high spending for your account.
                                            </div>
                                        </a>
                                        <a className="dropdown-item text-center small text-gray-500" href="/">Show All Alerts</a>
                                    </div>
                                </li>

                                {/* <!-- Nav Item - Messages --> */}
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-envelope fa-fw"></i>
                                        {/* <!-- Counter - Messages --> */}
                                        <span className="badge badge-danger badge-counter">7</span>
                                    </a>
                                    {/* <!-- Dropdown - Messages --> */}
                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="messagesDropdown">
                                        <h6 className="dropdown-header">
                                            Message Center
                                        </h6>
                                        <a className="dropdown-item d-flex align-items-center" href="/">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                                    alt="..." />
                                                <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                    problem I've been having.</div>
                                                <div className="small text-gray-500">Emily Fowler · 58m</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="/">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                                    alt="..." />
                                                <div className="status-indicator"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">I have the photos that you ordered last month, how
                                                    would you like them sent to you?</div>
                                                <div className="small text-gray-500">Jae Chun · 1d</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="/">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                                    alt="..." />
                                                <div className="status-indicator bg-warning"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">Last month's report looks great, I am very happy with
                                                    the progress so far, keep up the good work!</div>
                                                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="/">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                    alt="..." />
                                                <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                                    told me that people say this to all dogs, even if they aren't good...</div>
                                                <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item text-center small text-gray-500" href="/">Read More Messages</a>
                                    </div>
                                </li>

                                <div className="topbar-divider d-none d-sm-block"></div>

                                {/* <!-- Nav Item - User Information --> */}
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="/" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                        <img className="img-profile rounded-circle"
                                            src="img/undraw_profile.svg"
                                            alt='...' />
                                    </a>
                                    {/* <!-- Dropdown - User Information --> */}
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="/">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a className="dropdown-item" href="/">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>
                                        <a className="dropdown-item" href="/">
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>

                            </ul>

                        </nav>
                        {/* <!-- End of Topbar --> */}

                        <div >
                            <Table className='table-cat'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>SN</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Contact info</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {getServiceManData.map((data) =>
                                        <TableRow >
                                            <TableCell>{serialNumber++}</TableCell>
                                            <TableCell>{data.FirstName} {data.LastName}</TableCell>
                                            <TableCell>
                                                <p>{data.Email}</p>
                                                <p>{data.MobilePhoneNumber}</p>
                                            </TableCell>
                                            <TableCell>
                                                <Switch color="primary" /></TableCell>
                                            <TableCell>
                                                {/* <Button><i class="fa-solid fa-pencil"></i></Button> */}
                                                <Button
                                                    type="button"  data-toggle="modal" data-target="#exampleModalCenter"
                                                    onClick={()=> viewdeatils(data._id)}
                                                ><i class="fa-solid fa-eye"></i></Button>
                                                {/* <Button onClick={() => delete_data(data._id)}><i class="fa-solid fa-trash"></i></Button> */}
                                            </TableCell>
                                        </TableRow>
                                    )}



                                </TableBody>
                            </Table>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- Logout Modal--> */}
            <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <button className="btn btn-primary" onClick={adminlogout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            {/* <!-- Modal 1 --> */}
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title"  id="exampleModalLongTitle">Service Man Deatails</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                                <div>
                                <h3>Name : {viewdata.FirstName} {viewdata.LastName} </h3><br/>
                                <h3>Mobile Number : {viewdata.MobilePhoneNumber}</h3><br/>
                                <h3>Email : {viewdata.Email}</h3><br/>
                                <h3>Work Type : {viewdata.WorkType}</h3><br/>
                                <h3>Address : {viewdata.StreetAddress}</h3><br/>
                                <div class="d-flex justify-content-around">
                                <button type="button" onClick={() => reject_data()}
                                class="btn btn-danger" data-dismiss="modal" aria-label="Close">Reject</button> 

                                <button type="button" data-toggle="modal" data-target="#exampleModalCenter1"
                                class="btn btn-primary" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">Accept</span></button>
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- Modal 2 --> */}
            <div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title"  id="exampleModalLongTitle">Service Man Registration</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={vendor_login}>
                                <div>
                                <label>User Name</label><br/>
                                <input onChange={(e)=>{
                                    setValues({ ...values, [e.target.name]:e.target.value})}}
                                    name="Username"></input><br/><br/>
                                    {errors.Username?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                         
                            <h6>{errors.Username}</h6>
                        </div>
                    </div>):null
                    }
                                <label>Email</label><br/>
                                <input onChange={(e)=>{
                                    setValues({...values, [e.target.name]:e.target.value})}}
                                    name="Email" type="email"></input><br/><br/>
                                    {errors.Email?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                         
                            <h6>{errors.Email}</h6>
                        </div>
                    </div>):null
                    }
                                <label>Password</label><br/>
                                <input onChange={(e)=>{
                                    setValues({...values, [e.target.name]:e.target.value})}}
                                    name="Password" type="password"></input><br/><br/>
                                    {errors.Password?
                        (<div id="d_flex" className="sign_in_form_validation">
                        <div>
                            <i id="cross_sign" class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div>
                         
                            <h6>{errors.Password}</h6>
                        </div>
                    </div>):null
                    }
                                <Button type="submit">Creat</Button>
                                </div>
                                </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationForm;