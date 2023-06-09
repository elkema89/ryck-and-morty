import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

import { useState, useEffect } from "react";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => {
        window.alert(error);
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.contain}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.origin?.name}</p>
      </div>
    </div>
  );
}