import React from "react";
import "./Intro.css";
import { useNavigate } from "react-router-dom";

function Intro() {
  const history = useNavigate();
  return (
    <div className="introMainDiv">
      <div
        className="gifImageDiv"
        onClick={() => {
          history("/mainpage");
        }}
      >
        <div className="gifImage"></div>
      </div>

      <div className="introPageChart">
        <div className="introChartDiv">
          <div
            className="introChart"
            onClick={() => {
              history("/mainpage");
            }}
          >
            <div className="backgrounChart">
              <img
                className="chartImage"
                src="https://i.ibb.co/cxcCQM4/icon-1.png"
              />
            </div>
            <div>
              <p className="chartTitle">Total Patients</p>
            </div>
            <div>
              <p className="chartTitleNumber">1,532</p>
            </div>
          </div>
          <div className="introChart">
            <div className="backgrounChart">
              <img
                className="chartImage"
                src="https://i.ibb.co/pJYmcG1/register.png"
              />
            </div>
            <div>
              <p className="chartTitle">Total Registration</p>
            </div>
            <div>
              <p className="chartTitleNumber">1,720</p>
            </div>
          </div>
        </div>
        <div className="introChartDiv">
          <div className="introChart">
            <div className="backgrounChart">
              <img
                className="chartImage"
                src="https://i.ibb.co/ZTPbcXY/ISO-Certification-bro.png"
              />
            </div>
            <div>
              <p className="chartTitle">Certification</p>
            </div>
            <div>
              <p className="chartTitleNumber">4</p>
            </div>
          </div>
          <div className="introChart">
            <div className="backgrounChart">
              <img
                className="chartImage"
                src="https://i.ibb.co/Sf2qK4J/Online-calendar-pana.png"
              />
            </div>
            <div>
              <p className="chartTitle">Appointments</p>
            </div>
            <div>
              <p className="chartTitleNumber">2702</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
