import React from "react"


function Greeting(props) {
    return (
     
     <div>
      <h1> Software Developers Info</h1>
      <h2>Meet some Cool Developers!</h2>
      <p>
        Hello! I'm {props.name}, a {props.age} years old {props.occupation}.
        Pleased to meet you!
      </p>
      </div>
    );
  }
        export default Greeting