import React from'react'
import './App.css';

const soundTrack = false;

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      colors: ['white','white','white','white']

    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (e) => {
    let colors =[...this.state.colors]
    switch(e.target.name){
      case 'abc':
        if(this.state.colors[0] === 'black'){
          this.setState({colors:['white','white','white','white']})
          
        }
    }
  }
}

export default App;
