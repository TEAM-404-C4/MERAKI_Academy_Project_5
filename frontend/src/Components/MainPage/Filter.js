import axios from "axios";
import React, { useState } from "react";

const Filter = ({ setSearch }) => {
  const [department1, setDepartment] = useState(0);
  const [city, setCity] = useState(0);
  // =====================

  const submitDep = async (e) => {
    setDepartment(e.target.value);
    console.log("department", department1, "city", city);

    if (e.target.value != 0) {
      try {
        const res = await axios.post(
          "http://localhost:5000/doctors/department",
          {
            department: e.target.value,
            city,
          }
        );
        console.log(res.data.result);
        setSearch(res.data.result);
      } catch (err) {
        console.log(err.response);
      }
    } else {
      setSearch("");
    }
  };
  // =================================
  const submitCity = async (e) => {
    setCity(e.target.value);
    console.log("department", department1, "city", city);

    if (e.target.value != 0) {
      try {
        const res = await axios.post(
          "http://localhost:5000/doctors/department",
          {
            department: department1,
            city: e.target.value,
          }
        );
        console.log(res.data.result);
        setSearch(res.data.result);
      } catch (err) {
        console.log(err.response);
      }
    } else {
      setSearch("");
    }
  };

  return (
    <div>
      <select
        className="departmentDoctorFolter"
        defaultValue={0}
        onChange={submitDep}
      >
        <option value={0}>ALL</option>
        <option value={1}>RADIOLOGY</option>
        <option value={2}>LABORATORY</option>
        <option value={3}>PHARMACY</option>
        <option value={4}>SURGICAL</option>
        <option value={5}>MEDICAL</option>
        <option value={6}>PEDIATRIC</option>
        <option value={7}>ORTHOPIDIC</option>
        <option value={8}>OPHTHALMOLOGY</option>
        <option value={9}>DEMATOLOGY</option>
        <option value={10}>OB&GYN</option>
        <option value={11}>DENTAL</option>
        <option value={12}>PHYSIOTHERAPY</option>
        <option value={13}>CARDIOLOGY</option>
        <option value={14}>PHYCHIATRIC</option>
        <option value={15}>NEUROLOGY</option>
        <option value={16}>GENERAL DOCTOR</option>
      </select>
      {/* ================================== */}

      <select
        className="cityDoctorRegister"
        defaultValue={0}
        onChange={(e) => {
          submitCity(e);
        }}
      >
        <option value={0}>ALL</option>
        <option value={1}>Amman</option>
        <option value={2}>IRBID</option>
        <option value={3}>ZARQA</option>
        <option value={4}>MAFRAQ</option>
        <option value={5}>AJLOUN</option>
        <option value={6}>JERASH</option>
        <option value={7}>MADABA</option>
        <option value={8}>BALQA</option>
        <option value={9}>KARAK</option>
        <option value={10}>TAFILEH</option>
        <option value={11}>MAAN</option>
        <option value={12}>AQABA</option>
      </select>
    </div>
  );
};

export default Filter;
