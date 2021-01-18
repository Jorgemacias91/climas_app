import React from 'react';
import style from '../css/about.module.css'
import clima from '../clima.jpg'

export default function About(){
    return(
        <div className={style.about}>
        <h1>Aplicación de Clima</h1>
        <p>En esta aplicación podrà buscar los datos requeridos sobre temperatura, viento, latitud, longitud, cantidad de nubes, entre otras cosas, facil de usar y con información actualizada</p>
        <img src={clima}/>
        </div>
    )
}