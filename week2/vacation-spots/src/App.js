import React from 'react'
import Places from './Places.js'
import TravelData from './TravelData' 

function App(){
    
    const b = TravelData.map(place => <Places key={place.id} place={place.place} price={place.price}  timeToGo={place.timeToGo}/>)
         return(
        <div>
             <h1>Awesome Vacation Spots!</h1>
             {b}
        </div>
       )   
}
      export default App