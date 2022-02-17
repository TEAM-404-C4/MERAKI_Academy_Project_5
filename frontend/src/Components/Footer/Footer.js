import React from "react";
import "./Footer.css";
import FeedBack from "../FeedBack/FeedBack";
const Footer = () => {
  return (
    <div className="footerMainDiv">
      <div className="footerDiv">
        <div className="footerSection">
          <div className="Title">ABOUT</div>
          <div className="dataMainDiv">
            <p className="data">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
              Enim Ad Minim Veniam, Quis Exercitation Ullamco Laboris Duis Aute
              Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum.
            </p>
          </div>
        </div>
        <div className="footerSection">
          <div className="Title">CONTACT INFO</div>
          <div className="dataMainDiv">
            <p className="data">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
              Enim Ad Minim Veniam, Quis Exercitation Ullamco Laboris Duis Aute
              Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum.
            </p>
          </div>
        </div>
        <div className="footerSection">
          <div className="Title">OUR MISSION</div>
          <div className="dataMainDiv">
            <p className="data">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
              Enim Ad Minim Veniam, Quis Exercitation Ullamco Laboris Duis Aute
              Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum.
            </p>
          </div>
        </div>
        <div className="footerSection">
          <FeedBack />
        </div>
      </div>
    </div>
  );
};

export default Footer;
