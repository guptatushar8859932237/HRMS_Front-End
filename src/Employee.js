import React from "react"
import { Outlet, useNavigate } from "react-router-dom";
export default function Employee(){

    
    const navigate = useNavigate();
    const route = useNavigate();
    const route1 = useNavigate();
    const route2 = useNavigate();
    const route3 = useNavigate();
    const route4 = useNavigate();
    const route5 = useNavigate();
    const route6 = useNavigate();
    const route7 = useNavigate();
    const route8 = useNavigate();
    
    const route10 = useNavigate();
    const route11 = useNavigate();
    return(

        <>
  <nav class="navbar navbar-expand-lg menuhead">
                <div class="container-fluid navcolour ">
                    <img className="logot" src={require("../src/component/logo 2 (1).png")} alt="logo" />

                    <a href="/" data-bs-target="#sidebar" data-bs-toggle="collapse" class="rounded-3 ticon text-decoration-none mx-md-5 mx-3"><i class="bi bi-list bi-lg p-1 imgcolor"></i></a>
                    <div class="collapse navbar-collapse tushar navcolour " id="navbarSupportedContent">

                        <li className="imgcolor"> <i class="bi bi-search list imgcolor"></i> </li>
                        <li className="imgcolor"> <i class="bi bi-bell-fill list imgcolor"></i></li>
                        <li className="imgcolor" > <i class="bi bi-bounding-box  list imgcolor"></i></li>
                        <li className="imgcolor" onClick={() => navigate("/")}> <i class="bi bi-person-circle px-2 list imgcolor "></i> </li>

                    </div>
                </div>
            </nav>
            <div class="container-fluid">
                <div class="row flex-nowrap ">
                    <div class="col-auto px-0 menuhead">
                        <div id="sidebar" class="collapse collapse-horizontal show border-end">
                            <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">
                                <div class="list-group-item border-end-0 d-inline-block text-truncate imgcolor " data-bs-parent="#sidebar">
                                    <li class="nav-item navitm imgcolor">
                                        <div class="nav-link collapsed imgcolor" data-bs-target="#user-nav" data-bs-toggle="collapse"> <i class="bi-universal-access px-1 imgcolor"></i><span className="imgcolor">Master</span><i class="bi bi-chevron-down ms-auto  imgcolor px-5"></i> </div>
                                        <ul id="user-nav" class="nav-content collapse imgcolor " data-bs-parent="#sidebar-nav">
                                            <li class="navitm imgcolor"> <div className="imgcolor" onClick={() => route7("userdata")} > <i class="bi bi-ui-checks px-1  imgcolor"></i><span className="imgcolor">User Data </span> </div></li>
                                            <li class="navitm imgcolor"> <div className="imgcolor" onClick={() => route8("userform")} > <i class="bi bi-clipboard2-data-fill px-1 imgcolor"></i><span className="imgcolor">User From</span> </div></li>
                                        </ul>
                                    </li>
                                </div>
                                <div class="list-group-item border-end-0 d-inline-block text-truncate imgcolor" data-bs-parent="#sidebar">
                                    <li class="nav-item navitm imgcolor">
                                        <a href="/" class="nav-link collapsed imgcolor" data-bs-target="#user-nav1" data-bs-toggle="collapse"> <i class="bi bi-calendar3 p-1 imgcolor"></i><span className="imgcolor">Attendence</span><i class="bi bi-chevron-down ms-auto px-3 ml-3 imgcolor"></i> </a>
                                        <ul id="user-nav1" class="nav-content collapse imgcolor" data-bs-parent="#sidebar-nav">
                                            <li class="navitm imgcolor"> <div className="imgcolor" onClick={() => navigate("Attendence")} ><i class="bi bi-calendar2-check imgcolor"></i><span className="imgcolor">Attendence Punch</span> </div></li>
                                            <li class="navitm imgcolor"> <div className="imgcolor" onClick={() => route("AttendenceSummary")} > <i class="bi bi-calendar-week imgcolor" ></i><span className="imgcolor">Attendence Summery</span> </div></li>
                                        </ul>
                                    </li>
                                </div>
                                <li onClick={() => route5("Reimbursement")} class="list-group-item border-end-0 d-inline-block text-truncate imgcolor " data-bs-parent="#sidebar"><i class="bi bi-bricks px-1 imgcolor"></i> <span className="imgcolor">Reambusement</span></li>

                                <li onClick={() => route11("AttendenceAdmin")} class="list-group-item border-end-0 d-inline-block text-truncate imgcolor" data-bs-parent="#sidebar"><i class="bi bi-airplane-fill px-1 imgcolor"></i> <span className="imgcolor">Attendence Admin</span></li>


                                <div class="list-group-item border-end-0 d-inline-block text-truncate imgcolor " data-bs-parent="#sidebar">
                                    <li class="nav-item navitm imgcolor">
                                        <div class="nav-link collapsed " data-bs-target="#user-nav3" data-bs-toggle="collapse"> <i class="bi bi-calendar-fill px-1 imgcolor"></i><span className="imgcolor">Leave</span><i class="bi bi-chevron-down ms-auto px-5 imgcolor"></i> </div>
                                        <ul id="user-nav3" class="nav-content collapse imgcolor " data-bs-parent="#sidebar-nav">
                                            <li class="navitm py-2  imgcolor"> <div className="imgcolor" onClick={() => route1("LeaveApplication")} > <i class="bi bi-globe px-1  imgcolor"></i><span className="imgcolor">Leave Application </span> </div></li>
                                            <li class="navitm imgcolor"> <div className="imgcolor" onClick={() => route2("LeaveBalance")} > <i class="bi bi-window-x px-1 imgcolor"></i><span className="imgcolor">Leave Balance</span> </div></li>
                                        </ul>
                                    </li>
                                </div>
                               
                                <li onClick={() => route10("travell")} class="list-group-item border-end-0 d-inline-block text-truncate imgcolor" data-bs-parent="#sidebar"><i class="bi bi-airplane-fill px-1 imgcolor"></i> <span className="imgcolor">Travel</span></li>
                                <a href="/" class="list-group-item border-end-0 d-inline-block text-truncate imgcolor" data-bs-parent="#sidebar"><i class="bi bi-archive px-1 imgcolor"></i> <span className="imgcolor">Assests</span></a>
                                <li onClick={() => route6("Dailyreport")} class="list-group-item border-end-0 d-inline-block text-truncate imgcolor " data-bs-parent="#sidebar"><i class="bi bi-arrow-repeat px-1 imgcolor"></i> <span className="imgcolor">Daily Report </span></li>
                                <li onClick={() => route3("Holiday")} class="list-group-item border-end-0 d-inline-block text-truncate imgcolor " data-bs-parent="#sidebar"><i class="bi bi-envelope px-1 imgcolor"></i> <span className="imgcolor" >Holiday</span></li>
                                <li onClick={() => route4("Grivience")} class="list-group-item border-end-0 d-inline-block text-truncate imgcolor " data-bs-parent="#sidebar"><i class="bi bi-grid-3x3-gap-fill px-1 imgcolor"></i> <span className="imgcolor">Grivience</span> </li>
                                <a href="/" class="list-group-item border-end-0 d-inline-block text-truncate imgcolor" data-bs-parent="#sidebar"><i class="bi bi-bell-fill px-1 imgcolor"></i> <span className="imgcolor">Setting</span> </a>
                           
                            </div>
                        </div>
                    </div>

                    <main class="col ps-md-2 pt-2">


                        <Outlet />
                               

                    </main>
                </div>
            </div>




        </>
    )
}