import { Link } from "react-router-dom";
import {
  BsHouseFill,
  BsLockFill,
  BsNewspaper,
  BsBoxArrowInRight,
  BsWindow,
} from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import { logoutRedux } from "../Reducer/login/index";
import "./navigation.css";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });
  console.log(state.isLoggedIn);

  return (
    <>
      <div className="navigation">
        <div className="logo"></div>
        <div>
          <Link to="/mainpage">
            <BsHouseFill />
          </Link>
          <p className="nav_label">Home</p>
        </div>
        <div>
          <Link to="/appointement">
            <BsHouseFill />
          </Link>
          <p className="nav_label">appointement</p>
        </div>

        {!state.isLoggedIn ? (
          <div>
            <Link to="/login">
              <BsLockFill />
            </Link>
            <p className="nav_label">Login</p>
          </div>
        ) : (
          <></>
        )}
        {!state.isLoggedIn ? (
          <div>
            <Link to="/Register">
              <BsNewspaper />
            </Link>
            <p className="nav_label">Register</p>
          </div>
        ) : (
          <></>
        )}

        {state.isLoggedIn ? (
          <div>
            <Link to="/dashBoard">
              <BsWindow />
            </Link>
            <p className="nav_label">Dashbord</p>
          </div>
        ) : (
          <></>
        )}

        {state.isLoggedIn ? (
          <div>
            <Link to="/setting">
              <MdSettings />
            </Link>
            <p className="nav_label">Setting</p>
          </div>
        ) : (
          <></>
        )}
        {state.isLoggedIn ? (
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
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Navigation;
