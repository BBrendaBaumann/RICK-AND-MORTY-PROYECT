import React from "react";
import SearchBar from "../searchbar/SearchBar";
import { NavLink } from "react-router-dom";


export default function Nav(props) {
  return (
    <div className="nav_container">
      <NavLink to="/home">
        <button className="nav_container__button">Home</button>
      </NavLink>
      <NavLink to="/favorites">
        <button className="nav_container__button">Favorites</button>
      </NavLink>
      <NavLink to="/about">
        <button className="nav_container__button">About</button>
      </NavLink>
      <button className="nav_container__button" onClick={props.logout}>Logout ❌</button>
      <hr />
      {<SearchBar className="nav_searchbar" onSearch={props.onSearch} />}
    </div>
  );
}
