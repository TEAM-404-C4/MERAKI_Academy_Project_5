import React, { useState } from "react";
import "./Dashboard.css";
import { AiOutlineRight, AiFillSetting } from "react-icons/ai";
import { GoDashboard } from "react-icons/go";
import { BsFillPeopleFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
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
                  <div className="chartOne">1</div>
                  <div className="chartTwo">2</div>
                </div>
                <div className="dashBoardChart">
                  <div className="chartThree">3</div>
                  <div className="chartFour">4</div>
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
