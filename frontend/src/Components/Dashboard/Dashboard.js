import React from "react";
import "./Dashboard.css";
import { AiOutlineRight, AiFillSetting } from "react-icons/ai";
import { GoDashboard } from "react-icons/go";
import { BsFillPeopleFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <div className="MainDivDashBoard">
        <div className="leftSide">
          <div className="menu">
            <div className="dashboardSelect">
              <div className="dashboardIcon">
                <GoDashboard />
                Dashboard
              </div>
              <AiOutlineRight />
            </div>
            <div className="dashboardSelect">
              <div className="dashboardIcon">
                <BsFillCalendarCheckFill />
                Appointement
              </div>
              <AiOutlineRight />
            </div>
            <div className="dashboardSelect">
              <div className="dashboardIcon">
                <BsFillPeopleFill />
                Patients
              </div>
              <AiOutlineRight />
            </div>
            <div className="dashboardSelect">
              <div className="dashboardIcon">
                <AiFillSetting />
                Setting
              </div>
              <AiOutlineRight />
            </div>
            <div className="dashboardSelect">
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
            <div className="dashBoardChart">
              <div className="chartOne">1</div>
              <div className="chartTwo">2</div>
            </div>
            <div className="dashBoardChart">
              <div className="chartThree">3</div>
              <div className="chartFour">4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
