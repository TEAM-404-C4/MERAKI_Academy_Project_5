//====================================================//Require

import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BiDownArrow } from "react-icons/bi";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

//====================================================//COMPONENT

const Footer = () => {
  //====================================================//USESTATE

  const [style2, setStyle2] = useState("socialLinksNone");
  const [style3, setStyle3] = useState("socialLinksNone");
  const [style4, setStyle4] = useState("socialLinksBlock");
  const [onStyle1, setOnStyle1] = useState(false);
  const [onStyle2, setOnStyle2] = useState(false);
  const [onStyle3, setOnStyle3] = useState(false);

  //====================================================//RETURN

  return (
    <div className="footerMainDiv">
      <div className="footerDiv">
        <div className="footerSection">
          <div>
            <Link to="/" className="link">
              <div className="logoSection"></div>
            </Link>
          </div>
        </div>
        <div className="footerSection">
          <div className="Title">ABOUT</div>
          <div className="dataMainDiv">
            <ul className="links">
              <li>
                <a
                  href="#introMainDiv"
                  style={{ transitionDelay: "5.1s" }}
                  className="link"
                >
                  About us
                </a>
              </li>

              <li>
                <Link to="/login" className="link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/Register" className="link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerSection">
          <div className="Title">UseFull Links</div>
          <div className="dataMainDiv">
            <ul className="links">
              <li>
                <Link to="/mainpage" className="link">
                  Doctors
                </Link>
              </li>

              <li>
                <a href="tel:911" className="link">
                  Emergency
                </a>
              </li>
              <li>
                <Link to="/doctorsignup1" className="link">
                  Join as a Doctor
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerSection">
          <div className="Title">CONTACT US</div>
          <div className="dataMainDiv">
            <ul className="links_contact">
              <li>
                <div className="DeveloperInfo">
                  <img
                    src="https://avatars.githubusercontent.com/u/93885250?v=4"
                    className="img-Developer"
                    alt="Iyad Saadeh"
                    onClick={() => {
                      onStyle1
                        ? setStyle2("socialLinksNone")
                        : setStyle2("socialLinksBlock");
                      setOnStyle1(!onStyle1);
                    }}
                  />
                  <h4 className="h4Name">
                    Iyad Saadeh{" "}
                    <BiDownArrow
                      className="h4icon"
                      onClick={() => {
                        onStyle1
                          ? setStyle2("socialLinksNone")
                          : setStyle2("socialLinksBlock");
                        setOnStyle1(!onStyle1);
                      }}
                    />
                  </h4>
                </div>

                <div className={style2}>
                  <ol className="socialLinks">
                    <li>
                      <a href="https://github.com/IyadSaadeh">
                        <AiFillGithub />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/iyad-saadeh/">
                        <AiOutlineLinkedin />
                      </a>
                    </li>
                  </ol>
                </div>
              </li>
              <li>
                <div className="DeveloperInfo">
                  <img
                    src="https://avatars.githubusercontent.com/u/93844383?v=4"
                    className="img-Developer"
                    alt="HaithamNawwaf"
                    onClick={() => {
                      onStyle2
                        ? setStyle3("socialLinksNone")
                        : setStyle3("socialLinksBlock");
                      setOnStyle2(!onStyle2);
                    }}
                  />
                  <h4 className="h4Name">
                    Haitham Nawwaf{" "}
                    <BiDownArrow
                      className="h4icon"
                      onClick={() => {
                        onStyle2
                          ? setStyle3("socialLinksNone")
                          : setStyle3("socialLinksBlock");
                        setOnStyle2(!onStyle2);
                      }}
                    />
                  </h4>
                </div>

                <div className={style3}>
                  <ol className="socialLinks">
                    <li>
                      <a href="https://github.com/HaithamNawwaf">
                        <AiFillGithub />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/haitham-nawwaf-241461175/">
                        <AiOutlineLinkedin />
                      </a>
                    </li>
                  </ol>
                </div>
              </li>
              <li>
                <div className="DeveloperInfo">
                  <img
                    src="https://avatars.githubusercontent.com/u/93868769?v=4"
                    className="img-Developer"
                    alt="Omar Kataaa"
                    onClick={() => {
                      onStyle3
                        ? setStyle4("socialLinksNone")
                        : setStyle4("socialLinksBlock");
                      setOnStyle3(!onStyle3);
                    }}
                  />
                  <h4 className="h4Name">
                    Omar Kataaa{" "}
                    <BiDownArrow
                      className="h4icon"
                      onClick={() => {
                        onStyle3
                          ? setStyle4("socialLinksNone")
                          : setStyle4("socialLinksBlock");
                        setOnStyle3(!onStyle3);
                      }}
                    />
                  </h4>
                </div>

                <div className={style4}>
                  <ol className="socialLinks">
                    <li>
                      <a href="https://github.com/OmarKataa">
                        <AiFillGithub />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/omar-kata-a-983677175/">
                        <AiOutlineLinkedin />
                      </a>
                    </li>
                  </ol>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerSection">{/* <FeedBack /> */}</div>
      </div>
    </div>
  );
};

export default Footer;
