import React,{useState} from "react"
import "./userdata.css"
import axios from "axios"
import { useEffect } from "react"
import Footer from "./footer"
import { useNavigate } from "react-router-dom"
export default function Userdata(){
    const [showdata,setShowdata]=useState([])

const handlegetdata=()=>{
                axios.get('http://localhost:5000/getalldata').then((res)=>{
        setShowdata(res.data)
    })
}

useEffect(()=>{
    handlegetdata() 
},[])


const navigate15=useNavigate()
console.log(showdata)
    return(
       <>

<div class="container-fluid">
       <div class="row">
       <div class="col">
  
        <button className="buttonadddata  ms-auto mb-4 mt-1" onClick={()=>navigate15("/dashboard/userform")} >Add User</button>
       </div>
       </div>
       </div>
       
       <div class="container-fluid upperhead">
       <div class="row">
       <div class="col">
       
<div className="mainheadtable">
<div>
    <input class="my-2 px-3  inpufil" placeholder="search"></input>
</div>
<div>
    <button class=" mx-2 btntext"><i class="bi bi-filetype-pdf mx-1 pdfbutton1"></i>in pdf</button>
    <button  class=" mx-2 btntext1"><i class="bi bi-filetype-exe mx-1 exelbutton"></i>in Ms exel</button>
</div>

</div>
       </div>
       </div>
       </div>



<div class="table-responsive ">
  <table class="table table-hover align-middle table-bordered ">
    <thead>
      <tr class="mb-2">

      <th class=" headtable">Sr. no</th>
      <th class=" headtable"> Name</th>
      <th class=" headtable">Employee ID</th>
      <th class=" headtable">Email</th>
      <th class=" headtable">Designation</th>
      <th class=" headtable">ContactNumber</th>
     
      <th class=" headtable"> Action</th>
      </tr>

    </thead>
    <tbody>
    
      {
        showdata?.map((item, index)=>(

    <tr key={index}>
     
      <td className="tabledata">{index+1}</td>
      <td className="tabledata">{item.firstname}{" "} {item.lastname}</td>
      {/* <td className="tabledata">{item.lastname}</td> */}
      <td className="tabledata">{item.empid}</td>

      <td className="tabledata1">{item.email}</td>
     
      <td className="tabledata">Software Developer</td>
      <td className="tabledata">{item.contactnumber}</td>
      <td>
      <i class="bi bi-pencil-square px-3 btnedit "></i>
      <i class="bi bi-trash  btndlt"></i>
         </td>
    
    </tr>
        ))
    }
     
   
    </tbody>
  </table>
        </div>

        <Footer />
        </>
    )
}