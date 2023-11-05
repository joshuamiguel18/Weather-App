import React from "react";
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
const BarChart = () => {
    return (
        <div>
            <Bar 
            data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1
                      }]
                    }}
            height={50}
            width={50}
            /> 
        </div>
    )
}

export default BarChart;