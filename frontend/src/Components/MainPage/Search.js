//====================================================//Require
import axios from "axios";
import React from "react";

const Search = ({ setSearch }) => {
  const search = async (e) => {
    try {
      const res = await axios.post("http://localhost:5000/doctors/search", {
        fullName: e.target.value,
      });
      setSearch(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  //=======================================================//Return
  return (
    <div>
      <input
        placeholder="search..."
        className="searchDoctr"
        type="text"
        onChange={search}
      />
    </div>
  );
};

export default Search;
