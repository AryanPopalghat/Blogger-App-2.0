
import './App.css';
import Header from "./MyComponents/header";
import Blogs from "./MyComponents/blogs";
import Footer from "./MyComponents/footer"
import React, {useState} from 'react';
import AddBlog from './MyComponents/AddBlog';
function App() {
  function onDelete(blog) {
    setBlogs(blogs.filter((e) => {
      return e !== blog;
    }));
  }
  const addBlog = (title,desc,link)=>{
    let sno;
    if(blogs.length===0){
      sno=0;
    }
    else{
  sno=blogs[blogs.length-1].sno+1;
    }
  const myBlog={
    sno:sno,
    title:title,
    desc:desc,
    image:link
  }
  setBlogs([...blogs, myBlog])
  }
  const [blogs, setBlogs]=useState([
    {
      sno:1,
      title:"wild Animals",
      desc: "Travelling broadens the mind. We can learn about new places and people and, in doing so, we learn about ourselves. And yet, its essential that we do not allow...",
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_5oPunvhgC84Q13lOi-vEFhCb8Rsf6dZWsdznQteaA&usqp=CAU&ec=48665699" 
    },
    {
      sno:2,
      title:"Birds",
      desc:"birds are ijmportant in our life we should save them",
      image:"https://th.bing.com/th?id=ALSTU353157067FBF76B5E5C696EB748968022E0519A1DC1668EC4E3DB7FA23BE4BE1&w=472&h=281&rs=2&o=6&oif=webp&dpr=1.3&pid=SANGAM"
    }
  ]);
  return (
   <>
   
    <Header title ="My blogs list"/>
    <AddBlog addBlog={addBlog}> addBlog</AddBlog>
    <Blogs blogs={blogs} onDelete={onDelete}/>
    <Footer/>
   </>
  );
}

export default App;
