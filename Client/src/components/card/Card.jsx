import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav } from "../../redux/actions";
import { removeFav } from "../../redux/actions";
import styles from "./Card.module.css"

export default function Card(props) {
  const originName = origin.name;

  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
   
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  const myFavorites = useSelector(state => state.myFavorites);
   useEffect (() => {
      myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [myFavorites]); // se ejecuta useEffect cada vez que se modifique myFavorites

  return (
    <div className={styles.container}>
      {isFav ? (
        <button className={styles.button} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styles.button} onClick={handleFavorite}>🤍</button>
      )}

      <button className={styles.buttonx} onClick={() => props.onClose(props.id)}> X </button>
      <h2>Nombre: {props.name} </h2>
      <h2>Key: {props.id} </h2>
      <h2>Status: {props.status} </h2>
      <h2>Especie: {props.species} </h2>
      <h2>Género: {props.gender} </h2>
      <h2>Origen: {props.originName} </h2>
      <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
    </div>
  );
}
