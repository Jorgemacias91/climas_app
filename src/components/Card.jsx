import React from 'react';
import s1 from '../css/card.module.css'
import {Link} from 'react-router-dom';

export default function Card(props) {
  // acá va tu código

  return(
    <>
<div className="container">
   <div className="row">
        <div className="col-md-4 mt-4">
          <div className="card">

            <div className="card-header" className={s1.encabezado}>
              <Link to={`/datos/${props.id}`}>
              <h3 className ={s1.name}>{props.name}</h3>
              </Link>
              <button className={s1.btnx} onClick = {props.onClose}>X</button>
            </div>

            <div className="card-body" className={s1.temp}>

            <div >
              <p>Min</p>
              <p>{props.min}º</p>
            </div>

            <div>
              <p>Max</p>
              <p>{props.max}</p>
            </div>

            </div>

            <div className="card-footer">
            <img src ={ `http://openweathermap.org/img/wn/${props.img}@2x.png`}/> 
            </div>

          </div>
        </div>  
    </div>
</div>
</>
  )
};