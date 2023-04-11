import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, LineController, LineElement, PointElement, LinearScale } from 'chart.js' 

Chart.register(LineController, LineElement, PointElement, LinearScale );

function Linechart({ chartData }) {
    return (
        <Line data={chartData}/>
    )
}

export default Linechart
