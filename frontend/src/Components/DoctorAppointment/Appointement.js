import React, { useState } from "react";

const Appointement = () => {
  const [schedual, setSchedual] = useState([]);

  const showSchedual = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <div>
      <div>
        <ul>
          <li onClick={showSchedual}>9-9:30</li>
          <li onClick={showSchedual}>9-9:30</li>
          <li onClick={showSchedual}>9-9:30</li>
          <li onClick={showSchedual}>9-9:30</li>
        </ul>
      </div>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Appointement;
