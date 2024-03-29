import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import {
    Button,
    TextField,
    FormHelperText,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHead,
    useStepContext,
} from '@mui/material';
import { toast } from 'react-toastify';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


function Add_new_service() {

    const [style, setstyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
    const [getData, setgetData] = useState([]);

    const [service, setservice] = useState("");
    const [category, setCatagory] = useState("");
    const [subcategory, setsubCatagory] = useState("");
    const [discription, setdiscription] = useState("");
    const [price, setprice] = useState("");
    const [img, setImg] = useState("");
    const [subcatlist, setsubcatlist] = useState([]);
    const [servicelist, setServicelist] = useState([]);
    const [getByIdList, setgetByIdList] = useState([]);
    const [Editservice, setEditservice] = useState("");
    const [Editcategory, setEditcategory] = useState("");
    const [Editsubcategory, setEditsubcategory] = useState("");
    // const [discription, setdiscription] = useState("");
    const [Editprice, setEditprice] = useState("");
    const [Editimg, setEditimg] = useState("");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let a = 1;

    const aemail = localStorage.getItem("adminemail")
    const apassword = localStorage.getItem("adminpassword")
    const nav = useNavigate()


    const verify = ()=>{
        if(aemail === null && apassword === null){
            nav("/admin")
        }
    }

    const [orderdetails, setorderdetails] = useState([])


    const getdata2 = () => {
        axios.get("http://localhost:3001/booking_api/booking_data").then((res) => {
            setorderdetails(res.data)
        })}


    const handleImgChange = (e) => {
        let file = e.target.files[0]
        if (file.size > 2000000) {


            toast.error("file size should be less than 2MB", {
                position: "top-center",
                theme: "colored"
            })

        }
        else if (file.type !== "image/jpeg" && file.type !== "image/jpg") {

            toast.error("jpeg,jpg,png can upload", {
                position: "top-center"
            })

        }
        else {
            setImg(file)
        }
    }

    const modelstyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const AddService = (e) => {

        e.preventDefault();

        if (service.length === 0) {
            toast.error("enter service", {
                position: "top-right",
                theme: "colored"

            })
        }
        else if (category.length === 0) {
            toast.error("enter category", {
                position: "top-right",
                theme: "colored"
            })
        }
        else if (subcategory.length === 0) {
            toast.error("enter sub category", {
                position: "top-right",
                theme: "colored"
            })
        }
        else if (discription.length === 0) {
            toast.error("enter discription", {
                position: "top-right",
                theme: "colored"
            })
        }
        else if (price.length === 0) {
            toast.error("enter price amount", {
                position: "top-right",
                theme: "colored"
            })
        }
        else if (img.length === 0) {
            if (img.size > 2000000) {


                toast.error("file size should be less than 2MB", {
                    position: "top-center",
                    theme: "colored"
                })
            }


            toast.error("please upload service image", {
                position: "top-right",
                theme: "colored"
            })
        }
        else if (img.type !== "image/jpeg" && file.type !== "image/jpg") {

            toast.error("jpeg,jpg,png can upload", {
                position: "top-center"
            })
        }

        else {
            const formdata = new FormData()
            formdata.append("Service", service);
            formdata.append("Category", category);
            formdata.append("Subcategory", subcategory);
            formdata.append("Discription", discription);
            formdata.append("price", price);
            formdata.append("file", img)
            axios.post("http://localhost:3001/service_api/new_service/", formdata).then((res) => {

                toast.success(' uploaded Successed!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",

                });

                setservice("")
                setCatagory("")
                setsubCatagory("")
                setdiscription("")
                setprice("")
                setImg("")
                // file.current.value = null
            })
        }
    }

    const EditList = (id) => {
        handleOpen()
        axios.get(`http://localhost:3001/service_api/new_fetch_service_items/${id}`).then((res) => {
            setgetByIdList(res.data)
            console.log(res.data);
        })
    }

    const saveChangeList = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("Service", Editservice)
        formData.append("Category", Editcategory)
        formData.append("Subcategory", Editsubcategory)
        formData.append("price", Editprice)
        formData.append("file", Editimg)

        axios.patch(`http://localhost:3001/service_api/update_service/${getByIdList._id}`, formData).then(() => {
            alert("ListUpdated")
        })

        handleClose()

    }

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

    useEffect(() => {
        verify()
        axios.get("http://localhost:3001/api/fetch_items").then((res) => {
            setgetData(res.data);
            // console.log(res.data);
        })
        axios.get("http://localhost:3001/sub_api/new_fetch_items").then((res) => {
            setsubcatlist(res.data);
            // console.log(res.data);
        })

        axios.get("http://localhost:3001/service_api/new_fetch_service_items").then((res) => {
            setServicelist(res.data)
            // console.log(servicelist);

        })
     getdata2()
    }, [servicelist])

    const delete_list = (id) => {
        axios.delete(`http://localhost:3001/service_api/delete_item/${id}`).then(() => {

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

    const localpath = "http://localhost:3001/"
    return (
        <div>
            <body id="page-top">

                {/* <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/* <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar">

                        {/* <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">Soolya</div>
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
                                <span>Orders
                                <span className="badge badge-danger badge-counter">{orderdetails.length}</span>
                                    </span></a>
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
                                    <a className="collapse-item" href="utilities-border.js">Add New Service</a>
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

                        {/* <!-- Sidebar Toggler (Sidebar) --> */}
                        {/* <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
        </div> */}

                        {/* <!-- Sidebar Message --> */}
                        {/* <div className="sidebar-card d-none d-lg-flex">
            <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
            <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
            <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
        </div> */}

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

                            <div className="container-fluid">
                                <h1>Add New Service</h1>
                                <div className="category_form_div">
                                    <form className="category_form" id="category_form"
                                        onSubmit={AddService} >
                                        <TextField type="text" label="Service"
                                            value={service}
                                            onChange={(e) => setservice(e.target.value)}
                                        /><br></br>
                                        <FormControl sx={{ minWidth: 100 }}>
                                            <InputLabel id="demo-simple-select-label"
                                            >Select Category</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Select Category"
                                                value={category}
                                                onChange={(e) => setCatagory(e.target.value)}>
                                                {getData.map((data) => (
                                                    <MenuItem value={data.catagorySetup}>{data.catagorySetup}</MenuItem>
                                                ))
                                                }
                                            </Select>
                                            <FormHelperText></FormHelperText>
                                        </FormControl><br></br>
                                        <FormControl sx={{ minWidth: 100 }}>
                                            <InputLabel id="demo-simple-select-label"
                                            >Select Sub Category</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Select Category"
                                                value={subcategory}
                                                onChange={(e) => setsubCatagory(e.target.value)}>
                                                <MenuItem value="sub" selected disabled>Select Sub Category</MenuItem>

                                                {subcatlist.map((subcatlist) => (
                                                    <MenuItem value={subcatlist.Subcategory}>{subcatlist.Subcategory}</MenuItem>
                                                ))
                                                }
                                            </Select>
                                            <FormHelperText></FormHelperText>
                                        </FormControl><br></br>
                                        <TextField rows={3} multiline type="text" label="Short Discription*"
                                            value={discription}
                                            onChange={(e) => setdiscription(e.target.value)}
                                        /><br></br>
                                        <TextField type="number" label="Price*"
                                            onChange={(e) => setprice(e.target.value)}
                                            value={price}
                                        /><br></br>
                                        <TextField type="file" id="file" onChange={handleImgChange} /><br></br>
                                        <Button type='submit' variant='contained'>Addservice</Button><br></br>
                                        <Button type='reset' variant='contained'>clear</Button>

                                    </form>
                                </div>
                            </div>
                            <div className='Addservice_list'>
                                <Table className='table-cat'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>SN</TableCell>
                                            <TableCell>service</TableCell>
                                            <TableCell>category</TableCell>
                                            <TableCell>subCategory</TableCell>
                                            <TableCell>price</TableCell>
                                            <TableCell>Image</TableCell>

                                            <TableCell>Edit</TableCell>
                                            <TableCell>Delete</TableCell>




                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            servicelist.map((data, index) => (


                                                <TableRow key={index}>
                                                    <TableCell>{a++}</TableCell>
                                                    <TableCell><p>{data.Service}</p></TableCell>
                                                    <TableCell><p>{data.Category}</p></TableCell>
                                                    <TableCell><p>{data.Subcategory}</p></TableCell>
                                                    <TableCell><p><i class="fa-solid fa-indian-rupee-sign"></i>{data.price}</p></TableCell>
                                                    <TableCell><img src={localpath + data.filename} style={{ width: "5em", height: "5em" }} alt=".........."></img> </TableCell>
                                                    <TableCell><Button onClick={() => EditList(data._id)}><i class="fa-solid fa-pencil"></i></Button></TableCell>
                                                    <TableCell><Button onClick={() => delete_list(data._id)}><i class="fa-regular fa-trash-can" style={{ color: "red" }}></i></Button></TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>

                            </div>
                            <div>
                                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={modelstyle}>
                                        <form className="category_form" id="category_form" onSubmit={saveChangeList}>
                                            <TextField type="text" label="Service" onChange={(e) => setEditservice(e.target.value)} /><br></br>
                                            <FormControl sx={{ minWidth: 100 }}>
                                                <InputLabel id="demo-simple-select-label"
                                                >Select Category</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Select Category"
                                                    value={Editcategory}
                                                    onChange={(e) => setEditcategory(e.target.value)}>
                                                    {getData.map((data) => (
                                                        <MenuItem value={data.catagorySetup}>{data.catagorySetup}</MenuItem>
                                                    ))
                                                    }
                                                </Select>
                                                <FormHelperText></FormHelperText>
                                            </FormControl><br></br>
                                            <FormControl sx={{ minWidth: 100 }}>
                                                <InputLabel id="demo-simple-select-label">Select Sub Category</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Select Category"
                                                    value={Editsubcategory}
                                                    onChange={(e) => setEditsubcategory(e.target.value)}>

                                                    {/* <MenuItem value="sub" selected disabled>Select Sub Category</MenuItem> */}

                                                    {subcatlist.map((subcatlist) => (
                                                        <MenuItem value={subcatlist.Subcategory}>{subcatlist.Subcategory}</MenuItem>
                                                    ))
                                                    }
                                                </Select>
                                                <FormHelperText></FormHelperText>
                                            </FormControl><br></br>
                                            <TextField type="text" label="price" onChange={(e) => setEditprice(e.target.value)} /><br></br>
                                            <TextField type="file" onChange={(e) => setEditimg(e.target.files[0])} /><br></br>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" onClick={() => handleClose()}>Close</button>
                                                <button type="submit" class="btn btn-primary" >Save changes</button>
                                            </div>
                                        </form>
                                    </Box>
                                </Modal>
                            </div>

                        </div>
                        {/* <!-- End of Main Content --> */}

                        {/* <!-- Footer --> */}
                        {/* <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Soolya 2023</span>
                                </div>
                            </div>
                        </footer> */}
                        {/* <!-- End of Footer --> */}

                    </div>
                    {/* <!-- End of Content Wrapper --> */}

                </div>
                {/* <!-- End of Page Wrapper --> */}

                {/* <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

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
                                <a className="btn btn-primary" href="login.js">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}


export default Add_new_service