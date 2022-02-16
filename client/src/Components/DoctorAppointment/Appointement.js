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
      const res = await axios.post("/doctors/setappointement", {
        doctor_appointment: Object.values(schedual),

        doctorId: state[0].id,
      });

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
    console.log(e.target.value);
    let inner_Text = e.target.value;
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
      <div className="select_appointement">
        <select onChange={showSchedual}>
          <option value={0} disabled selected hidden>
            Chose Time ...
          </option>
          <option value="9:00  - 9:30 am" id={1}>
            9:00 - 9:30 am
          </option>
          <option value="9:30  - 10:00 am" id={2}>
            9:30 - 10:00 am
          </option>
          <option value="10:00 - 10:30 am" id={3}>
            10:00 - 10:30 am
          </option>
          <option value="10:30 - 11:00 am" id={4}>
            10:30 - 11:00 am
          </option>
          <option value="11:00 - 11:30 am" id={5}>
            11:00 - 11:30 am
          </option>
          <option value="11:30 - 12:00 pm" id={6}>
            11:30 - 12:00 pm
          </option>
          <option value="12:00 - 12:30 pm" id={7}>
            12:00 - 12:30 pm
          </option>
          <option value="12:30 - 1:00 pm" id={8}>
            12:30 - 1:00 pm
          </option>
          <option value="1:00 - 1:30 pm" id={9}>
            1:00 - 1:30 pm
          </option>
          <option value="1:30 - 2:00 pm" id={10}>
            1:30 - 2:00 pm
          </option>
          <option value="2:00 - 2:30 pm" id={11}>
            2:00 - 2:30 pm
          </option>
          <option value="2:30 - 3:00 pm" id={12}>
            2:30 - 3:00 pm
          </option>
          <option value="3:00 - 3:30 pm" id={13}>
            3:00 - 3:30 pm
          </option>
          <option value="3:30 - 4:00 pm" id={14}>
            3:30 - 4:00 pm
          </option>
          <option value="4:00 - 4:30 pm" id={15}>
            4:00 - 4:30 pm
          </option>
          <option value="4:30 - 5:00 pm" id={16}>
            4:30 - 5:00 pm
          </option>
        </select>
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
