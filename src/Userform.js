import React, { useState } from "react"
import axios from "axios";


export default function Userform() {
  const [data, setData] = useState("")
  const [error, setError] = useState({})

  const handleclick = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  console.log(data)
 
  const handleapi = (value) => {
    let error = {}

    if (!value.firstname) {
      error.firstname = "username is required"
    }


    // if (!value.lastname) {
    //   error.lastname = "lastname is required"
    // }
    // if (!value.email) {
    //   error.email = "email is required"
    // }
    // if (!value.fathername) {
    //   error.fathername = "fathername is required"
    // }
    // if (!value.contactnumber) {
    //   error.contactnumber = "contact number is required"
    // }
    // if (!value.currentaddress) {
    //   error.currentaddress = "current address is required"
    // }
    // if (!value.permanentaddress) {
    //   error.permanentaddress = "permnent address is required"
    // }
    // if (!value.pincode) {
    //   error.pincode = "pin code is required"
    // }
    // if (!value.dateofbirth) {
    //   error.dateofbirth = "date of birth is required"
    // }
    // if (!value.password) {
    //   error.password = "password is required"
    // }
    // if (!value.confirmpassword) {
    //   error.confirmpassword = "password is required of birth is required"
    // }
    else {
      userdata();
    }
    setError(error)
  }

  const handleclickdata = () => {
      handleapi(data)
  }
  console.log(data)
const userdata=()=>{
axios.post("http://localhost:5000/postdata" , data).then((res)=>{
 
  const {message ,success}=res.data
  console.log(res)
  if(success){
       alert(message)

  }else{
    alert(message)
  }

})
}
  // const userdata = () => {
  //   alert("999")
  //   console.log(data)
  //   axios.post('http://localhost:5000/postdata', data).then((data) => {
    
  //     const { message, success } = res.data
  //     if (success) {
  //       alert(message)
  //       refre();
  //     } else {
  //       alert(message)
  //     }
  //   })
  // }
 

  // const refre = () => {
  //   window.location.reload()
  // }

  return (
    <>

      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid py-3">
        <div class="row">
          <div class="col">

            <h2 className="personal">Personal Detail's</h2>
            <form>
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" onChange={handleclick} name="firstname" onCh placeholder="First name" />
                  <p>{error.firstname}</p>
                </div>
                <div class="col">
                  <input type="text" class="form-control" name="lastname" onChange={handleclick} placeholder="Last name" />
                  <p>{error.lastname}</p>
                </div>
              </div>

<select name="role" onChange={handleclick}>
  <option value={""}>Choose Role</option> 
  <option value={"admin"}>Admin</option> 
  <option value={"hr"}>HR</option>
  <option value={"employee"}>Employee </option>
</select>


              <div class="row py-3">
                <div class="col">
                  <input type="text" class="form-control" name="email" onChange={handleclick} placeholder="Email" />
                  <p>{error.email}</p>
                </div>
                <div class="col">
                  <input type="text" class="form-control" name="fathername" onChange={handleclick} placeholder=" Father's Name" />
                  <p>{error.fathername}</p>
                </div>
              </div>
              <div class="row py-3">
                <div class="col">
                  <input type="text" class="form-control" name="contactnumber" onChange={handleclick} placeholder="Contact Number" />
                  <p>{error.contactnumber}</p>
                </div>
                <div class="col">
                  <input type="text" class="form-control" name="currentaddress" onChange={handleclick} placeholder="Current Address" />
                  <p>{error.currentaddress}</p>
                </div>
              </div>
              <div class="row py-3">     <div class="col">
                <input type="text" class="form-control" name="permanentaddress" onChange={handleclick} placeholder="Permanent Address" />
                <p>{error.permanentaddress}</p>
              </div>
                <div class="col">
                  <input type="text" class="form-control" name="pincode" onChange={handleclick} placeholder="Pin Code" />
                  <p>{error.pincode}</p>
                </div>
              </div>
              <div class="row py-3">
                <div class="col ">
                  <input type="date" class="form-control" name="dateofbirth" onChange={handleclick} placeholder="Date" />
                  <p>{error.dateofbirth}</p>
                </div>

              </div>

              <div class="form-group">
                <label for="exampleInputPassword2">Password</label>
                <input type="password" class="form-control" name="password" onChange={handleclick} id="exampleInputPassword2" placeholder="Password" />
                <p>{error.password}</p>
              </div>

              <div class="row py-3">

              </div>
              <h2 className="personal">Proffesional Refrences </h2>
              <div class="row py-3">

              </div>
              <div class="row py-3">

              </div>
              <h2 className="personal"> Decleration</h2>
              <div class="row py-3">
                <div class="col">
                  I hereby declare that the above statements made in my application form are true, complete and correct
                  to the best of my knowledge and belief. In the event of any information being found false or incorrect
                  at any stage, my services are liable to be terminated without notice.
                </div>
              </div>
            </form>
            <div class="container-fluid py-3">
              <div class="row">
                <div class="col-6">
                  <button type="button" class="btn btn-primary" onClick={handleclickdata} >Save Data</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
