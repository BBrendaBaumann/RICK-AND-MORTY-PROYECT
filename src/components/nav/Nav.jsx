import React from "react";
import SearchBar from "../searchbar/SearchBar";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
      <hr/>
     <SearchBar onSearch={props.onSearch} /> 
    </div>
  );
}
