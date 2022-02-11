import React, { useState } from "react";
import "./Dashboard.css";
import { AiOutlineRight, AiFillSetting } from "react-icons/ai";
import { GoDashboard } from "react-icons/go";
import { BsFillPeopleFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import ApexCharts from "apexcharts";

import Setting from "../Settings/Setting";
const Dashboard = () => {
  const [dashboardPanel, setDashboardPanel] = useState(true);
  const [appointementPanel, setappointementPanel] = useState(false);
  const [patientsPanel, setPatientsPanel] = useState(false);
  const [settingPanel, setsettingPanel] = useState(false);
  const [ratingPanel, setratingPanel] = useState(false);
  const [selectStyle1, setSelectStyle1] = useState("dashboardSelect");
  const [selectStyle2, setSelectStyle2] = useState("dashboardSelect");
  const [selectStyle3, setSelectStyle3] = useState("dashboardSelect");
  const [selectStyle4, setSelectStyle4] = useState("dashboardSelect");
  const [selectStyle5, setSelectStyle5] = useState("dashboardSelect");
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

  var chart1 = new ApexCharts(
    document.querySelector("#chartTwo"),
    options1
  );
  chart1.render();
  // ===================================chart3
  var options2 = {
  chart: {
    type: 'bar'
  },
  series: [{
    data: [{
      x: 'category A',
      y: 10
    }, {
      x: 'category B',
      y: 18
    }, {
      x: 'category C',
      y: 13
    }]
  }]
}


  var chart2 = new ApexCharts(document.querySelector("#chartThree"), options2);
  chart2.render();
// =====================================
  return (
    <>
      <div className="MainDivDashBoard">
        <div className="leftSide">
          <div className="menu">
            <div
              className={selectStyle1}
              onClick={() => {
                setappointementPanel(false);
                setDashboardPanel(true);
                setPatientsPanel(false);
                setsettingPanel(false);
                setratingPanel(false);
                setSelectStyle1("dashboardSelect2");
                setSelectStyle2("dashboardSelect");
                setSelectStyle3("dashboardSelect");
                setSelectStyle4("dashboardSelect");
                setSelectStyle5("dashboardSelect");
              }}
            >
              <div className="dashboardIcon">
                <GoDashboard />
                Dashboard
              </div>
              <AiOutlineRight />
            </div>
            <div
              className={selectStyle2}
              onClick={() => {
                setappointementPanel(true);
                setDashboardPanel(false);
                setPatientsPanel(false);
                setsettingPanel(false);
                setratingPanel(false);
                setSelectStyle2("dashboardSelect2");
                setSelectStyle1("dashboardSelect");
                setSelectStyle3("dashboardSelect");
                setSelectStyle4("dashboardSelect");
                setSelectStyle5("dashboardSelect");
              }}
            >
              <div className="dashboardIcon">
                <BsFillCalendarCheckFill />
                Appointement
              </div>
              <AiOutlineRight />
            </div>

            <div
              className={selectStyle3}
              onClick={() => {
                setappointementPanel(false);
                setDashboardPanel(false);
                setPatientsPanel(true);
                setsettingPanel(false);

                setSelectStyle3("dashboardSelect2");
                setSelectStyle1("dashboardSelect");
                setSelectStyle2("dashboardSelect");
                setSelectStyle4("dashboardSelect");
                setSelectStyle5("dashboardSelect");
              }}
            >
              <div className="dashboardIcon">
                <BsFillPeopleFill />
                Patients
              </div>
              <AiOutlineRight />
            </div>

            <div
              className={selectStyle4}
              onClick={() => {
                setappointementPanel(false);
                setDashboardPanel(false);
                setPatientsPanel(false);
                setsettingPanel(true);
                setratingPanel(false);
                setSelectStyle4("dashboardSelect2");
                setSelectStyle1("dashboardSelect");
                setSelectStyle2("dashboardSelect");
                setSelectStyle3("dashboardSelect");
                setSelectStyle5("dashboardSelect");
              }}
            >
              <div className="dashboardIcon">
                <AiFillSetting />
                Setting
              </div>
              <AiOutlineRight />
            </div>
            <div
              className={selectStyle5}
              onClick={() => {
                setappointementPanel(false);
                setDashboardPanel(false);
                setPatientsPanel(false);
                setsettingPanel(false);
                setratingPanel(true);
                setSelectStyle5("dashboardSelect2");
                setSelectStyle1("dashboardSelect");
                setSelectStyle2("dashboardSelect");
                setSelectStyle3("dashboardSelect");
                setSelectStyle4("dashboardSelect");
              }}
            >
              <div className="dashboardIcon">
                <FaStar />
                Ratings
              </div>
              <AiOutlineRight />
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="dashboardItem">
            {dashboardPanel ? (
              <>
                <div className="dashBoardChart">
                  <div className="chartOne" id="chartOne"></div>
                  <div className="chartTwo" id="chartTwo"></div>
                </div>
                <div className="dashBoardChart">
                  <div className="chartThree" id="chartThree"></div>
                  <div className="chartFour" id="chartFour"></div>
                </div>
              </>
            ) : (
              <></>
            )}
            {appointementPanel ? (
              <>
                <div className="dashBoardChart">
                  <div className="chartOne">appointement</div>
                </div>
              </>
            ) : (
              <></>
            )}
            {patientsPanel ? (
              <>
                <div className="dashBoardChart">
                  <div className="chartOne">patients</div>
                </div>
              </>
            ) : (
              <></>
            )}
            {settingPanel ? (
              <>
                <div className="dashBoardChart">
                  <div>
                    <Setting />
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {ratingPanel ? (
              <>
                <div className="dashBoardChart">
                  <div className="chartOne">ratings</div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
