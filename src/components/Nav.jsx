import React from 'react';
import SearchBar from '../components/SearchBar'
import {Link} from 'react-router-dom';
import style from '../css/nav.module.css'

function Nav(){
    return(

        
        <nav className="navbar navbar-dark bg-dark">
                <Link to="/"><h3><span className={style.nav}>Climas App</span></h3></Link>
                
                <div>
                    <Link to="/About"><h3><span className={style.nav}>Info</span></h3></Link>
               </div>
        </nav>

        
    )
}
export default Nav;

