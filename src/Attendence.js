import React, { useEffect, useState } from "react"
import "./attendence.css"
import axios from "axios"
import { useGeolocated } from "react-geolocated";

// export const Demo = () => {
//     const { coords, isGeolocationAvailable, isGeolocationEnabled } =
//         useGeolocated({
//             positionOptions: {
//                 enableHighAccuracy: true,
//             },
//             userDecisionTimeout: 5000,
//         });

//     return !isGeolocationAvailable ? (
//         <div>Your browser does not support Geolocation</div>
//     ) : !isGeolocationEnabled ? (
//         <div>Geolocation is not enabled</div>
//     ) : coords ? (
//         <table>
//             <tbody>
//                 <tr>
//                     <td>latitude</td>
//                     <td>{coords.latitude}</td>
//                 </tr>
//                 <tr>
//                     <td>longitude</td>
//                     <td>{coords.longitude}</td>
//                 </tr>
                
//                 <tr>
//                     <td>Accurecy</td>
//                     <td>{coords.Accurecy}</td>
//                 </tr>
//             </tbody>
//         </table>
//     ) : (
//         <div>Getting the location data&hellip; </div>
//     );
// };

export default function Attendence() {

  const date = new Date().toLocaleString();
 
  const [getDate, setDate] = useState(date);
 
const [attpunch , setAttpunch]=useState("")

useEffect(()=>{
  setAttpunch(JSON.parse(localStorage.getItem("user-data")))
},[]);

console.log("dataaa",attpunch)
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
            },
            userDecisionTimeout: 5000,
        });


        const login = () =>{
           const punchData = {
            emploid : attpunch?._id, 
            empname :  attpunch?.firstname, 
            empmobile : attpunch?.contactnumber, 
            empemail :  attpunch?.email, 
            empcode :  attpunch?._id, 
                        mobilenum :  attpunch?.contactnumber,
            empdate :  getDate, 
            laltitude :coords?.latitude,
            longtidue : coords?.longitude

           }
          axios.post("http://localhost:5000/logindata",punchData).then((res)=>{
          
          console.log("responce",res)
            const {message,success}=res.data
            if(success){
              alert(message)
            }else{
              alert(message)
            }
          })
        }


  return (
    <>
      <div class="container-fuild">
        <div class="row mb-3">
          <div class="col-lg-12 mb-2 colcont">

            <table class="table border12">
              <thead>
                <tr class="table-primary">
                  <th scope="col contbox" class="fonthead">Employee Code</th>
                  <th className="fontdata" value="attid"  name="id"  >{attpunch._id}</th>
                  <th scope="col" class="fonthead">Employee Name</th>
                  <th className="fontdata" value="attid"  name="fullname" >{attpunch?.firstname} {" "} {attpunch?.lastname}</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <th scope="row" class="fonthead">Mobile Number</th>
                  <td className="uiname fontdata">{attpunch?.contactnumber}</td>
                  <th scope="col" className="uiname fonthead">Email i'd</th>
                  <td className="uiname fontdata">{attpunch?.email}</td>
                </tr>

<input type="text" value={attpunch.email} className="texthide"></input>
              </tbody>
            </table>

          </div>
        </div>
      </div>
      <div class="container-fuild border12">
        <div class="row">
          <div class="col-6">

            <table class="table shedontknow border12">
              <thead>
                <tr class="table-primary">
                  <th scope="col-2 contbox" class="fonthead">Employee Code</th>
                  <th class="col-4 fontdata">{attpunch?._id}</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col-2" class="fonthead">Mobile Number</th>
                  <td class="col-4 fontdata">{attpunch?.contactnumber}</td>

                </tr>

              </tbody>
            </table>

          </div>
        </div>
      </div>

      <table class="table my-5 border12">
        <thead>
          <tr>
            <th scope="col" class="fonthead"> Current Date & Time</th>
            <td class="table-primary fontdata ">{getDate}</td>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="fonthead">Current Laltitude</th>
            <td class="table-primary fontdata">{coords?.latitude}</td>

          </tr>
          <tr>
            <th scope="row" class="fonthead">Current Longtitude</th>
            <td class="table-primary fontdata">{coords?.longitude}</td>

          </tr>
          <tr>
            <th scope="row" class="fonthead">Accuracy</th>
            <td class="table-primary fontdata">{coords?.accuracy}</td>

          </tr>
          <tr>
            <th scope="row" class="fonthead">Distance (Meter)</th>
            <td class="table-primary fontdata">95 M</td>

          </tr>
          <tr>
            <th scope="row" class="fonthead">Remark</th>
            <td><input type="text" className="inputinner fontdata"></input></td>

          </tr>
          <tr>
            <th scope="row"></th>
            <div class="container">
              <div class="row">
                <button class="col-6 px-5 punchbtn"><i class="bi bi-telegram"></i>  Punch Out</button>
                <button class="col-6 px-5 btn23" onClick={login} > <i class="bi bi-geo-alt-fill"></i>  Punch in </button>
                </div>

            </div>
          


          </tr>
        </tbody>
      </table>

    </>
  )

}