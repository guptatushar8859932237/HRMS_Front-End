import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts'
// import Pichartinfos from "./pichartinfos";
import Picchartinfos from "./pichartinfos";
import LineChart from "./lineChart";

export default function Dashboardgraph() {

  const [bar, setBar] = useState({
    options: {
      chart: {
        id: "basic-bar"

      },
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
      }
    },
    series: [
      {
        name: "series-1",
        data: [15, 40, 45, 50, 49, 60, 70, 91, 1, 20, 30, 41, 15, 25, 10, 125, 10, 39, 21, 78, 98, 57, 88, 98, 25, 78, 96, 78, 95, 78]
      }
    ]

  })

  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-8">
            <div className="app">
              <div className="row">
                <div className="mixed-chart">
                  <ReactApexChart
                    options={bar.options}
                    series={bar.series}
                    type="bar"
                 
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <Picchartinfos />
          </div>
          <LineChart />
        </div>
      </div>
    </>
  )
}


