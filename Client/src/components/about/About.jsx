import React from "react";
import styles from "./About.module.css"


export default function About(props) {
  return (
    <div>
     <h1 className={styles.h1} >About me</h1>
     <p className={styles.p}>
        Visita mi 
        <a className={styles.a}
        href="https://github.com/BBrendaBaumann"
        target="_blank"
        >GitHub</a>
        </p> 
    </div>
  );
}