import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { MdOutlinePassword } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Setting.css";
import { logoutRedux } from "../Reducer/login/index";
import { RiContactsFill } from "react-icons/ri";
import { useEffect } from "react";

//

const Setting = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPhone, setOldPhone] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  //Doctor Setting (useState
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [phone, setPhone] = useState("");
  const [Patientphone, setPatientPhone] = useState("");

  const [address, setAddress] = useState("");
  const [waitingTime, setWaitingTime] = useState("");
  const [consultationFee, setConsultationFee] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [cityId, setcityId] = useState("");

  //
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      doctorId: state.loginReducer.roleId,
    };
  });

  const logout = () => {
    let timerInterval;
    dispatch(logoutRedux());
    Swal.fire({
      title: "logged out please log back in",
      html: " I will close in <b></b> milliseconds.",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        navigate("/mainpage");
      }
    });
  };

  // ======================================================= Change Password Function

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(
        "http://localhost:5000/patients/changepassword",
        { oldPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      if (result.data.success) {
        const myTimeout = setTimeout(logout, 2000);
        Swal.fire({
          position: "center",
          icon: "success",
          title: result.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };

  // ======================================================= Change phone Function
  const changePhone = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(
        "http://localhost:5000/patients/changephone",
        {
          oldPhone,
          newPhone,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      if (result.data.success) {
        const myTimeout = setTimeout(logout, 2000);
        Swal.fire({
          position: "center",
          icon: "success",
          title: result.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };

  // ======================================================= Change userinfo Function
  const changeInfo = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(
        "http://localhost:5000/patients/update",
        {
          firstName,
          lastName,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      if (result.data.success) {
        const myTimeout = setTimeout(logout, 2000);
        Swal.fire({
          position: "center",
          icon: "success",
          title: result.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };

  // ======================================================= Change Doctor Information
  const changeDoctorInfo = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(
        "http://localhost:5000/doctors/update/",
        {
          fullName,
          email,
          password,
          profileImage,
          specialization,
          phone,
          address,
          waitingTime,
          consultationFee,
          departmentId,
          cityId,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      if (result.data.success) {
        const myTimeout = setTimeout(logout, 2000);
        Swal.fire({
          position: "center",
          icon: "success",
          title: result.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };
  // =================================== get Patient by id
  const getPatientById = async () => {
    try {
      const patientId = window.localStorage.getItem("userIdForSettings");
      const result = await axios.get(
        `http://localhost:5000/patients/${patientId}`
      );
      if (result.data.success) {
        setFirstName(result.data.result[0].firstName);
        setPatientPhone(
          result.data.result[0].phone == null
            ? "You Do Not Have Phone Please Add it"
            : result.data.result[0].phone
        );
        setlastName(result.data.result[0].lastName);
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
      }
    }
  };
  // ======================================================= get Doctor by name
  const getDoctoById = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5000/doctors/${localStorage.getItem(
          "userIdForSettings"
        )}`
      );
      if (result.data.success) {
        setFullName(result.data.result[0].fullName);
        setEmail(result.data.result[0].email);
        setProfileImage(result.data.result[0].profileImage);
        setSpecialization(result.data.result[0].specialization);
        setPhone(result.data.result[0].phone);
        setAddress(result.data.result[0].address);
        setWaitingTime(result.data.result[0].waitingTime);
        setConsultationFee(result.data.result[0].consultationFee);
        setDepartmentId(result.data.result[0].Department);
        setcityId(result.data.result[0].city);
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
      }
    }
  };

  useEffect(() => {
    getDoctoById();
    getPatientById();
  }, []);

  return (
    <div className="test26">
      {/* --------------------------------------------------------------------------part1 Doctor Setting */}
      {state.doctorId == 2 || localStorage.getItem("roleId") == 2 ? (
        <div className="mainChangeDoctorDiv">
          <div className="changeDiv">
            <div className="changeInfoDiv">
              {true ? (
                <div className="changeInfoFormDoc">
                  <form onSubmit={changeInfo} className="cInforomDoc">
                    <div className="infoFormDocPart1">
                      <label>FullName</label>
                      <input
                        type="text"
                        defaultValue={fullName}
                        className="doctorInfo"
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                      />
                      <label>E-mail</label>
                      <input
                        type="text"
                        className="doctorInfo"
                        defaultValue={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <label>Profile image</label>

                      <input
                        type="text"
                        className="doctorInfo"
                        defaultValue={profileImage}
                        onChange={(e) => {
                          setProfileImage(e.target.value);
                        }}
                      />
                      <label>Specialization</label>

                      <input
                        type="text"
                        className="doctorInfo"
                        defaultValue={specialization}
                        onChange={(e) => {
                          setSpecialization(e.target.value);
                        }}
                      />
                      <label>Phone </label>

                      <input
                        type="text"
                        className="doctorInfo"
                        defaultValue={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>

                    <div className="infoFormDocPart2">
                      <label>Address </label>
                      <input
                        type="text"
                        className="doctorInfo"
                        defaultValue={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                      <label>Waiting Time </label>
                      <input
                        type="text"
                        className="doctorInfo"
                        defaultValue={waitingTime}
                        onChange={(e) => {
                          setWaitingTime(e.target.value);
                        }}
                      />
                      <label>Consultation Fee </label>
                      <input
                        type="text"
                        className="doctorInfo"
                        defaultValue={consultationFee}
                        onChange={(e) => {
                          setConsultationFee(e.target.value);
                        }}
                      />
                      <label>Department</label>
                      <input
                        type="text"
                        className="doctorInfo"
                        defaultValue={departmentId}
                        onChange={(e) => {
                          setDepartmentId(e.target.value);
                        }}
                      />
                      <label>City</label>

                      <input
                        type="text"
                        className="doctorInfo"
                        defaultValue={cityId}
                        onChange={(e) => {
                          setcityId(e.target.value);
                        }}
                      />
                      <button
                        className="savebtn"
                        onClick={(e) => {
                          e.preventDefault();
                          Swal.fire({
                            title: "Enter Your Password Here",
                            text: "",
                            input: "password",
                            inputValue: "",
                            showCancelButton: true,
                          }).then((result) => {
                            setPassword(result.value);
                            changeDoctorInfo(e);
                          });
                        }}
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="mainChangeDiv">
          {/* --------------------------------------------------------------------------part 2  patient S*/}

          <div className="changeDivPatient">
            <div className="changeInfoDivPatient">
              {true ? (
                <div className="changeInfoForm">
                  <form onSubmit={changeInfo} className="cInfoFrom">
                    <label className="patientLabel">First name</label>
                    <input
                      type="text"
                      defaultValue={firstName}
                      className="patientInfo"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                    <label className="patientLabel">Last name</label>
                    <input
                      type="text"
                      defaultValue={lastName}
                      className="patientInfo"
                      onChange={(e) => {
                        setlastName(e.target.value);
                      }}
                    />
                    <label className="patientLabel">Password</label>
                    <input
                      type="password"
                      className="patientInfo"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />

                    <button className="savebtn" type="submit">
                      Save Changes
                    </button>
                  </form>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* ---------------------------------------------------change password  */}

          <div className="changeDivPatient">
            <div className="changePasswordDiv">
              {true ? (
                <div className="changeInfoForm">
                  <form onSubmit={changePassword} className="cInfoFrom">
                    <label className="patientLabel">Old password</label>

                    <input
                      type="password"
                      className="patientInfo"
                      onChange={(e) => {
                        setOldPassword(e.target.value);
                      }}
                    />
                    <label className="patientLabel">New password</label>

                    <input
                      type="password"
                      className="patientInfo"
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
                    />
                    <button className="savebtn" type="submit">
                      Save Changes
                    </button>
                  </form>
                </div>
              ) : (
                <></>
              )}
            </div>
            {/* --------------------------------------------------change phone  */}
            <div>
              <div className="changePhoneDiv">
                <div className="changeInfoForm">
                  <form onSubmit={changePhone} className="cInfoFrom">
                    <label className="patientLabel">Old phone number</label>
                    <input
                      type="number"
                      className="patientInfo"
                      defaultValue={Patientphone}
                      onChange={(e) => {
                        setOldPhone(e.target.value);
                      }}
                    />
                    <label className="patientLabel">New phone number</label>

                    <input
                      type="number"
                      className="patientInfo"
                      onChange={(e) => {
                        setNewPhone(e.target.value);
                      }}
                    />
                    <label className="patientLabel">Password</label>

                    <input
                      type="password"
                      className="patientInfo"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />

                    <button className="savebtn" type="submit">
                      Save Changes
                    </button>
                  </form>
                </div>

                <></>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Setting;
