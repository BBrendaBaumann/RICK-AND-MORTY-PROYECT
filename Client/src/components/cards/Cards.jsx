import Card from "../card/Card";
import React from "react";



//{ characters }
//{id,name,status,species,gender,origin,image,onClose}, index

export default function Cards({characters, onClose}) { 
  return (
    <div className="cards_container">
      { 
       !characters.length
       ? (
        <div className="cards_container__mensajeinicio">
          <p className="cards_container__mensajeinicio_text">
          Start your adventure by entering an ID... enter the id and press <button className="cards_container__button">Add</button> to add
            a new Character. You can also generate a random Character by
            pressing <button className="cards_container__button" >Random</button>
          </p>
        </div>
      )
       : (
      characters.map(character => (
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
      )}
    </div>
  );
}