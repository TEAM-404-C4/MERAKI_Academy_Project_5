//=======================================================//Require
import axios from "axios";
import React from "react";
import "./Search.css";
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
    <div className="SearchDiv">
      <input
        className="searchInput"
        placeholder="Search by doctor name..."
        type="text"
        onChange={search}
      />
    </div>
  );
};

export default Search;
