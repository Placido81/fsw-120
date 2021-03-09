import React from 'react'

class Roll extends React.Component {
    constructor(props) {
        super(props)
        console.log("--- class Roll extends R...")
        //this.handleClick = this.handleClick.bind(this)
        
    }
    handleClick(){
        //this.props.handleClick(this.props.handleClick());
           console.log("handleClick()")
    }

    render(){
        return(
            <div>Roll()</div>
    )}    

}    

 

export default Roll