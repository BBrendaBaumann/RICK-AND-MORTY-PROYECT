import React from "react";
import SearchBar from "../searchbar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css"

export default function Nav(props) {
  return (
    <div className={styles.container}>
      <NavLink to="/home">
        <button className={styles.button}>Home</button>
      </NavLink>
      <NavLink to="/favorites">
        <button className={styles.button}>Favorites</button>
      </NavLink>
      <NavLink to="/about">
        <button className={styles.button}>About</button>
      </NavLink>
      <button className={styles.button} onClick={props.logout}>Logout ❌</button>
      <hr />
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
