import React from "react";
/* import styles from "./About.module.css"; */
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";


export default function About(props) {
  return (
    <div className="about_container">
      <div className="about_divino">
        <h1 className="about_title">About Us</h1>
        <p className="about_pabout">
        Rick and Morty es una serie de televisión animada estadounidense basado en una serie de cortometrajes crudamente animados.
        La serie sigue las desventuras del cínico científico loco Rick Sánchez y su inquieto y fácilmente influyente nieto Morty Smith, que dividió su tiempo entre la vida doméstica y las aventuras interdimensionales.
        Después de desaparecer durante casi 20 años, Rick Sánchez llega repentinamente a la puerta de su hija Beth en busca de mudarse con ella y su familia. Beth lo recibe con los brazos abiertos, pero su marido, Jerry, no está muy emocionado por la reunión llorosa, ya que la llegada de Rick sirve para sacudir las cosas en la casa. Rick convierte el garaje en su laboratorio personal y se pone a trabajar en todo tipo de artilugios de ciencia ficción peligrosos. Eso no sería tan malo si no fuera por el hecho de que Rick continúa involucrando a sus nietos Morty y Summer en sus locas aventuras.
        </p>
      </div>

      <footer className="about_footer">
        <div className="about_footerContainer">
          <p className="about_pabout">Una aplicacion creada por Brenda Baumann</p>
          <div className="about_redes">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/brenda-baumann-b74956195"
            >
              <BsLinkedin className="about_icon" />
            </a>
            <a target="_blank" href="https://github.com/BBrendaBaumann">
              <BsGithub className="about_icon" />
            </a>
          </div>
        </div>
      </footer>
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