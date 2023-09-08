import React from "react"
import "./AttendenceSummary.css"
export default function AttendenceSummary() {
  return (
    <>
      <form>
        <div class="form-group my-2">
          <p className="labelcolor">Subject</p>
          <input type="text" class="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Leave Subject" />
        </div>
        <div class="form-group py-2">
          <p className="labelcolor">Leave Reasion</p>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Leave Reasion"></textarea>
        </div>

      </form>
      <div class="container-fluid">
        <div class="row">
          <div class="col-3">
            <div class="form-group my-2">
              <p className="labelcolor">Leave Type Code</p>
              <select class="form-control form-select">
                <option>PL</option>
                <option>SL</option>
                <option>UL</option>
                <option>ML</option>
              </select>



            </div>

          </div>
          <div class="col-3">
            <div class="form-group my-2">
              <p className="labelcolor">Form Date</p>
              <input type="date" class="form-control" id="exampleInput" aria-describedby="emailHelp" />
            </div>


          </div>
          <div class="col-3">
            <div class="form-group my-2">
              <p className="labelcolor">To Date</p>
              <input type="date" class="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="date" />
            </div>


          </div>
          <div class="col-3">
            <div class="form-group my-2">
              <p className="labelcolor">Leave For Hours</p>

              <select class="form-control form-select">
                <option>Half Day</option>
                <option>Full Day</option>
                <option>Hours</option>
              </select>
            </div>


          </div>
        </div>

      </div>


<div class="container-fluid">
<div class="row pt-4"> 
<div class="col-4">
            <div class="form-group my-2">
              <p className="labelcolor">Leave Station During Leave</p>
              <input type="text" class="form-control" id="exampleInput" aria-describedby="emailHelp"  />
            </div>
</div>
<div class="col-4">
            <div class="form-group my-2">
              <p className="labelcolor">Contact Number. During Leave</p>
              <input type="text" class="form-control" id="exampleInput" aria-describedby="emailHelp"  />
            </div>
</div>
<div class="col-4">
            <div class="form-group my-2">
              <p className="labelcolor">Address During Leave</p>
              <input type="text" class="form-control" id="exampleInput" aria-describedby="emailHelp"  />
            </div>
</div>
</div>
</div>


<div class="continer-fluid">
  <div class="row">
    <div class="col-4">
    <div class="form-group my-2">
              <p className="labelcolor">Leave Arrangement</p>
              <input type="text" class="form-control" id="exampleInput" aria-describedby="emailHelp"  />
            </div>
    </div>
    <div class="col-8">
    <div class="form-group my-2">
    <p  className="labelcolor">Document</p>
    <div class="input-group">
    
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
</div>
            </div>
    </div>
  </div>
</div>

<div class="container-fluid">
  <div class="row">
    <div class="col-12">
    <div class="form-group my-2">
              <p className="labelcolor">Remark</p>
          <textarea class="form-control table-primary" id="exampleFormControlTextarea1" rows="3" placeholder="Leave Reasion"></textarea>
              
            </div>
    </div>
  </div>
</div>
    </>
  )
}