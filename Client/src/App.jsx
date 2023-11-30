import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions.js";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import axios from "axios";
import Detail from "./components/detail/Detail.jsx";
import About from "./components/about/About.jsx";
import NotFound from "./components/notfound/NotFound.jsx";
import Nav from "./components/nav/Nav.jsx";
import Form from "./components/form/form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    const characterId = characters.filter((char) => char.id === Number(id));
    if (characterId.length) {
      return alert(`${characterId[0].name} ya existe!`);
    }
    // axios(`${URL}/${id}?key=${API_KEY}`)
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters([...characters, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
    navigate("/home");
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
    dispatch(removeFav(id));
  };

  //* Login
  const [access, setAccess] = useState(false);
  const EMAIL = "brenbaumann40@gmail.com";
  const PASSWORD = "12345697";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas!"); //! mensaje para que el usuario no entre en panico si no coinciden las credenciales o accesos
    }
  }

  function logout() {
    setAccess(false);
  }

  useEffect(() => {
    //* Logueo automático
    !access && navigate("/home");
    // !access && navigate('/');
  }, [access]);

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} logout={logout} />
      ) : null}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <hr />
    </div>
  );
}

export default App;
