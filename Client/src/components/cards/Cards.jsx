import Card from "../card/Card";
import React from "react";
import styles from "./Cards.module.css";

//{ characters }
//{id,name,status,species,gender,origin,image,onClose}, index

export default function Cards({characters, onClose}) { 
  return (
    <div className={styles.container}>
      { 
       !characters.length
       ? <h2 className={styles.h2}>Comience su aventura ingresando un id...</h2>
       :
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
      }
    </div>
  );
}