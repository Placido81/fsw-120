import React from 'react' 
import {default as data} from './info.json'
import HeroCard from './HeroCard'




function HeroList(){
    
    const heroComponents = data.map(data => <HeroCard
        name= {data.name}
        catchPhrase={data.catchPhrase}
        imageName={data.imageName}
        show={data.show}
        bgcolor={data.bgcolor}
        color={data.color}
        />)
    
        
        return(
            <div>
           {heroComponents}
            </div>
        )
    
}
export default HeroList;