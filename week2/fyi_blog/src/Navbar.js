import React from "react";
import './Navbar.css';

function Navbar() {
    return (
      
        <div class = "navbar-container" style={{backgroundColor:"gray", 
           textAlign:"center", padding:"50px"}}>
           <a className="start-bootstrap" href="#">Start Bootstrap</a>
            <a className="navbar-options" href="#">HOME</a>
            <a className="navbar-options" href="#">ABOUT</a>
            <a className="navbar-options" href="#">SAMPLE POST</a>
            <a className="navbar-options" href="#">CONTACT</a>
            
          
           <h1 style={{color:"white", fontWeight:"bold"}}>Clean Blog</h1>
            <p style={{color:"white", fontSize:"12px"}}>A Blog Theme by Start Bootstrap</p>
        </div>
    )
}

export default Navbar