import React from "react"
import { useNavigate } from "react-router-dom"
import "./holiday.css"

const Holiday = () => {
const navigate=useNavigate();

    return(
        <>
        <div class="container-fluid" > 
        <div class="row py-5">
            <h1 className="heading">All Holiday's By Victorious</h1>
        </div>
        </div>
        <div class="container-fluid">
  <div class="row">
    <div class="col-2">

    </div>
    <div class="col-8">
    <table class="table  table-striped tablebord">
  <thead>
    <tr>
      <th scope="col" className="headfont">Sr. No.</th>
      <th scope="col"  className="headfont">Holiday Name</th>
      <th scope="col"  className="headfont">Holiday-Date</th>

      <th scope="col"  className="headfont">Holiday-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>New Year</td>
      <td>1/Jan/2023</td>

      <td> Sunday</td>
    </tr>
    
    <tr>
      <th scope="row">2</th>
      <td >Holi</td>
      <td>8/Mar/2023</td>

      <td>Wednesday</td>
    </tr>  
    <tr>
      <th scope="row">3</th>
      <td >Good Friday</td>
      <td>7/Apr/2023</td>
      <td>Friday</td>
      </tr>  
    <tr>
      <th scope="row">4</th>
      <td >IDU / Fitar / Ramzan</td>
      <td>22/Apr/2023</td>
      <td>Saturday</td>

    </tr>  
    <tr>
      <th scope="row">5</th>
      <td >Buddha Purnima</td>
      <td>5/May/2023</td>
      <td>Friday</td>

    </tr>  
    <tr>
      <th scope="row">6</th>
      <td >IDU / zuha(Bakrid)</td>
      <td>29/Jun/2023</td>

      <td>Thursday</td>

    </tr>  
    <tr>
      <th scope="row">7</th>
      <td >Independence Day</td>
      <td>15/Aug/2023</td>

      <td>Tuesday</td>
    
    </tr>  
    <tr>
      <th scope="row">8</th>
      <td >Rakshabandhan</td>
      <td>31/Aug/2023</td>

      <td>Thursday</td>
    
    </tr>  
    <tr>
      <th scope="row">9</th>
      <td >Janmashtami</td>
      <td>7/Sep/2023</td>

      <td>Thursday</td>
    
    </tr>  
    <tr>
      <th scope="row">10</th>
      <td >Gandhi Jayanti</td>
      <td>2/Oct/2023</td>

      <td>Monday</td>
    
    </tr>  
    <tr>
      <th scope="row">11</th>
      <td >Vijay Dashmi</td>
      <td>24/Oct/2023</td>

      <td>Tuesday</td>
    
    </tr>  
    <tr>
      <th scope="row">12</th>
      <td >Diwali</td>
      <td>12/Nov/2023</td>

      <td>Sunday</td>
    
    </tr>  
    <tr>
      <th scope="row">13</th>
      <td >Govardhan Pooja</td>
      <td>13/Nov/2023</td>

      <td>Monday</td>
    
    </tr>  
    <tr>
      <th scope="row">14</th>
      <td>Bhaidooj</td>
      <td>14/Nov/2023</td>

      <td>Tuesday</td>
    </tr>  
    <tr>
      <th scope="row">15</th>
      <td>Gurunanak Day</td>
      <td>27/Nov/2023</td>

      <td>Monday</td>
   
    </tr>  
    <tr>
      <th scope="row">16</th>
      <td >Christmas</td>
      <td>25/Dec/2023</td>
      <td>Monday</td>

    </tr>  
    
  </tbody>
</table>
    </div>
    <div class="col-2">
    
    </div>
  </div>
</div>




<div className="holiday"  onClick={()=>navigate("/dashboard")}><i class="bi bi-houses-fill"></i></div>

              
        </>
    )
}

export default Holiday;