import React from "react"
import "./attendenadmin.css"
// import { useNavigate } from "react-router-dom";
import Footer from "../footer";
// import Footer from "../Footer"
// import { useNavigate } from "react-router-dom"
export default function AttendenceAdmin(){
    // const navigate = useNavigate();

    // const navidatePage = () =>{
      
    // }
    // const route2 = useNavigate();
   return(

    <>
   <div class="container-fluid upperhead">
       <div class="row">
       <div class="col">
<div className="mainheadtable">
<div>
    <input class="my-2 px-3  inpufil" placeholder="search"></input>
</div>
<div>
    <button class="btn btn-danger  "><i class="bi bi-filetype-pdf mx-1 pdfbutton1"></i>in pdf</button>
    <button  class="btn btn-success  "><i class="bi bi-filetype-exe mx-1 exelbutton"></i>in Exel</button>
</div>

</div>
       </div>
       </div>
       </div>
<div class="table-responsive mt-5">
  <table class="table table-hover align-middle table-bordered ">
    <thead>
      <tr class="mb-2">

      <th class=" headtable">Sl. no</th>
      <th class=" headtable">Full Name</th>
      <th class=" headtable">Emp. ID</th>
      <th class=" headtable">Email</th>
      <th class=" headtable">Number</th>
      <th class=" headtable">Punch Out</th>
      <th class=" headtable">Punch In</th>
      <th class=" headtable"> Action</th>
      </tr>

    </thead>
    <tbody>
    <tr>
      <td className="tabledata">1</td>
      <td className="tabledata">tusahr gupta</td>
    
      <td className="tabledata">011012</td>

      <td className="tabledata1">tushargupta8859@gmail.com</td>
      <td className="tabledata">8859932237</td>
      <td className="tabledata">04 : 30 pm</td>
      <td className="tabledata">04 : 30 pm</td>
      <td className="tabledata">
      <button class="btn btn-danger btnfont"  >view</button>
     <a href="./Demo.js"> view</a>
     
      </td>


      </tr>

   
    </tbody>
  </table>
        </div>
     
<Footer />

    </>
   )
}