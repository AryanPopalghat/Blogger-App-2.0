import React from 'react'

const blog = ({blog, onDelete}) => {
  return (
    <div>
      <h4 style={{color:"Highlight"}} >{blog.title}</h4>
      <p>{blog.desc}</p>
      <img src={blog.image} className="center" alt='Pic for the blog'></img>
      <button className='btn btn-sm btn-danger my-3' onClick={()=>{onDelete(blog)}}> Delete</button>
      <hr/>
    </div>
  )
}

export default blog
