import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  BsHouseFill,
  BsLockFill,
  BsNewspaper,
  BsBoxArrowInRight,
  BsWindow,
} from "react-icons/bs";
import { logoutRedux } from "../Reducer/login/index";

import "./navigation.css";
const Navigation = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.loginReducer.isLoggedIn;
  });

  return (
    <>
      <div className="navigation">
        <div className="logo"> </div>
        <div>
          <Link to="/mainpage">
            <BsHouseFill />
          </Link>
          <p className="nav_label">Home</p>
        </div>

        {!state ? (
          <div>
            <Link to="/login">
              <BsLockFill />
            </Link>
            <p className="nav_label">Login</p>
          </div>
        ) : (
          <></>
        )}
        <div>
          <Link to="/Register">
            <BsNewspaper />
          </Link>
          <p className="nav_label">Register</p>
        </div>
        <div>
          <Link to="/dashBoard">
            <BsWindow />
          </Link>
          <p className="nav_label">Dashbord</p>
        </div>
        <div
          onClick={() => {
            dispatch(logoutRedux());
          }}
        >
          <Link to="/">
            <BsBoxArrowInRight />
          </Link>
          <p className="nav_label">logout</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
