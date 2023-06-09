import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   
   return <div className={style.tarjetas}>
      {characters.map((character) => (
         
         <Card 
         character={character}
         key={character.id}
         onClose={onClose}
         />
      ))}
   </div>;
}
