import React from "react"
import { useState } from "react"
import Chart from 'react-apexcharts'

export default function Picchartinfos() {
    const [pichart, setPichart] = useState({

        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
    })

    return (
        <>
            <div className="donut">
                <Chart options={pichart.options} series={pichart.series} type="donut" />
            </div>
        </>
    )
}



