//====================================================//Require
import React, { useState, useEffect } from "react";
import CardDoctor from "./CardDoctor";
import axios from "axios";
import Search from "./Search";
import Filter from "./Filter";
import { setDoctor } from "../Reducer/Doctor/";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import CommentsAndRate from "../CommentsAndRate/CommentsAndRate";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

//====================================================//Create Main Page Funtion
const MainPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const history = useNavigate();

  // Status For Pagination
  const [itemsPerPage, setitemsPerPage] = useState(6);
  const [currentPage, setcurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  // Use Effect
  useEffect(() => {
    getAllDoctors();
  }, []);

  //====================================================//Create Get All Doctors
  const getAllDoctors = async () => {
    try {
      const res = await axios.get("/doctors");
      if (res.data.success) {
        console.log(res.data.results);
        setDoctors(res.data.results);
        setMessage("");
      } else throw Error;
    } catch (error) {
      if (!error.response.data.success) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Get Data, please try again");
    }
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(doctors.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = doctors.slice(indexOfFirstItem, indexOfLastItem);
  // list bottom numbers pagination
  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }
  // For button load more pages
  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };
  // Render data for Pagination
  const renderData = (data) => {
    let doctorCard = currentItems.map((card, index) => {
      return (
        <div>
          <CardDoctor
            key={card.id}
            id={card.id}
            fullName={card.fullName}
            address={card.address}
            profileImage={card.profileImage}
            consultationFee={card.consultationFee}
            department={card.departmentId}
            ScientificCertificate={card.ScientificCertificate}
            city={card.city}
            Department={card.Department}
            workingDays={card.workingDays}
            waitingTime={card.waitingTime}
            specialization={card.specialization}
            latitude={card.latitude}
            longitude={card.longitude}
          />
        </div>
      );
    });
    return doctorCard;
  };

  let seachDoctorCard = search
    ? search.map((card) => {
        return (
          <div>
            <CardDoctor
              key={card.id}
              id={card.id}
              fullName={card.fullName}
              address={card.address}
              profileImage={card.profileImage}
              consultationFee={card.consultationFee}
              department={card.departmentId}
              ScientificCertificate={card.ScientificCertificate}
              city={card.city}
              Department={card.Department}
              workingDays={card.workingDays}
              waitingTime={card.waitingTime}
            />
          </div>
        );
      })
    : "";

  return (
    <div className="mainPageMainDiv">
      <div className="newDiv">
        <div className="filterDiv">
          <Filter setSearch={setSearch} />
          <Search setSearch={setSearch} />
        </div>
        {search ? seachDoctorCard : renderData(doctors)}
      </div>
      <div className="pageNumbers">
        <ul className="pageNumberUl">
          <li>
            <button
              onClick={handlePrevbtn}
              disabled={currentPage == pages[0] ? true : false}
            >
              <AiOutlineArrowLeft />
            </button>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}

          <li>
            <button
              className="nextButton"
              onClick={handleNextbtn}
              disabled={currentPage == pages[pages.length - 1] ? true : false}
            >
              <AiOutlineArrowRight />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
