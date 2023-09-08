import React from "react"
import "./travell.css"

export default function Travell(){
    return(
        <>

        <div class="container-fluid">
            <div class="row borderrow">
                <div class="col">
                <h5 className="targettrav"><i class="bi bi-airplane-fill px-3 targettrav"></i> My Request</h5>
                </div>
            </div>
        </div>
        <div class="container-fluid">
  <div class="row pt-5">
    <div class="col targettrav">
      Travell Type
      <input className="inpfil"></input>
    </div>
    <div class="col targettrav">
      Purpose
  <input className="inpfil"></input>
    </div>
    <div class="col targettrav">
      Travell From Date
  <input type="date" class="col-10"></input>
    </div>
  </div>
</div>
<div class="container-fluid">
  <div class="row pt-3">
    <div class="col targettrav">
      Travell To Date
      <input type="date" class="col-10"></input>
    </div>
    <div class="col targettrav">
      Created Date
  <input type="date" class="col-10"></input>
  </div>
    <div class="col targettrav">
    <button class="btncolor mt-3 col-10"> create new request</button>
  </div> 
   </div>
</div>

        </>
    )
}