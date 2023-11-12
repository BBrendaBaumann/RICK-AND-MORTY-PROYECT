import Card from "./Card";
import React from "react";
//{ characters }
//{id,name,status,species,gender,origin,image,onClose}, index
export default function Cards(props) {
  return (
    <div>
      { props.characters &&
      props.characters.map((character) => {
        return (
          <Card 
          key={character.index} 
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin= {character.origin.name}
          image={character.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
          > </Card>
        );
      })}
    </div>
  );
}