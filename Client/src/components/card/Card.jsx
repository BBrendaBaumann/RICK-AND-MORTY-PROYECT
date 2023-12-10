import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav } from "../../redux/actions";
import { removeFav } from "../../redux/actions";


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
    <div className="card_container__div">
      {isFav ? (
        <button 
        className="card_container__div_button_cor" 
        onClick={handleFavorite}>❤️</button>
      ) : (
        <button 
        className="card_container__div_button_cor" 
        onClick={handleFavorite}>🤍</button>
      )}

      <button 
      className="card_container__div_buttonx" 
      onClick={() => props.onClose(props.id)}> X 
      </button>
      <div className="card_container__div_text">
      <h2>Name: {props.name} </h2>
      <h2>Key: {props.id} </h2>
      <h2>Status: {props.status} </h2>
      <h2>Specie: {props.species} </h2>
      <h2>Género: {props.gender} </h2>
      <h2>Origin: {props.originName} </h2>
      <Link to={`/detail/${props.id}`}>
        <img className="card_container__div_img" src={props.image} alt="" />
      </Link>
      </div>
      
      
    </div>
  );
}
