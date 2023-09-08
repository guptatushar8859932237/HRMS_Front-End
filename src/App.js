import React from "react"

import Login from "./component/loginform";

// import Userform from "./Userform";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./Home";
import Attendence from "./Attendence";
import AttendenceSummary from "./component/AttendenceSummary";
import SideMenu from "./component/sidebarnavbar";
import LeaveApplication from "./LeaveApplication";
import LeaveBalance from "./LeaveBalance";
import Holiday from "./holiday";
import Grivirnce from "./component/grivience";
import Reimbursement from "./Reimbursement";
import Dailyreport from "./component/dailyReport";
import Userform from "./Userform";
import Userdata from "./Userdata";
import Travell from "./component/travell";
import Dashboard from "./component/profile";
// import Attendencedataview from "./component/attendencedataview";
import AttendenceAdmin from "./component/attendenceAdmin";
import Demo from "./component/Demo";
import Employee from "./Employee";
import Assests from "./assests";
// import Assests from "./component/Assests";
// import Assests from "./component/Assests";
// import Assests from "./component/Assests";

export default function App() {
 return (
  <>                  
<BrowserRouter>
<Routes>
<Route path="" element={<Login />} />

<Route path="dashboard" element={<SideMenu />} >
<Route path="" element={<Home />} /> 

<Route path="AttendenceSummary" element={<AttendenceSummary />} />
<Route path="Attendence" element={<Attendence />} />
<Route path="LeaveApplication" element={<LeaveApplication />} />
<Route path="LeaveBalance" element={<LeaveBalance />} />
<Route path="holiday" element={<Holiday />} />
<Route path="Grivience" element={<Grivirnce />} />
<Route path="Reimbursement" element={<Reimbursement />} />
<Route path="DailyReport" element={<Dailyreport />} />
<Route path="userform" element={<Userform />} />
<Route path="userdata" element={<Userdata />} />
<Route path="dashboard" element={<Dashboard />} />
<Route path="Travell" element={<Travell />} />
<Route path="Attendenceadmin" element={<AttendenceAdmin />} />
<Route path="Attendencesummarydata" element={<Userdata />} />
<Route path="Demo" element={<Demo />} />
<Route path="assests" element={<Assests />} />
{/* <Route path="Assests" element={<Assests />} /> */}

</Route>
<Route path="/tushar" element={<Userdata />}  />
<Route path="/employee" element={<Employee />}  />
<Route path="/Attendencesummarydata" element={<Userdata />} />


</Routes>
</BrowserRouter>   

    </>
  );
}


// import React from "react"
// import Login from "../src/component/loginform"
// import { BrowserRouter,Routes,Route } from "react-router-dom"
// import SideMenu from "./component/sidebarnavbar"
// import Userdata from "./Userdata"
// // import Home from "./Home"
// export default function App(){
//   return(
//     <>
//     <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<Login />} />
//     <Route path="/dashboard" element={<SideMenu />} />
//     <Route path="userdata" element={<Userdata />} />
   


//     </Routes>
//     </BrowserRouter>
    
//     </>
//   )
// }
