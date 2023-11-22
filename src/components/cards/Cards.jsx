import Card from "../card/Card";
import React from "react";

//{ characters }
//{id,name,status,species,gender,origin,image,onClose}, index

export default function Cards({characters, onClose}) { 
  return (
    <div>
      { characters.map(character => (
          <Card 
          key={character.id} 
          id={character.id} 
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin= {character.origin.name}
          image={character.image}
          onClose={onClose}
          > </Card>
        ))
      }
    </div>
  );
}