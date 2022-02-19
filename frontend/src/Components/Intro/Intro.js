//====================================================//Require

import React from "react";
import "./Intro.css";
import { useNavigate } from "react-router-dom";
import SliderFeedBack from "../FeedBack/SliderFeedBack";

//====================================================//COMPONENT

function Intro() {
  //====================================================//useNavigate

  const history = useNavigate();

  //====================================================// RETURN

  return (
    <div className="introMainDiv" id="introMainDiv">
      <div className="aboutSection">
        <h2 className="introWords">
          <span className="WelcomeWords">
            WELCOME OUR MEDICAL CARE SITE SHEFAA
          </span>
        </h2>
        <h5 className="detailsWebSite">
          Medicine, dentistry, pharmacy, midwifery, nursing, optometry,
          audiology, psychology, occupational therapy, physical therapy,
          athletic training, and other health professions are on the Shefaa
          website.
        </h5>
        <img
          className="coverImgIntro"
          src="https://i.ibb.co/9q0ckzs/A-group-of-doctors-with-face-masks-looking-at-camera-corona-virus-concept.jpg"
        />
      </div>
      <div className="aboutSection2">
        <div>
          <div className="groupCard1">
            <div className="card1">
              <div className="cardIcons">
                <img src="https://template82788.motopreview.com/mt-demo/82700/82788/mt-content/uploads/2019/06/mt-1841-home-icon1.png" />
              </div>
              <div className="cardDetails">
                <div className="cardTilte">Qualified Doctors</div>
                <div className="cardExplain">
                  Doctors and specialists at SevenHills Hospital are considered
                  to be one of the best doctors in Our Community, and this is
                  considering the amount of experience and expertise they bring
                  with them in their respective domains.
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="cardIcons">
                <img src="https://template82788.motopreview.com/mt-demo/82700/82788/mt-content/uploads/2019/06/mt-1841-home-icon2.png" />
              </div>
              <div className="cardDetails">
                <div className="cardTilte">Emergency Care</div>
                <div className="cardExplain">
                  Hospital emergency departments are prepared for every kind of
                  medical emergency, including heart attacks, stroke, motor
                  vehicle crashes, psychiatric emergencies, and other
                  life-threatening conditions.
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="groupCard2">
            <div className="card1">
              <div className="cardIcons">
                <img src="https://template82788.motopreview.com/mt-demo/82700/82788/mt-content/uploads/2019/06/mt-1841-home-icon3.png" />
              </div>
              <div className="cardDetails">
                <div className="cardTilte">24 Hours Service</div>
                <div className="cardExplain">
                  Ambulance services moving patients to places where they can be
                  seen by a doctor or nurse to reduce the need for home visits.
                </div>
              </div>
            </div>{" "}
            <div className="card1">
              <div className="cardIcons">
                <img src="https://template82788.motopreview.com/mt-demo/82700/82788/mt-content/uploads/2019/06/mt-1841-home-icon4.png" />
              </div>
              <div className="cardDetails">
                <div className="cardTilte">Operation Theater</div>
                <div className="cardExplain">
                  Operating rooms are spacious, in a cleanroom, and well-lit,
                  typically with overhead surgical lights, and may have viewing
                  screens and monitors. Operating rooms are generally
                  windowless.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="learnMoreBtnDiv">
          <button
            className="learnMoreBtn"
            onClick={() => {
              history("/mainpage");
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="gifAndCardDiv">
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
            <div
              className="introChart"
              onClick={() => {
                history("/mainpage");
              }}
            >
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
            <div
              className="introChart"
              onClick={() => {
                history("/mainpage");
              }}
            >
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
            <div
              className="introChart"
              onClick={() => {
                history("/mainpage");
              }}
            >
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
                <p className="chartTitleNumber">2,702</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="PatientsFeedBack">Patients FeedBack</div>
      <div className="SliderFeedBack">
        <div>
          <SliderFeedBack />
        </div>
      </div>
    </div>
  );
}

export default Intro;
