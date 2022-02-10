//====================================================//Require
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInfoPage } from "../Reducer/DoctorRegister/index";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { storage } from "../Firebase/firebase";
import { Image } from "cloudinary-react";
import axios from "axios";

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
  const [profileImage, setprofileImage] = useState();
  const [imageSelected, setImageSelected] = useState();
  const uploudImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "yoficjpc");
    axios
      .post("https://api.cloudinary.com/v1_1/dbnsxsigi/image/upload", formData)
      .then((response) => {
        setprofileImage(response.data.url);
        console.log(response.data.url, profileImage);
        setTimeout(() => {
          dispatch(addInfoPage({ fullName, email, password, profileImage }));
          console.log(profileImage);
          history("/doctorsignup2");
        }, 7000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //====================================================//Dispatch & Navigate
  const dispatch = useDispatch();
  const history = useNavigate();

  //====================================================//Next Button Function
  const nextButton = async () => {
    history("/doctorsignup2");
    dispatch(addInfoPage({ fullName, email, password, profileImage }));
    // const metadata = {
    //   contentType: 'image/jpeg',
    // };
    // const imageRef = ref(storage, `imagesDoctor/${fullName}`);
    // uploadBytes(imageRef, image,metadata).then(() => {
    //   getDownloadURL(imageRef).then((url) => {
    //     setURL(url);
    //   }).catch((error) => {
    //     // I think make alert for Error
    //     console.log(error.message);
    //   });
    // }).catch((error) => {
    //   // I think make alert for Error
    //   console.log(error.message);
    // })
    uploudImage();
  };

  //====================================================//Return

  // =================================================//Uploud image to firebase
  const ImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
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
            id="image"
            accept="image/*"
            onChange={(e) => {
              setImageSelected(e.target.files[0]);
            }}
          />
          {/* <Image publicID={URL}/> */}
          <Image cloudName="dbnsxsigi" publicId={profileImage} />
          <button onClick={nextButton} className="nextBtn">
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default Page1;
