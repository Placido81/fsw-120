import React from "react";
import './NavBar.css'
import {Link} from 'react-router-dom';


function NavBar () {
   
    return (
        <div className="nav">
        
            <Link id="home" to='/'> Home </Link>
            <Link id="about" to='services'> Services</Link> 
            <Link id="service" to='about'>About</Link>
            
        </div>
    )
}

export default NavBar;