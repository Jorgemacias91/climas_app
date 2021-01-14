import React from 'react';
import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
     
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
      
    </div>
  );
}

export default App;