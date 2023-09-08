import React,{useState,useEffect} from "react"
import "./assests.css"
import axios from "axios"
export default function Assests(){
const [popupvalue , setPopupvalue]=useState(" ")
const [printdata , setPrintdata]=useState()

    const handlepopup=(e)=>{
      const {name,value}=e.target
   
      setPopupvalue({...popupvalue, [name]:value})
    
    }

      const handlepopupclick=()=>{
axios.post("http://localhost:5000/assests",popupvalue).then((res)=>{
  
  const {message, success}=res.data;
  if(success){

    alert(message)
        window.location.reload()
  }
  else{
    alert(message)
  }
})
      }

      useEffect(()=>{
        axios.get("http://localhost:5000/assestsdata").then(({data})=>{
          // console.log(data);
              setPrintdata(data)
        })
      }, [])
// console.log(printdata)


    return(
        <>
<div class="w-100  d-flex justify-content-end">
<button type="button" class="btn btn-danger mt-3"   data-bs-toggle="modal" data-bs-target="#exampleModal">
<ion-icon name="apps"></ion-icon> Add Assests
</button>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> Assests</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body mt-3 bgcl">

        <label className="labelhead">Employee Name</label><br></br>
        <input placeholder="Employee name " name="fullname" onChange={handlepopup} className="inputtypefil"></input><br></br>

        <div className="firstdiv">

            <div className="second"> 
        <label className="labelhead">Assests Type</label>
        <input placeholder="assests type" name="asseststype" onChange={handlepopup} className="inputtypefil"></input>
        </div>
        <div className="third">
        <label className="labelhead">Assests Number</label>
        <input placeholder="assests number" name="assestsnumber" onChange={handlepopup}  class="px-3 inputtypefil" ></input>
        </div>
        </div>

        <label className="labelhead">Assests prise</label><br></br>
        <input placeholder="assests prise" name="assestsprise" onChange={handlepopup} className="inputtypefil"></input><br></br>
        <label className="labelhead">Assests brand</label><br></br>
        <input placeholder="assests brand" name="assestsbrand" onChange={handlepopup} className="inputtypefil"></input><br></br>
        <label className="labelhead">provider name</label><br></br>
        <input placeholder="assests given by" name="assestsname" onChange={handlepopup} className="inputtypefil"></input><br></br>
      </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" onClick={handlepopupclick}>Submit User</button>
      </div>
    </div>
  </div>
</div>   

<table class="table caption-top  table-hover  table-bordered">
  <caption>List of The Assests Holder</caption>
  <thead>
    <tr>
      <th scope="col" class="mt-2">Sr No.</th>
      <th scope="col">Name</th>
      <th scope="col">Assests type</th>
      <th scope="col">Assests Number</th>
      <th scope="col">Assests Amount</th>
      <th scope="col">Assests Brand</th>
      <th scope="col">Given Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  
    { printdata?.map((data, index) => {
      return (
        <tr>
      <th className="teabletext">{index + 1}</th>
      <td className="teabletext">{data?.fullname}</td>
      <td className="teabletext">{data?.asseststype}</td>
      <td className="teabletext">{data?.assestsnumber}</td>
      <td className="teabletext">{data?.assestsprise}</td>
      <td className="teabletext">{data?.assestsbrand}</td>
      <td className="teabletext">{data?.assestsname}</td>
      <td className="teabletext"><i name="trash-outline"></i></td>
    </tr>
      )
    })}
  
  </tbody>
</table>



       </>
    )
}