import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DoctorAppointement from "./DoctorAppointement";
import "./Appointement.css";

const Appointement = () => {
  const [schedual, setSchedual] = useState({});
  const [schedual22, setSchedual22] = useState([]);
  const [appointementId, setAppointementId] = useState({});
  const [repeatAppointment, setRepeatAppointment] = useState("");

  // ==========================================================

  const state = useSelector((state) => {
    return state.loginReducer.userId;
  });

  useEffect(() => {
    showResult();
  }, [schedual]);
  // =============================================================
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
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };

  const showResult = () => {
    let array = Object.keys(schedual);
    let miniArray = [];
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
      miniArray.push(<td>{array[i]}</td>);
    }

    if (miniArray.length < 4) {
      newArray.push(
        <tr>
          {miniArray.map((element) => {
            return element;
          })}
        </tr>
      );
    }
    if (miniArray.length >= 4) {
      newArray.push(
        <tr>
          {miniArray.slice(0, 4).map((element) => {
            return element;
          })}
        </tr>
      );
    }

    if (miniArray.length > 4 || miniArray.length <= 8) {
      newArray.push(
        <tr>
          {miniArray.slice(4, 8).map((element) => {
            return element;
          })}
        </tr>
      );
    }

    if (miniArray.length > 8 || miniArray.length <= 12) {
      newArray.push(
        <tr>
          {miniArray.slice(8, 12).map((element) => {
            return element;
          })}
        </tr>
      );
    }

    if (miniArray.length > 12 || miniArray.length < 16) {
      newArray.push(
        <tr>
          {miniArray.slice(12).map((element) => {
            return element;
          })}
        </tr>
      );
    }

    return newArray;
    // Object.keys(schedual)
  };
  // =======================================================
  const showSchedual = (e) => {
    let inner_Text = e.target.innerText;
    let id = e.target.id;
    let newObj = { [inner_Text]: id };
    if (e.target.className == "0") {
      setSchedual(Object.assign({}, schedual, newObj));
      setSchedual22(Object.values(schedual));
      e.target.className = "1";
    } else {
      const deleteValue = () => {
        let obj = schedual;
        delete obj[inner_Text];
        setSchedual(obj);
      };
      deleteValue();
      setSchedual22(Object.values(schedual));
      e.target.className = "0";
    }
  };
  // ===================================================

  // ==============================================
  return (
    <div className="AppointementDoctor">
      <div className="list">
        <table>
          <tr>
            <td>
              {" "}
              <button className="0" id={1} onClick={showSchedual}>
                9-9:30
              </button>
            </td>
            <td>
              {" "}
              <button className="0" id={2} onClick={showSchedual}>
                9:30-10
              </button>
            </td>
            <td>
              <button className="0" id={3} onClick={showSchedual}>
                10-10:30
              </button>
            </td>
            <td>
              {" "}
              <button className="0" id={4} onClick={showSchedual}>
                10:30-11
              </button>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <button className="0" id={5} onClick={showSchedual}>
                11-11:30
              </button>
            </td>
            <td>
              <button className="0" id={6} onClick={showSchedual}>
                11:30-12
              </button>
            </td>
            <td>
              {" "}
              <button className="0" id={7} onClick={showSchedual}>
                12-12:30
              </button>
            </td>
            <td>
              {" "}
              <button className="0" id={8} onClick={showSchedual}>
                12:30-1
              </button>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <button className="0" id={9} onClick={showSchedual}>
                1-1:30
              </button>
            </td>
            <td>
              <button className="0" id={10} onClick={showSchedual}>
                1:30-2
              </button>
            </td>
            <td>
              {" "}
              <button className="0" id={11} onClick={showSchedual}>
                2-2:30
              </button>
            </td>
            <td>
              <button className="0" id={12} onClick={showSchedual}>
                2:30-3
              </button>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <button className="0" id={13} onClick={showSchedual}>
                3-3:30
              </button>
            </td>
            <td>
              {" "}
              <button className="0" id={14} onClick={showSchedual}>
                3:30-4
              </button>
            </td>
            <td>
              {" "}
              <button className="0" id={15} onClick={showSchedual}>
                4-4:30
              </button>
            </td>
            <td>
              <button className="0" id={16} onClick={showSchedual}>
                4:30-5
              </button>
            </td>
          </tr>
        </table>
      </div>

      <div>
        <button onClick={saveAppointement}>click</button>
        <table>
          {showResult().map((element) => {
            return element;
          })}
        </table>
      </div>

      <div>
        {repeatAppointment && (
          <p>You have conflicts at the following Appointments</p>
        )}
        {repeatAppointment &&
          repeatAppointment.map((element) => {
            return <p>{element.time}</p>;
          })}
      </div>
      <DoctorAppointement />
    </div>
  );
};

export default Appointement;
