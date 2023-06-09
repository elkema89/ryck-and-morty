import style from "./App.module.css";
import Nav from "../src/components/Nav/Nav.jsx";
import Detail from "../src/views/Detail/Detail.jsx";
import About from "../src/views/About/About.jsx";
import Cards from "../src/components/Cards/Cards.jsx";
import Form from "./components/Form/Form";
import Error from "./views/pageError/pageError";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const location = useLocation();

  function randomHandler() {
    //Generate random number
    let random = (Math.random() * 826).toFixed();

  random = Number(random);

  if (!characters.id) {
    fetch(`https://rickandmortyapi.com/api/character/${random}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((character) => [...character, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  } else {
    console.log("Ya agregaste todos los personajes");
    return false;
  }
}

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((character) => [...character, data]);
        } else {
          randomHandler("");
        }
      }
    );
  }

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "email@email.com";
  const PASSWORD = "1password";

  function login(user) {
    if (user.email === EMAIL && user.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onClose = (id) => {
    let deleted = characters.filter((character) => character.id !== Number(id));
    setCharacters(deleted);
    console.log(deleted);
  };

  return (
    <div className={style.App}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <div>
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {location.pathname === "*" && <Error />}
      </div>
    </div>
  );
}

export default App;