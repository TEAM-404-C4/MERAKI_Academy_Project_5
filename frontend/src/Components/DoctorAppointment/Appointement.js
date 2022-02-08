import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DoctorAppointement from "./DoctorAppointement";

const Appointement = () => {
  const [schedual, setSchedual] = useState({});
  const [schedual22, setSchedual22] = useState([]);
  const [appointementId, setAppointementId] = useState({});
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

          doctorId: state,
        }
      );

      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };

  const showResult = () => {
    return Object.keys(schedual).map((element) => {
      return (
        <ul>
          <li>{element}</li>
        </ul>
      );
    });
  };

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

  return (
    <div>
      <div>
        <ul>
          <button className="0" id={1} onClick={showSchedual}>
            9-9:30
          </button>
          <button className="0" id={2} onClick={showSchedual}>
            9:30-10
          </button>
          <button className="0" id={3} onClick={showSchedual}>
            10-10:30
          </button>
          <button className="0" id={4} onClick={showSchedual}>
            10:30-11
          </button>
        </ul>
      </div>
      <div>
        <ul>
          <button className="0" id={5} onClick={showSchedual}>
            11-11:30
          </button>
          <button className="0" id={6} onClick={showSchedual}>
            11:30-12
          </button>
          <button className="0" id={7} onClick={showSchedual}>
            12-12:30
          </button>
          <button className="0" id={8} onClick={showSchedual}>
            12:30-1
          </button>
        </ul>
      </div>
      <div>
        <ul>
          <button className="0" id={9} onClick={showSchedual}>
            1-1:30
          </button>
          <button className="0" id={10} onClick={showSchedual}>
            1:30-2
          </button>
          <button className="0" id={11} onClick={showSchedual}>
            2-2:30
          </button>
          <button className="0" id={12} onClick={showSchedual}>
            2:30-3
          </button>
        </ul>
      </div>
      <div>
        <ul>
          <button className="0" id={13} onClick={showSchedual}>
            3-3:30
          </button>
          <button className="0" id={14} onClick={showSchedual}>
            3:30-4
          </button>
          <button className="0" id={15} onClick={showSchedual}>
            4-4:30
          </button>
          <button className="0" id={16} onClick={showSchedual}>
            4:30-5
          </button>
        </ul>
        <br />
        {showResult()}

        <button onClick={saveAppointement}>click</button>
      </div>

      <DoctorAppointement />
    </div>
  );
};

export default Appointement;
