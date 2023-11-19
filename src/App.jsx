import { useState } from "react";
import Nav from "./components/nav/Nav.jsx";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import axios from "axios"; 

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

function App() {
const [characters, setCharacters] = useState([]);
function onSearch(id) {
  axios(`${URL}/${id}?key=${API_KEY}`).then(
     ({ data }) => {
        if (data.name) {
           setCharacters([...characters, data]);
        } else {
           window.alert('¡No hay personajes con este ID!');
        }
     }
  );
}

const onClose = id => {
  setCharacters(characters.filter(char => char.id !== Number(id)))
}

  
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <hr />
      <Cards characters={characters} onClose={onClose} />

    </div>
  );
}

export default App;
