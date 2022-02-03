import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegMoneyBillAlt, FaHandHoldingMedical } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import './CardDoctor.css'
export default function CardDoctor() {
  return <div className="card">
    <div  >
      <Link to='/'>          <img className="card-image" src="https://doctorsstorageprod.blob.core.windows.net/98583/Profile/passport_5d017a53-499e-410f-b5a8-6984272ac746.jpg?sv=2017-04-17&sr=b&si=PrivatePolicy&sig=Q0gStGDJgDvSVzDDvb2YofcqGYRVrovz4YSrLL16W%2B8%3D" alt="placeholder" />
      </Link>
    </div>
    <div className="card-information">
      <Link to='/'><h3>Ibrahim Awad Nawaiseh</h3></Link>
      <h5>Ophthalmology </h5>
      <div className="card-row"><FaHandHoldingMedical /><h6>Consultant Ophthalmic Surgeon</h6></div>
      <div className="card-row"><ImLocation /><h6>amman jordan</h6></div>
      <div className="card-row"><FaRegMoneyBillAlt /><h6>50 JOD</h6></div>

    </div>
  </div>;
}
