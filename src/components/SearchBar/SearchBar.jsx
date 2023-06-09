import style from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   function changeHandler(e){
      let input = e.target.value
      setId(input);
   }
   
   return (
      <div className={style.buscador}>
         <input type='search' value={id} onChange={changeHandler}/>
         <button onClick={()=> {onSearch(id); setId("")}}>Agregar</button>
      </div>
   );
}
