import React from 'react'


function HeroCard(props){
    return(
      <div onClick={() => alert(props.catchPhrase)}>
        <h1>{props.name}</h1>
        <h2>{props.show}</h2>
        <img src={props.imageName}></img>

      </div>
    )
}
export default HeroCard