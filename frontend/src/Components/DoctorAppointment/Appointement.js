//====================================================//Require

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import "./Appointement.css";

//====================================================//COMPONENT

const Appointement = () => {
  //====================================================//USESTATE

  const [schedual, setSchedual] = useState({});
  const [schedual22, setSchedual22] = useState([]);
  const [appointementId, setAppointementId] = useState({});
  const [repeatAppointment, setRepeatAppointment] = useState("");

  // ==========================================================// USESLECTOR

  const state = useSelector((state) => {
    return state.loginReducer.userId;
  });

  //====================================================//USEEFFECT

  useEffect(() => {
    showResult();
  }, [schedual]);

  //====================================================//save Appointement FUNCTION

  const saveAppointement = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/doctors/setappointement",
        {
          doctor_appointment: Object.values(schedual),

          doctorId: state[0].id,
        }
      );

      if (!res.data.success) {
        setRepeatAppointment(res.data.response);
      }
      setSchedual({});
    } catch (err) {
      console.log(err.response);
    }
  };

  //====================================================//show Result FUNCTION

  const showResult = () => {
    let array = Object.keys(schedual);
    let miniArray = [];
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      miniArray.push(
        <td className="tdSetAppointmentShow">
          <button className="test1">{array[i]}</button>
        </td>
      );
    }

    if (miniArray.length < 4) {
      newArray.push(
        <tr className="trSetAppointmentShow">
          {miniArray.map((element) => {
            return element;
          })}
        </tr>
      );
    }
    if (miniArray.length >= 4) {
      newArray.push(
        <tr className="trSetAppointmentShow">
          {miniArray.slice(0, 4).map((element) => {
            return element;
          })}
        </tr>
      );
    }

    if (miniArray.length > 4 || miniArray.length <= 8) {
      newArray.push(
        <tr className="trSetAppointmentShow">
          {miniArray.slice(4, 8).map((element) => {
            return element;
          })}
        </tr>
      );
    }

    if (miniArray.length > 8 || miniArray.length <= 12) {
      newArray.push(
        <tr className="trSetAppointmentShow">
          {miniArray.slice(8, 12).map((element) => {
            return element;
          })}
        </tr>
      );
    }

    if (miniArray.length > 12 || miniArray.length < 16) {
      newArray.push(
        <tr className="trSetAppointment">
          {miniArray.slice(12).map((element) => {
            return element;
          })}
        </tr>
      );
    }

    console.log(newArray[0].props.children);
    return newArray;
  };

  //====================================================//show Schedual FUNCTION

  const showSchedual = (e) => {
    setRepeatAppointment("");
    let inner_Text = e.target.innerText;
    let id = e.target.id;
    let newObj = { [inner_Text]: id };
    if (e.target.className == "A") {
      setSchedual(Object.assign({}, schedual, newObj));
      setSchedual22(Object.values(schedual));
      e.target.className = "B";
    } else {
      const deleteValue = () => {
        let obj = schedual;
        delete obj[inner_Text];
        setSchedual(obj);
      };
      deleteValue();
      setSchedual22(Object.values(schedual));
      e.target.className = "A";
    }
  };

  const repeatMessage = (arr) => {
    let array = "";
    arr.forEach((element) => {
      array = array + element.time + "  ,  ";
    });

    Swal.fire("You have conflicts at the following Appointments", array);
  };

  //====================================================//RETURN
  return (
    <div className="AppointementDoctor">
      <div className="AppointementDoctorTitle">Pick Your Available Time</div>
      <div className="list">
        <table className="list1">
          <tr className="trSetAppointment">
            <td className="tdSetAppointment">
              <button className="A" id={1} onClick={showSchedual}>
                9:00-9:30 am
              </button>
            </td>
            <td className="tdSetAppointment">
              {" "}
              <button className="A" id={2} onClick={showSchedual}>
                9:30-10:00 am
              </button>
            </td>
            <td className="tdSetAppointment">
              <button className="A" id={3} onClick={showSchedual}>
                10:00-10:30 am
              </button>
            </td>
            <td className="tdSetAppointment">
              {" "}
              <button className="A" id={4} onClick={showSchedual}>
                10:30-11:00 am
              </button>
            </td>
          </tr>
          <tr className="trSetAppointment">
            <td className="tdSetAppointment">
              {" "}
              <button className="A" id={5} onClick={showSchedual}>
                11:00-11:30 am
              </button>
            </td>
            <td className="tdSetAppointment">
              <button className="A" id={6} onClick={showSchedual}>
                11:30-12:00 am
              </button>
            </td>
            <td className="tdSetAppointment">
              {" "}
              <button className="A" id={7} onClick={showSchedual}>
                12:00-12:30 pm
              </button>
            </td>
            <td className="tdSetAppointment">
              {" "}
              <button className="A" id={8} onClick={showSchedual}>
                12:30-1:00 pm
              </button>
            </td>
          </tr>
          <tr className="trSetAppointment">
            <td className="tdSetAppointment">
              {" "}
              <button className="A" id={9} onClick={showSchedual}>
                1:00-1:30 pm
              </button>
            </td>
            <td className="tdSetAppointment">
              <button className="A" id={10} onClick={showSchedual}>
                1:30-2:00 pm
              </button>
            </td>
            <td className="tdSetAppointment">
              {" "}
              <button className="A" id={11} onClick={showSchedual}>
                2:00-2:30 pm
              </button>
            </td>
            <td className="tdSetAppointment">
              <button className="A" id={12} onClick={showSchedual}>
                2:30-3:00 pm
              </button>
            </td>
          </tr>
          <tr className="trSetAppointment">
            <td className="tdSetAppointment">
              {" "}
              <button className="A" id={13} onClick={showSchedual}>
                3:00-3:30 pm
              </button>
            </td>
            <td className="tdSetAppointment">
              {" "}
              <button className="A" id={14} onClick={showSchedual}>
                3:30-4:00 pm
              </button>
            </td>
            <td className="tdSetAppointment">
              {" "}
              <button className="A" id={15} onClick={showSchedual}>
                4:00-4:30 pm
              </button>
            </td>
            <td className="tdSetAppointment">
              <button className="A" id={16} onClick={showSchedual}>
                4:30-5:00 pm
              </button>
            </td>
          </tr>
        </table>
      </div>
      {console.log(showResult().length)}
      {showResult()[0].props.children.length != 0 && (
        <div className="listShow">
          <table className="list1Show">
            {showResult().map((element) => {
              return element;
            })}
          </table>
          <button className="setAppointmentButtonOk" onClick={saveAppointement}>
            Submit
          </button>
        </div>
      )}

      <div>
        {/* {repeatAppointment && (
          <p>You have conflicts at the following Appointments</p>
        )}
        {repeatAppointment &&
          repeatAppointment.map((element) => {
            return <p>{element.time}</p>;
          })} */}
        {repeatAppointment && repeatMessage(repeatAppointment)}
      </div>
    </div>
  );
};

export default Appointement;
