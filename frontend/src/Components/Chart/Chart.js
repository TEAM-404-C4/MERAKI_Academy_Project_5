import React, { useState, useEffect } from "react";
import ApexCharts from "apexcharts";
import { useSelector } from "react-redux";
import "./styleChart.css";
import axios from "axios";

// =========================================================required

export default function Chart() {
  const [appointement, setAppointement] = useState([]);
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState([]);

  // ====================================================
  const state = useSelector((state) => {
    return {
      doctorId:
        state.doctorsReducer.doctorId ||
        window.localStorage.getItem("doctorId"),
      userId:
        state.loginReducer.userId[0].id ||
        window.localStorage.getItem("userIdForSettings"),
      roleId:
        state.loginReducer.roleId || window.localStorage.getItem("roleId"),
    };
  });

  // =======================================================

  let res;
  let res2;
  console.log("state", state);
  useEffect(async () => {
    try {
      res = await axios.post("http://localhost:5000/doctors/getappointement", {
        doctorId: state.userId | window.localStorage.getItem("userId"),
      });
      res2 = await axios.post("http://localhost:5000/comment/", {
        doctorId: state.userId | window.localStorage.getItem("userId"),
      });
      // console.log("res", res, "res2", res2, "state", state);
      setComments(res2.data.result);
      setAppointement(res.data.result);

      console.log("state", state);
      test();
    } catch (err) {
      console.log(err.response);
    }
    console.log("state", state);
  }, []);

  // =========================================================

  //================================================ Chart
  const test = () => {
    let malePatient = res.data.result.filter((element) => {
      return element.gender == "MALE";
    });
    let femalePatient = res.data.result.filter((element) => {
      return element.gender == "FEMALE";
    });

    console.log("malePatient", malePatient, "femalePatient", femalePatient);
    // =============================
    var options = {
      series: [malePatient.length, femalePatient.length],
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Male", "Female"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
            colors: ["#1c2e4c", "#1c2e4c"],
          },
        },
      ],
    };

    var chart = new ApexCharts(document.querySelector("#chartOne"), options);
    chart.render();
    // =============================
    // var options = {
    //   series: [malePatient.length, femalePatient.length],

    //   chart: {
    //     height: 200,
    //     type: "polarArea",
    //   },
    //   labels: ["Male", "Female"],
    //   fill: {
    //     opacity: 1,
    //   },
    //   stroke: {
    //     width: 1,
    //     colors: undefined,
    //   },
    //   yaxis: {
    //     show: false,
    //   },
    //   legend: {
    //     position: "right",
    //   },
    //   colors: ["#3246D3", "#00D0FF"],
    //   plotOptions: {
    //     polarArea: {
    //       rings: {
    //         strokeWidth: 0,
    //       },
    //       spokes: {
    //         strokeWidth: 0,
    //       },
    //     },
    //   },
    // };

    // var chart = new ApexCharts(document.querySelector("#chartOne"), options);
    // chart.render();
    // =====================================chart2

    let month = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];

    let malePatientMonthly = month.map((element, index) => {
      let count = 0;
      for (let i = 0; i < malePatient.length; i++) {
        if (malePatient[i]) {
          if (malePatient[i].dateAppointment.split("-")[1] == element) {
            count++;
          }
        } else {
          return 0;
        }
      }

      return count;
    });
    let femalePatientMonthly = month.map((element, index) => {
      let count = 0;
      for (let i = 0; i < femalePatient.length; i++) {
        if (femalePatient[i]) {
          if (femalePatient[i].dateAppointment.split("-")[1] == element) {
            count++;
          }
        } else {
          return 0;
        }
      }

      return count;
    });

    var options1 = {
      series: [
        {
          name: "Male Patient",
          data: malePatientMonthly,
        },
        {
          name: "Female Patient",
          data: femalePatientMonthly,
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
      colors: ["#1dbfc1", "#ee3158"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      grid: {
        borderColor: "#e7e7e7",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        show: true,
      },
    };

    var chart1 = new ApexCharts(document.querySelector("#chartTwo"), options1);
    chart1.render();
    // ===================================chart3

    let PatientsMonthly = month.map((element, index) => {
      let count = 0;
      for (let i = 0; i < res.data.result.length; i++) {
        if (res.data.result[i].dateAppointment.split("-")[1] == element) {
          count++;
        }
      }

      return count;
    });

    // console.log("PatientsMonthly", PatientsMonthly);
    var options2 = {
      chart: {
        type: "bar",
      },
      series: [
        {
          data: [
            {
              x: "Jan",
              y: PatientsMonthly[0],
            },
            {
              x: "Feb",
              y: PatientsMonthly[1],
            },
            {
              x: "Mar",
              y: PatientsMonthly[2],
            },
            {
              x: "Apr",
              y: PatientsMonthly[3],
            },
            {
              x: "May",
              y: PatientsMonthly[4],
            },
            {
              x: "Jun",
              y: PatientsMonthly[5],
            },
            {
              x: "Jul",
              y: PatientsMonthly[6],
            },
            {
              x: "Aug",
              y: PatientsMonthly[7],
            },
            {
              x: "Sep",
              y: PatientsMonthly[8],
            },
            {
              x: "Oct",
              y: PatientsMonthly[9],
            },
            {
              x: "Nov",
              y: PatientsMonthly[10],
            },
            {
              x: "Dec",
              y: PatientsMonthly[11],
            },
          ],
        },
      ],
      dataLabels: {
        enabled: true,
      },
    };

    var chart2 = new ApexCharts(document.querySelector(".chart3x"), options2);
    chart2.render();

    // ==================================================== chart4

    let ratingConst = [0, 1, 2, 3, 4, 5];

    let ratingGroup = ratingConst.map((element) => {
      let group = 0;
      res2.data.result.forEach((element1) => {
        if (element1.rating == element) {
          group++;
        }
      });
      return group;
    });
    // console.log("ratingGroup", ratingGroup);

    // =========================================================
    var options = {
      series: [
        {
          data: ratingGroup.reverse(),
        },
      ],
      legend: {
        show: false,
      },
      chart: {
        height: "100px",
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 300,
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      colors: [
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7",
      ],
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      xaxis: {
        categories: [
          " ⭐⭐⭐⭐⭐",
          " ⭐⭐⭐⭐✰ ",
          "⭐⭐⭐ ✰ ✰ ",
          " ⭐⭐ ✰ ✰ ✰ ",
          "⭐ ✰ ✰ ✰ ✰ ",
          " ✰ ✰ ✰ ✰ ✰ ",
        ],
      },
      yaxis: {
        labels: {
          show: false,
        },
      },

      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          show: false,
          title: {
            formatter: function () {
              return "";
            },
          },
        },
      },
    };

    var chart = new ApexCharts(document.querySelector("#chartFour"), options);
    chart.render();
  };
  // =====================================================
  return (
    <div className="dashboardChartMainDiv">
      <div className="dashBoardChart">
        <div className="chart" id="chartOne">
          <div className="chartLabel">Appointments Overview</div>
        </div>
        <div className="chart" id="chartTwo">
          {" "}
          <div className="chartLabel2">Monthly Appointment-Gender</div>
        </div>
      </div>
      <div className="dashBoardChart">
        <div className="chart3x">
          {" "}
          <div className="chartLabel3">Total Appointment</div>
        </div>
        <div className="chart4" id="chartFour">
          <div className="chartLabel4">Rating</div>
        </div>
      </div>
    </div>
  );
}
