
import React, {useEffect} from "react"
import "./App.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home() {

  const [userData, setUserData] = React.useState("");
  const [userRole, setUserRole] = React.useState("employee");
  const routenavigate = useNavigate();

React.useEffect(()=>{
const getcurrentuser=()=>{
if(!localStorage.getItem("user-data")){
 routenavigate("/")
}
}
getcurrentuser()
},[])

  React.useEffect(() => {
    const getData = async () => {
        setUserData(await JSON.parse(localStorage.getItem("user-data")));
       
        setUserRole(userData?.role);
        if (userData.role === "admin") {
          routenavigate("/dashboard/Dashboard");
        }
    }
    getData();
});
console.log(userData)
  return (
    <>

      <div class="container-fuild">
        <div class="row mb-3">
          <div class="col-lg-3 col-sm-6 mb-2 colcont">
            <div class=" aaaa4 p-2">
              <div class="col-12  aaaa4">
                <span className="font aaaa4 colorwhite">2</span>
              </div>
              <div class="col-12 aaaa4">
                <span className="font1 aaaa4 colorwhite">Attendence</span>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-2 colcont">
            <div class="aaaa1 p-2">
              <div class="col-12 aaaa1">
                <span className="font aaaa1 colorwhite">2</span>
              </div>
              <div class="col-12 aaaa1">
                <span className="font1 aaaa1 colorwhite">Daily Report</span>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-2 colcont">

            <div class="aaaa2 p-2">
              <div class="col-12 aaaa2">

                <span className="font aaaa2 colorwhite">2</span>
              </div>
              <div class="col-12 aaaa2">

                <span className="font1 aaaa2 colorwhite">Leave taken</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-2 colcont">
            <div class="aaaa3 p-2 classNAmeHoloiidat">
              <div class="col-12 aaa3 classNAmeHoloiidat">

                <span className="font aaa3 classNAmeHoloiidat  ">2</span>
              </div>
              <div class="col-12 aaa3 classNAmeHoloiidat">

                <span className="font1 aaa3 classNAmeHoloiidat">Holiday</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <p class="lead"><div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h2>Profile Detail</h2>
          </div>

        </div>
      </div></p>
      <hr />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <img src={require('../src/component/hrmsimage.jpg')} alt="logo" width="100%" />


          </div>
          <div class="col-md-8 d-flex">
            <table class="table table table-striped tblecol">

              <tbody>
                <tr>
                  <th scope="row">Employee Code</th>
                  <td>{userData?._id}</td>
                </tr>
                <tr>
                  <th scope="row">Designation</th>

                  <td>Software developer</td>
                </tr>
                <tr>
                  <th scope="row">Employee Name</th>

                  <td>{userData?.firstname} {" "} {userData?.lastname} </td>
                </tr>
                <tr>
                  <th scope="row">Gender</th>

                  <td>Male</td>
                </tr>
                <tr>
                  <th scope="row">DOB</th>

                  <td>{userData?.dateofbirth}</td>
                </tr>
                <tr>
                  <th scope="row">Mobile No</th>

                  <td>{userData?.contactnumber}</td>
                </tr>
                <tr>
                  <th scope="row">Email i'd</th>

                  <td>{userData?.email}</td>
                </tr>
                <tr>
                  <th scope="row">contact address</th>
                  <td>{userData?.currentaddress}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>)
}

