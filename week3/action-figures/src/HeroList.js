import React from 'react' 





function HeroList(props){
    
    {/*const heroComponents = data.map(data => <HeroList
        name= {data.name}
        catchPhrase={data.catchPhrase}
        imageName={data.imageName}
        show={data.show}
        bgcolor={data.bgcolor}
        color={data.color}
        />)
    console.log(HeroList)*/}
        
        return(
            <div>
           <h1>{props.name}</h1>
            </div>
        )
    
}
export default HeroList;