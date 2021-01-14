import React from 'react';
import Card from './Card';
import s2 from '../css/cards.module.css';

export default function Cards({cities}) {
  console.log(cities);   
  return (

<div className = {s2.padre}>
 {cities.map((city, index) => <Card max = {city.main.temp_max}
                           min = {city.main.temp_min}
                           name = {city.name}
                           img = {city.weather[0].icon}
                           onClose = {() => alert(city.name)}
                           key = {index}/>)}
</div>

  )
};