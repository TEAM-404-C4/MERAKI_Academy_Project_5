//====================================================//Require
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInfoPage } from "../Reducer/DoctorRegister/index";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { storage } from "../Firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
//CSS File
import "./Page1.css";

//====================================================//Page 1 Function
const Page1 = () => {
  const state = useSelector((state) => {
    return state.doctorRegReducer.doctorInfo;
  });

  // =======================================================
  const [fullName, setFullName] = useState(state.fullName);
  const [email, setEmail] = useState(state.email);
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [URL, setURL] = useState("https://firebasestorage.googleapis.com/v0/b/healthycare-5ffd5.appspot.com/o/imagesDoctor%2Fprofile.png?alt=media&token=da1d82da-8ab5-481e-9613-211ca4059300");
  //====================================================//Dispatch & Navigate
  const dispatch = useDispatch();
  const history = useNavigate();

  //====================================================//Next Button Function
  const nextButton = async () => {
    const metadata = {
      contentType: 'image/jpeg',
    };
    const imageRef = ref(storage, `imagesDoctor/${fullName}`);
    uploadBytes(imageRef, image,metadata).then(() => {
      getDownloadURL(imageRef).then((url) => {
        setURL(url);
      }).catch((error) => {
        // I think make alert for Error 
        console.log(error.message);
      });
    }).catch((error) => {
      // I think make alert for Error 
      console.log(error.message);
    })
    console.log(URL);
    await dispatch(addInfoPage({ fullName, email, password, URL }));
    history("/doctorsignup2");
  };

  //====================================================//Return

  // =================================================//Uploud image to firebase
  const ImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    
    }
  };

  // =================================================//Uploud image to firebase
  return (
    <>
      <div className="mainPage1">
        <div className="Page1">
          <label className="levelLabel1">
            Name , Email and Password - Step 1 of 4
          </label>
          <input
            value={fullName}
            placeholder="Full Name"
            type="text"
            className="fullName"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <input
            value={email}
            placeholder="E-Mail"
            type="email"
            className="doctorEmail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            value={password}
            placeholder="Password"
            type="password"
            className="doctorPassword"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="file"
            className="doctorProfileImage"
            id="image" accept="image/*"
            onChange={ImageChange}
          />
          <img src={URL} alt={fullName} />
          <button onClick={nextButton} className="nextBtn">
            <BsFillArrowRightCircleFill />
          </button>
          
        </div>
      </div>
    </>
  );
}

export default Page1;
