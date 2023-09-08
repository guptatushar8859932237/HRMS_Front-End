import React from "react"
import "./dailyreport.css"
export default function Dailyreport(){
    return(
        <>
        <div class="container-fluid">
  <div class="row">
    <div class="col bordercolmn">
      <h5 class="py-2 headadil"> <i class="bi bi-list-check px-2 headadil"></i>Daily Reports Detail's</h5>
<button className="adilbtn">Home</button>
    </div>
  
  </div>
</div>
<h5 class="pt-5 px-2 headadil">Task Detail's</h5>
<div class="container-fluid">
<textarea class="col-12 textplace" placeholder="How to add task with the help of HRMS."></textarea>

  <div class="row p-3">
    <div class="col">
  <div class="row">
    <div class="col">
        
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="container-fluid">
  <div class="row ">
    <div class="col">
      <p  className="headadil">Time Taken</p>
      <input class="col-10"></input>
    </div>
    <div class="col">
    <p className="headadil">Assigned By</p>
      <input class="col-10"></input>
    </div>
    <div class="col">
      <p  className="headadil">Remark</p>
      <input class="col-10"></input>
    </div>
 
    <div class="col">
      <p className="headadil">Report Date</p>
      <input class="col-10 px-2" type="date"></input>
    </div>

  
  </div>
  <div class="col py-5  buttonend">
      <button className=" buttonsave">Save Report</button>
    </div>
</div>
        
        
        </>
    )
}