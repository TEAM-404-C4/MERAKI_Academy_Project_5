import React, { useState } from "react";
import ApexCharts from "apexcharts";

import "./styleChart.css";
export default function Chart() {
   //================================================ Chart 1
   var options = {
    series: [50, 50],
    chart: {
      height: 200,
      type: "polarArea",
    },
    labels: ["Male", "Female"],
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "right",
    },
    colors: ["#3246D3", "#00D0FF"],
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chartOne"), options);
  chart.render();
  // =====================================chart2
  var options1 = {
    series: [
      {
        name: "Discharge Patient",
        data: [12, 22, 14, 18, 22, 13, 17],
      },
      {
        name: "Admit Patient",
        data: [28, 39, 23, 36, 45, 32, 43],
      },
    ],
    chart: {
      height: 275,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#ee3158", "#1dbfc1"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      borderColor: "#e7e7e7",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    legend: {
      show: false,
    },
  };

  var chart1 = new ApexCharts(document.querySelector("#chartTwo"), options1);
  chart1.render();
  // ===================================chart3
  var options2 = {
    chart: {
      type: "bar",
    },
    series: [
      {
        data: [
          {
            x: "category A",
            y: 10,
          },
          {
            x: "category B",
            y: 18,
          },
          {
            x: "category C",
            y: 13,
          },
        ],
      },
    ],
  };

  var chart2 = new ApexCharts(document.querySelector("#chartThree"), options2);
  chart2.render();
  return (
    <div >
      <div className="dashBoardChart">
                  <div className="chart" id="chartOne"></div>
                  <div className="chart" id="chartTwo"></div>
                </div>
                <div className="dashBoardChart">
                  <div className="chart" id="chartThree"></div>
                  <div className="chart" id="chartFour"></div>
                </div>
      
    </div>
  );
}
