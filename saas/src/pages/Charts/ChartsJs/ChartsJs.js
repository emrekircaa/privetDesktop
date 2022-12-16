import React from 'react';
import { Line, Bar, Pie, Doughnut, Polar, Radar } from "react-chartjs-2";

const LineChart = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
        datasets: [
            {
                label: "Sales Analytics",
                fill: true,
                lineTension: 0.5,
                backgroundColor: "rgba(102,145,231,0.2)",
                borderColor: "#6691e7",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "#6691e7",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#6691e7",
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
                backgroundColor: "rgba(19,197,107,0.2)",
                borderColor: "#13c56b",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "#13c56b",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#13c56b",
                pointHoverBorderColor: "#eef0f2",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36]
            }
        ]
    };
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
                    // This more specific font property overrides the global property
                    font: {
                        family: 'Poppins',
                    }
                }
            },
        },
    };
    return (
        <React.Fragment>
            <Line width={723} height={320} data={data} options={option} />
        </React.Fragment>
    );
};

//Bar Chart
const BarChart = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Sales Analytics",
                backgroundColor: "rgba(102,145,231,0.8)",
                borderColor: "rgba(102,145,231,0.8)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(102,145,231,0.8)",
                hoverBorderColor: "rgba(102,145,231,0.8)",
                data: [65, 59, 81, 45, 56, 80, 50, 20]
            }
        ]
    };
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
    };
    return (
        <React.Fragment>
            <Bar width={723} height={320} data={data} options={option} />
        </React.Fragment>
    );
};

//Pie Chart
const PieChart = () => {
    const data = {
        labels: [
            "Desktops",
            "Tablets"
        ],
        datasets: [
            {
                data: [300, 180],
                backgroundColor: ["#13c56b", "#f3f6f9"],
                hoverBackgroundColor: ["#13c56b", "#f3f6f9"],
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
        };
    return (
        <React.Fragment>
            <Pie width={723} height={320} data={data} options={option} />
        </React.Fragment>
    );
};

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
                backgroundColor: ["#6691e7", "#f3f6f9"],
                hoverBackgroundColor: ["#6691e7", "#f3f6f9"],
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
        };
    return (
        <React.Fragment>
            <Doughnut width={723} height={320} data={data} options={option} />
        </React.Fragment>
    );
};

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
            backgroundColor: ["#ed5e5e", "#13c56b", "#e8bc52", "#6691e7"],
            label: 'My dataset', // for legend
            hoverBorderColor: "#fff"
        }]
    };
    const option = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Poppins',
                    }
                }
            },
        }
    };
    return (
        <React.Fragment>
            <Polar width={723} height={320} data={data} options={option} />
        </React.Fragment>
    );
};

//Radar Chart
const RadarChart = () => {
    const data = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "Desktops",
                backgroundColor: "rgba(19, 197, 107, 0.2)",
                borderColor: "#13c56b", //"#2ab57d",
                pointBackgroundColor: "#13c56b", //"#2ab57d",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#13c56b", //"#2ab57d",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "Tablets",
                backgroundColor: "rgba(102, 145, 231, 0.2)", //"rgba(81, 86, 190, 0.2)",
                borderColor: "#6691e7", //"#5156be",
                pointBackgroundColor: "#6691e7", //"#5156be",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#6691e7", //"#5156be",
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
        };
    return (
        <React.Fragment>
            <Radar width={723} height={320} data={data} options={option} />
        </React.Fragment>
    );
};

export { LineChart, BarChart, PieChart, DonutChart, PolarChart, RadarChart };