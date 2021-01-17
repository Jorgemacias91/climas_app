import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About'
import {Route} from 'react-router-dom';
import Datos from './components/Datos';

import SearchBar from './components/SearchBar'
//console.log(process.env.REACT_APP_AUTH_TOKEN)
function App() {

  const [cities, setCities] = useState([]);

  function onSearch(ciudad){
    const apiKey = 'f8e75b78041343b7fa4e6050533c0068';
    console.log(apiKey)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
           setCities(oldCities => [...oldCities, ciudad]);
          
        } else {
          alert("Ciudad no encontrada");
        }
      });
        
  }

  function Delete(id){
    setCities(cities.filter(city => city.id !== id)
    )
  }

  function onFilter(ciudadId){
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length>0){
      return ciudad[0]
    }else{
      return null;
    }
  }

  return (
    <div className="App">

        <Route
            path="/"
            component ={Nav}
        />
       <div className="container">
          <div className="row mt-4">
           <div className="col-md-4">
           <Route className="card-body"
           path="/"
           exact
           render={()=> <SearchBar onSearch={onSearch}/>}
           />
           </div>

           <div className="col-md-8">
           <Route
            path="/"
            exact
            render={()=> <Cards cities={cities} onClose={Delete}/>}
           />
          </div>
        
        </div>
        </div>
      
          <Route 
            path="/About"
            component={About}
         />

        <Route
            path="/datos/:datosId"
            render ={({match}) => <Datos city={onFilter(match.params.datosId)}/>}
        />
      
    </div>
  );
}

export default App;