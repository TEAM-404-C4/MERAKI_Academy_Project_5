//====================================================//Require
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInfoPage } from "../Reducer/DoctorRegister/index";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";

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
  const [profileImage, setprofileImage] = useState(
    "https://i.ibb.co/5YV7j9Z/Male-doctor-with-stethoscope-avatar-Health-care-services-concept-Vector-illustration.jpg"
  );
  const [imageSelected, setImageSelected] = useState();
  const [message, setMessage] = useState("");
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
    if (fullName) {
      if (email) {
        if (password) {
          await dispatch(
            addInfoPage({ fullName, email, password, profileImage })
          );
          history("/doctorsignup2");
        } else {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Please Enter The Password",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Please Enter your Email",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Please Enter Your Full Name",
        showConfirmButton: false,
        timer: 2000,
      });
    }
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
    // uploudImage();
  };

  //====================================================//Return

  // =================================================//Uploud image to firebase
  const ImageChange = async (e) => {
    try {
      if (e.target.files[0]) {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "project4");

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/omarkataa/image/upload",
          {
            method: "POST",
            body: data,
          }
        );

        const file = await res.json();
        setprofileImage(file.secure_url);
        console.log(file.secure_url, profileImage);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // =================================================//Uploud image to firebase
  return (
    <>
      <div className="mainPage1">
        <div className="Page1">
          <div className="labelDiv1">
            <div className="levelLabel1">
              Name , Email and Password - Step 1 of 4
            </div>
          </div>
          <div className="infoRegisterDoctorDiv1">
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
            <div className="uploadImageAndShowPicture">
              <div className="uploadProfileImagebtn">
                <div className="profilePictureDiv">Profile Picture</div>

                <input
                  type="file"
                  className="doctorProfileImage"
                  id="image"
                  accept="image/*"
                  onChange={(e) => {
                    ImageChange(e);
                  }}
                />
              </div>
              <div className="showPic">
                <img className="doctocImgTag" src={profileImage} />
              </div>
            </div>
            <div className="nextbtn1">
              <button onClick={nextButton} className="nextBtn">
                <BsFillArrowRightCircleFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
