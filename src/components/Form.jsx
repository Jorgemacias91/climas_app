import React from "react";
import SearchBar from '../components/SearchBar';
import logo from '../../src/logo.svg';

export default function Form({onSearch}){
    return(
    
        <div className="card">
        <img src={logo} className="App-logo" alt="logo" />
            <form className="card-body">

                <SearchBar
                  onSearch={onSearch}
                />
                
            </form>
            </div>
        
    )
}