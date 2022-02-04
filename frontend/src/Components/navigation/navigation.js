import { Link } from "react-router-dom";
import {
  BsHouseFill,
  BsLockFill,
  BsNewspaper,
  BsBoxArrowInRight,
  BsWindow,
} from "react-icons/bs";

import "./navigation.css";
const Navigation = () => {
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
        <div>
          <Link to="/login">
            <BsLockFill />
          </Link>
          <p className="nav_label">Login</p>
        </div>
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
        <div>
          <Link to="/logout">
            <BsBoxArrowInRight />
          </Link>
          <p className="nav_label">logout</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
