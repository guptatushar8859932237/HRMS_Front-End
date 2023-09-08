import React from  "react"
import "./leavebalance.css"
export default function LeaveBalance(){
    return(
        <>
        <div class="heading123">
            <h4><i class="bi bi-list-task px-3"></i>Balance Leave</h4>
        </div>
        <div class="p-4 head15">
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col" class=" tablehead">Sr.No</th>
      <th scope="col" class=" tablehead">Leave Type</th>
      <th scope="col" class=" tablehead">Leave Balance</th>
      <th scope="col" class=" tablehead">Remark</th>
        </tr>
          </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Sl</td>
      <td>1</td>
      <td>NULL</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Cl</td>
      <td>10</td>
      <td>NULL</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>SL</td>
      <td>10</td>
      <td>NULL</td>
    </tr>
   
  </tbody>
</table>
 </div>       
        </>
    )
}