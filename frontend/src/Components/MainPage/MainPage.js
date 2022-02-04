import React, { useState, useEffect } from "react";
import CardDoctor from "./CardDoctor";
import axios from "axios";
export default function MainPage() {
  const [doctors, setDoctors] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    getAllDoctors();
  }, []);
  const getAllDoctors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/doctors");
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

  let doctorCard = doctors.map((card) => {
    return (
      <CardDoctor
        key={card.id}
        id={card.id}
        fullName={card.fullName}
        address={card.address}
        profileImage={card.profileImage}
        consultationFee={card.consultationFee}
        department={card.departmentId}
        ScientificCertificate={card.scientificCertificate}
      />
    );
  });
  return <div>{doctorCard}</div>;
>>>>>>> cd97f8b4833ecaba849b4c7b6172465b1dd302fe
}
