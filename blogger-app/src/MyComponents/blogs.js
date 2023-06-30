import React from 'react'
import Blog from "./blog"
const Blogs = (props) => {
  return (
    <div className='container'>
        <h3 className='text-center my-3'>Blogs List</h3>
        {props.blogs.length===0? "No blogs to display":
        props.blogs.map((blog)=>{
            return(
            <Blog blog={blog} key={blog.sno} onDelete={props.onDelete}/> )
        })}
       
    </div>
  )
}

export default Blogs
