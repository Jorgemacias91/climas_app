import React, { useState } from 'react';
import s3 from '../css/search.module.css'
import logo from '../../src/logo.svg';

export default function SearchBar({onSearch}) {
  
 const [city,setCity] = useState("")
  return(
    <div className="card">
      <img src={logo} className="App-logo" alt="logo" />
    <form className="card-body" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      console.log(city);
      setCity("");
    }}>
      <div className="form-group">
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        className="form-control"
        onChange={e => setCity(e.target.value)}
        />
        </div>
        <button className="bg-primary text-white mt-3">Agregar</button>
      
    </form>
    </div>
  )};