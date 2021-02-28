


      import React from 'react'



        function Travel(props){
            return(
              <div className = "box">
                  <h3>Price: {props.price} </h3>
                  <p>Place: {props.place}</p><br></br><h4>Times To Go: {props.timeToGo}</h4>
              </div>
            )
    }


export default Travel