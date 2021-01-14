
import React from 'react';
import Card from './Card';
import s2 from '../css/cards.module.css';
export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className={s2.padre}>
        {cities.map(c => <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}










/*import React from 'react';
import Card from './Card';
import s2 from '../css/cards.module.css';

export default function Cards({cities}) {
  if(cities){  
  return (

<div className = {s2.padre}>
 {cities.map((city, index) => <Card max = {city.main.temp_max}
                           min = {city.main.temp_min}
                           name = {city.name}
                           img = {city.weather[0].icon}
                           onClose = {() => alert(city.name)}
                           key = {index}/>)}
</div>

  )}
  else{
    return(
      <span>Sin Ciudades</span>
    )
  }
};*/