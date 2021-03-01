import React from 'react';
import './blogpost.css';

function BlogPost(props){
    return(   
    <div className='properties'>    
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
            <p> Posted by <b> {props.author}</b> on {props.date} </p>
            <hr />
        </div>


    )

}
export default BlogPost