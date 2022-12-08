// import { CategoryScale, Chart } from "chart.js";
import {Bar} from 'react-chartjs-2'
// Chart.register(CategoryScale);
// import { useState } from 'react';


const lebels = ['January', 'February', 'March','April', 'May']

const state = {
    labels: lebels,
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

const BarChart = ()=>{

    
    return(
        <div></div>
        // <Bar 
        //   data ={state}
        //   options={{
        //     title:{
        //       display:true,
        //       text:'Average Rainfall per month',
        //       fontSize:20
        //     },
        //     legend:{
        //       display:true,
        //       position:'right'
        //     }
        //   }}
        //   />
       
    )
}

export default BarChart;