import React from 'react';

export default function Datos({city}){
    if(city){
return(
    <>
    <div className="container">
                    <h2 className="text-white">{city.name}</h2>
                    <div className="text-white">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
    </>
)
    }else{
        return <span>No hay ciudades</span>
    }
}