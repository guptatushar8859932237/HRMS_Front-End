import React, { useState } from "react"
import Demo from "./geolocation"
import axios from "axios"
import "./login.css"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const [logind, setLogind] = useState(" ")
    const [error, setError] = useState({})
    const navigate=useNavigate()

    const loginde = (e) => {
        const { name, value } = e.target
        setLogind({ ...logind, [name]: value })
    }

    const handlevali = (value) => {
        let error = {}
        if (!value.email) {
            error.email = "Email is required"
        }
        if (!value.password) {
            error.password = "Password is required"
        }
        else {
           userlogin()
        }
        setError(error)
    }

    const logindata = () => {
        handlevali(logind)
                        

    }

    const userlogin=()=>{
        axios.post('http://localhost:5000/login',logind).then((res)=>{

        alert()
        const{message,success, user}=res.data
        if(success){
          alert(message)
          localStorage.setItem("user-data", JSON.stringify(user))
                navigate("/dashboard" )
  
        }else{
          alert(message)
        }
        })
    } 



    return (
        <>
            <div class="container-fluid bagimg">
                <div class="row">
                    <div class="col-md-4">
                    </div>
                    <div class=" col-md-4 formclass">
                        <div class="card">
                            <div className="row">
                                <div class="col-8 logo">
                                </div>
                                <div class="col-12">
                                    {/* <h3 align="center">User Can Login Here</h3> */}
                                </div>
                            </div>
                            <form className="formpadding">
                                <div >
                                    <label htmlFor="exampleInputEmail1" class="form-label colorhead"  >Username</label>
                                    <input type="email" placeholder="username" class="form-control" name="email" onChange={loginde} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                  <p className="logincolor">{error.email}</p>  
                                </div>
                                <div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1" class="colorhead" >Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={loginde} name="password" placeholder="Password" />
                                      <p className="logincolor">{error.password}</p>  
                                    </div>
                                </div>
                                <button type="button" class=" btn btn-primary buttonsal"  onClick={logindata} >Login </button>
                                {/* <p className="forgot" class="mb-3" >forgot password</p> */}
                                <a href="about" className="forgot">

                                Forget password</a>
<Demo />
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4">

                    </div>
                </div>

            </div>
        </>
    )
}


