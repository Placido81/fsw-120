import React from 'react';

import './App.css';


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
       
        }else{
           this.setState({colors:['black', 'black','black','black']})
        }
        break
        case 'xyz':
          colors[1] = 'purple'
          colors[1] = 'purple'
          this.setState({colors})
          break
          case 'rea':
          colors[2] = 'blue'
          this.setState({colors})
          break
          case 'reb':
          colors[2] = 'blue'
          this.setState({colors})
          break
          case 'ret':
          colors[1] = 'yellow'
          this.setState({colors})
          break
          case 'rew':
          colors[1] = 'green'
          this.setState({colors})
          break
          case 'awe':
          colors[2] = 'red'
          this.setState({colors})
          break
          case 'lpoiu':
          colors[2] = 'orange'
          this.setState({colors})
          break
        default:
          console.log(3)
          break;
    }
  }

  render(){
    return(
      <div>
      <br />
      <div className= "tiles">
      <div className="tile" style={{backgroundColor:this.state.colors[1]}}>Lets</div>
      <div className="tile" style={{backgroundColor:this.state.colors[2]}}>Boogy</div>
      <div className="tile" style={{backgroundColor:this.state.colors[1]}}>Tonight</div>
      <div className="tile" style={{backgroundColor:this.state.colors[2]}}>Baby</div>
      <div className="tile" style={{backgroundColor:this.state.colors[1]}}>Cool</div>
      <div className="tile" style={{backgroundColor:this.state.colors[2]}}>Happy</div>
      <div className="tile" style={{backgroundColor:this.state.colors[1]}}>Gangsta</div>
      <div className="tile" style={{backgroundColor:this.state.colors[2]}}>Free</div>
      <div className="tile" style={{backgroundColor:this.state.colors[1]}}>Ice</div>
      <div className="tile" style={{backgroundColor:this.state.colors[2]}}>Pig</div>
      
      
      
     
     </div>
    

     <br />

     <div className= "buttons">
     <div className= "smButton"><button name="abc" onClick={this.handleClick}>Casual DJ</button></div>
     <div className= "smButton"><button name="xyz" onClick={this.handleClick}>Party DJ</button></div>
     <div className= "smButton"><button name="rea" onClick={this.handleClick}>Wedding DJ</button></div>
     <div className= "smButton"><button name="reb" onClick={this.handleClick}>Birthday Party DJ</button></div>

     <div className= "smButton"><button name="ret" onClick={this.handleClick}>AnyTime DJ 1</button></div>
     <div className= "smButton"><button name="rew" onClick={this.handleClick}>AnyTime DJ 2</button></div>
     <div className= "smButton"><button name="awe" onClick={this.handleClick}>AnyTime DJ 3</button></div>
     <div className= "smButton"><button name="lpoiu" onClick={this.handleClick}>AnyTime DJ 4</button></div>

     <div className= "lgButton"><button name="cool" onClick={this.handleClick}>Cool DJ</button></div>
     <div className= "lgButton"><button name="fresh" onClick={this.handleClick}>Fresh DJ</button></div>

     </div>
      
      
      </div>
    )
    
  }
}




export default App;


