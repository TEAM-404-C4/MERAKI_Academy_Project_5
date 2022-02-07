import React, { useState } from "react";

const Appointement = () => {
  const [first, setfirst] = useState(false);

  const dis = (e) => {};

  return (
    <div>
      <select onChange={dis}>
        <option disabled={false} value="1">
          1
        </option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};

export default Appointement;
