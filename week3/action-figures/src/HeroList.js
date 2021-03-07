import React from 'react' 

import { default as data } from './data.json'



function HeroList(){
    
    const heroComponents = data.map(data => <HeroList
        name= {data.name}
        catchPhrase={data.catchPhrase}
        imageName={data.imageName}
        show={data.show}
        bgcolor={data.bgcolor}
        color={data.color}
        />)
        console.log(HeroList)
        
        return(
            <div>
           {heroComponents}
            </div>
        )
    
}
export default HeroList;