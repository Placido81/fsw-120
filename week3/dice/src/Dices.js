import React, {Component} from 'react'




class App extends React.Component {
          
    constructor(){
         super()
       this.state = {

            roll1: 0,

            roll2: 0,

            roll3: 0,

            roll4: 0,

            roll5: 0

        }}

        render(){
            return (<div>Dice 1 = {this.state.roll1}</div>) 
        }

               

  
          
}
export default App