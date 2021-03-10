import React from 'react'
import HeroList from './HeroList.js'
import Header from'./Header'
import Appx from'./Appx.js'
import info from './info.json'
import './index.js'

class App extends React.Component{
state = {
  heroItems: info
}

  render(){

  
  return(
  
  <div>
    {this.state.heroItems.map(item => <HeroList key={item.name} name={item.name} show={item.show} catchphrase={item.catchPhrase} imageName={item.imageName}/>)}
     
    <HeroList name="hello"/>
   
    
  </div>
  
  )
  }
}
export default App