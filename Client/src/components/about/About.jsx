import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {TbArrowBackUp} from "react-icons/tb";
import { useNavigate } from "react-router-dom";


export default function About(props) {
  const navigate = useNavigate();
  const comeback = () => {
    navigate("/home");
  };
  return (
    <div className="about_container">
      <div className="about_container__text">
        <h1 className="about_h1">About Us</h1>
        <h2 className="about_h2">
        Rick and Morty is an American animated television series based on a series of crudely animated short films.
        The series follows the misadventures of cynical mad scientist Rick Sanchez and his restless and easily influential grandson Morty Smith, who divided their time between domestic life and interdimensional adventures.
        After disappearing for almost 20 years, Rick Sanchez suddenly arrives at his daughter Beth's door looking to move in with her and her family. Beth welcomes him with open arms, but her husband, Jerry, is not too thrilled about the tearful reunion, as Rick's arrival serves to shake things up in the house. Rick turns the garage into his personal laboratory and gets to work on all kinds of dangerous sci-fi gadgets. That wouldn't be so bad if it weren't for the fact that Rick continues to involve his grandchildren Morty and Summer in his crazy adventures.
        </h2>

      </div>

      <div className="about_me">
      <h3 className="about_h3">Application created by Brenda Baumann</h3>
        <div className="about_containerforicon">
            <a
              href="https://www.linkedin.com/in/brenda-baumann-b74956195"
              target="_blank"
              className="about_containerforicon__icon"
            >
              <BsLinkedin className="about_containerforicon__icon_linkdin" />
            </a>

            <a 
            href="https://github.com/BBrendaBaumann"
            target="_blank" 
            className="about_containerforicon__icon"
            >
              <BsGithub className="about_containerforicon__icon_github" />
            </a>
          </div>
          <TbArrowBackUp
        className="about_container__icon"
        id="about_comeback"
        onClick={comeback}
      />
      </div>
        </div>
      
  );
}













    {/* <div>
     <h1 className={styles.h1} >About me</h1>
     <p className={styles.p}>
        Visita mi 
        <a className={styles.a}
        href="https://github.com/BBrendaBaumann"
        target="_blank"
        >GitHub</a>
        </p> 
    </div> */}