import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom"

export default function Nav({onSearch}) {

    
    return (
    <div className={style.navbar} >
        <h1>Rick & Morty</h1>
        <SearchBar onSearch={onSearch} />
        <div>
            <NavLink className={style.link} to="/about">ABOUT</NavLink>
            <NavLink className={style.link} to="/home">HOME</NavLink>
        </div>
    </div>
)}