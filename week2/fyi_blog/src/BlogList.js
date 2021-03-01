import React from 'react'
import './index.css';
import BlogPost from "./BlogPost";
import BlogData from "./BlogData.js";


function Bloglist() {
      
    
       
      const blogComponents = BlogData.map(blog => <BlogPost 
        key={blog.id}
          title={blog.title} 
          subtitle={blog.subtitle} 
          author={blog.author} 
          date={blog.date} 
        />)
      
      return (
          <div>{blogComponents}</div>
      )
           
      
         
  }
  export default Bloglist