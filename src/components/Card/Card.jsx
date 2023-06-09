import style from "./Card.module.css"
import { useNavigate } from "react-router-dom";



export default function Card({character, onClose}) {
   const navigate = useNavigate()

   const navigateHandler= () => {
      navigate(`/detail/${character.id}`);
   }

   return (
      <div className={style.tarjeta}>
         <div className={style.boton}>
         <button onClick={() => {
            onClose(character.id);
         }}>X</button>
         </div>
         <h2 onClick={navigateHandler}>{character.name}</h2>
         <img src={character.image} alt= {character.name} />
      </div>
   );
}