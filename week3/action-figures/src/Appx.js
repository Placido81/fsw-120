import React from 'react'
 
class Appx extends React.Component {
     constructor(){
         super()
         this.state = {
             name: ''
             
         }
     }
     render(){
         return(
             <div>{this.state.name}</div>
         )
     }
             
 }
 export default Appx