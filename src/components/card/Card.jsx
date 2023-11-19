import React from "react";

export default function Card(props) {
  const originName = origin.name;

  return (
    <div>
      <button onClick={() => props.onClose(props.id)}> X </button>
      <h2>Nombre: {props.name} </h2>
      <h2>Key: {props.id} </h2>
      <h2>Status: {props.status} </h2>
      <h2>Especie: {props.species} </h2>
      <h2>Género: {props.gender} </h2>
      <h2>Origen: {props.originName} </h2>
      <img src={props.image} alt="" />
    </div>
  );
}