import React from 'react';
import { Line,Bar,Pie,Doughnut,Polar,Radar} from "react-chartjs-2";

const LineChart = () => {   
    const data= {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
        datasets: [
            {
                label: "Sales Analytics",
                fill: true,
                lineTension: 0.5,
                backgroundColor: "rgba(64,81,137, 0.2)",
                borderColor: "#25a0e2",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "#25a0e2",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#25a0e2",
                pointHoverBorderColor: "#fff",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80]
            },
            {
                label: "Monthly Earnings",
                fill: true,
                lineTension: 0.5,
                backgroundColor: "rgba(10,179,156, 0.2)",
                borderColor: "#00bd9d",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "#00bd9d",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#00bd9d",
                pointHoverBorderColor: "#eef0f2",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36]
            }
        ]
    }
    const option= {
        x: {
            ticks: {
                font: {
                    family: 'Poppins',
                },
            },
        },
        y: {
            ticks: {
                font: {
                    family: 'Poppins',
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        family: 'Poppins',
                    }
                }
            },
        },
    }
  return (
    <React.Fragment>
      <Line width={723} height={320} data={data} options={option} />
    </React.Fragment>
  )
}

//Bar Chart
const BarChart = () => {       
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Sales Analytics",
                backgroundColor: "64,81,137",
                borderColor: "64,81,137",
                borderWidth: 1,
                hoverBackgroundColor: "64,81,137",
                hoverBorderColor: "64,81,137",
                data: [65, 59, 81, 45, 56, 80, 50,20]
            }
        ]
    }
    const option = {
        x: {
            ticks: {
                font: {
                    family: 'Poppins',
                },
            },
        },
        y: {
            ticks: {
                font: {
                    family: 'Poppins',
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Poppins',
                    }
                }
            },
        }
    }
  return (
    <React.Fragment>
      <Bar width={723} height={320} data={data} options={option} />
    </React.Fragment>
  )
}

//Pie Chart
const PieChart = () => {     
    const data={
        labels: [
            "Desktops",
            "Tablets"
        ],
        datasets: [
            {
                data: [300, 180],
                backgroundColor: ["#25a0e2","#f3f6f9"],
                hoverBackgroundColor: ["#25a0e2","#f3f6f9"],
                hoverBorderColor: "#fff"
            }]
    },
    option= {
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Poppins',
                    }
                }
            },
        }
    }
  return (
    <React.Fragment>
      <Pie width={723} height={320} data={data} options={option} />
    </React.Fragment>
  )
}

//Donut Chart
const DonutChart = () => {     
    const data = {
        labels: [
            "Desktops",
            "Tablets"
        ],
        datasets: [
            {
                data: [300, 210],
                backgroundColor: ["#25a0e2","#f3f6f9"],
                hoverBackgroundColor: ["#25a0e2","#f3f6f9"],
                hoverBorderColor: "#fff"
            }]
    },
    option = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Poppins',
                    }
                }
            },
        }
    }
  return (
    <React.Fragment>
      <Doughnut width={723} height={320} data={data} options={option} />
    </React.Fragment>
  )
}

//Polar Chart
const PolarChart = () => {     
    const data = {
        labels: [
            "Series 1",
            "Series 2",
            "Series 3",
            "Series 4"
        ],
        datasets: [{
            data: [
                11,
                16,
                7,
                18
            ],
            backgroundColor: ["#32ccff", "#00bd9d", "#f3f6f9", "#25a0e2"],
            label: 'My dataset', // for legend
            hoverBorderColor: "#fff"
        }]
    }
    const option= {
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Poppins',
                    }
                }
            },
        }
    }
  return (
    <React.Fragment>
      <Polar width={723} height={320} data={data} options={option} />
    </React.Fragment>
  )
}


//Radar Chart
const RadarChart = () => {     
    const data = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "Desktops",
                backgroundColor: "rgba(50,204,255, 0.2)",
                borderColor: "#2ab57d", //"#2ab57d",
                pointBackgroundColor: "#2ab57d", //"#2ab57d",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#2ab57d", //"#2ab57d",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "Tablets",
                backgroundColor: "rgba(81, 86, 190, 0.2)", //"rgba(81, 86, 190, 0.2)",
                borderColor: "#5156be", //"#5156be",
                pointBackgroundColor: "#5156be", //"#5156be",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#5156be", //"#5156be",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    },
    option = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Poppins',
                    }
                }
            },
        }
    }
  return (
    <React.Fragment>
      <Radar width={723} height={320} data={data} options={option} />
    </React.Fragment>
  )
}

export {LineChart,BarChart,PieChart,DonutChart,PolarChart,RadarChart}