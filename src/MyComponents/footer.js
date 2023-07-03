import React from 'react'

const Footer = () => {
    let footerstyle={
        position:"relative",
        top:"50vh",
        width:"100%",
        
    }
  return (
    <footer className='bg-dark text-light py-3 mb-0' style={footerstyle}>
        <p className='text-center'>Copyright &copy; MyBlogsList.com</p>
      
    </footer>
  )
}

export default Footer
