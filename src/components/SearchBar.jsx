import React from 'react';
import s3 from '../css/search.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return <div >
    <input  type= "text" placeholder={"Ciudad..."}></input>
    <button className ={s3.search} onClick = {() => props.onSearch("Buscando...")}> Buscar </button>
  </div>
};