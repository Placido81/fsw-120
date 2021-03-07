import React from 'react'
import Dices from'./Dices.js'



class App extends React.Component{
    render(){
        return(
            <div className ='App'>
         <Dices />
            <App />
        

            </div>
        )
    }
}
export default App