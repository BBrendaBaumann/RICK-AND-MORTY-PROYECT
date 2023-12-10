import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { TbArrowBackUp } from "react-icons/tb";

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

export default function Detail(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const idNumber = Number(id);
  const [character, setCharacter] = useState({});

  let allCharacters = props.characters;
  let idActually = allCharacters.find((char) => char.id === idNumber);
  let idPosition = allCharacters.findIndex((char) => char.id === idNumber);

  const comeback = () => {
   navigate('/home')
 };

 const next = () => {
   let newId;
   if (idPosition !== allCharacters.length - 1) {
     newId = allCharacters[idPosition + 1].id;
   }
   if (idPosition === allCharacters.length - 1) {
     newId = allCharacters[0].id;
   }
   navigate(`/detail/${newId}`);
 };

 const previus = () => {
   let newId;
   if (idPosition === 0) {
     newId = allCharacters[allCharacters.length - 1].id;
   }
   if (idPosition !== 0) {
     newId = allCharacters[idPosition - 1].id;
   }
   navigate(`/detail/${newId}`);
 };

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <div className="detail_container">

<SlArrowLeft className="detail_container__icon" onClick={next} />
<div className="detail_container__img_img">
  <img
    className="detail_container__img_img"
    src={character.image}
    alt={character.name}
  />
</div>
<div className="detail_container__text">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <h3>Status:{character.status}</h3>
      <h3>Specie:{character.species}</h3>
      <h3>Gender:{character.gender}</h3>
      <h3>Origin:{character.origin?.name}</h3>
      <h3>Location:{character.location?.name}</h3>
      </div>
      <SlArrowRight className="detail_container__icon" onClick={previus} />
      </div>
    <TbArrowBackUp className="detail_container__icon" id="detail_comeback" onClick={comeback}/>
    </div>
  );
}
