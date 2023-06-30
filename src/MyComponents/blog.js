import React from 'react'

const blog = ({blog, onDelete}) => {
  return (
    <div>
      <h4>{blog.title}</h4>
      <p>{blog.desc}</p>
      <img src={blog.image} className="center"></img>
      <button className='btn btn-sm btn-danger my-3' onClick={()=>{onDelete(blog)}}> Delete</button>
    </div>
  )
}

export default blog
