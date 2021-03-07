import React from 'react' 
import { default as data } from './data.json'
import SuperHero from './SuperHero.js'


function HeroList(){
    
    const heroComponents = data.map(data => <SuperHero
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