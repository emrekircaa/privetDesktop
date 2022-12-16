import React from 'react';
import ReactApexChart from "react-apexcharts";

const BasicPolar = () => {
    const series=[14, 23, 21, 17, 15, 10, 12, 17, 21]
    var options = {
        
        chart: {
            type: 'polarArea',
            width: 400,
        },
        labels: ['Series A', 'Series B', 'Series C', 'Series D', 'Series E', 'Series F', 'Series G', 'Series H', 'Series I'],
        stroke: {
            colors: ['#fff']
        },
        fill: {
            opacity: 0.8
        },
    
        legend: {
            position: 'bottom'
        },
        colors: ["#695eef","#11d1b7","#ffc061","#ff7f41","#73dce9","#11d1b7","#695eef","#212529","#5596f7"]
    };
  return (
    <ReactApexChart
    series={series}
    options={options}
    type="polarArea"
    height={310}
/>   
  )
}

const PolarMonochrome = () => {
    const series = [42, 47, 52, 58, 65]
    var options = {        
        chart: {
            width: 400,
            type: 'polarArea'
        },
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'bottom'
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
            }
        },
        theme: {
            mode: 'light',
            palette: 'palette1',
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                color: '#695eef',
                shadeIntensity: 0.6
            }
        }
    };
  return (
    <ReactApexChart
    series={series}
    options={options}
    type="polarArea"
    height={310}
/>   
  )
}

export {BasicPolar,PolarMonochrome}