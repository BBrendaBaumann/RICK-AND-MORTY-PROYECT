import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./components/nav/Nav.jsx";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import axios from "axios"; 
import Detail from "./components/detail/Detail.jsx";
import NotFound from "./components/notfound/NotFound.jsx";

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

function App() {
const [characters, setCharacters] = useState([]);

const navigate = useNavigate();

function onSearch(id) {
  axios(`${URL}/${id}?key=${API_KEY}`).then(
     ({ data }) => {
        if (data.name) {
           setCharacters([...characters, data]);
        } else {
           window.alert('¡No hay personajes con este ID!');
        }
     });
     navigate("/home");
}

const onClose = id => {
  setCharacters(characters.filter(char => char.id !== Number(id)))
}

  
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
        path="/home"
        element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route
        path="/about"
        element={<About/>}
        />
        <Route
        path="/detail/:id"
        element={<Detail/>}
        />
        <Route
        path="*"
        element= {<NotFound/>}
        />
      </Routes>
      <hr />
      

    </div>
  );
}

export default App;
