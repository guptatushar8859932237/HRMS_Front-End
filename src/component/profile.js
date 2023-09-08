import React, { useEffect, useState } from "react"
import "./profile.css"
import axios from "axios"
import Dashboardgraph from "./dashboardgraph"
import Footer from "../footer"
export default function Dashboard() {

  const [employeData, setEmployeData] = useState([])

  const getdata = () => {
    axios.get('http://localhost:5000/getalldata').then((res) => {
    
      setEmployeData(res.data)
    })
  }

  useEffect(() => {
    getdata();
  }, [])
  return (
    <>

      <div class="container-fuild">
        <div class="row mb-3">
          <div class="col-lg-3 col-sm-6 mb-2  ">
            <div class=" aaaa4 p-2 classfun">
              <div class="col-12 classfun">
                <span className="font classfun ">{employeData.length}  </span>
              </div>
              <div class="col-12 classfun">

                <span className="font1 classfun ">Total employee</span>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-2 ">
            <div class="aaaa1 p-2">
              <div class="col-12 aaaa1">
                <span className="font aaaa1  funbackback">75</span>
              </div>
              <div class="col-12 aaaa1">
                <span className="font1 aaaa1  funbackback">Active Employee</span>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-2 ">

            <div class="aaaa2 p-2">
              <div class="col-12 aaaa2">

                <span className="font aaaa2  funbackback">109</span>
              </div>
              <div class="col-12 aaaa2">

                <span className="font1 aaaa2 funbackback">Registerd Employee</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-2 ">
            <div class="aaaa3 p-2">
              <div class="col-12 aaaa3">

                <span className="font aaaa3 funbackback">25</span>
              </div>
              <div class="col-12 aaaa3">

                <span className="font1 aaaa3 funbackback">Leave</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Dashboardgraph />


<Footer />


    </>
  )
}