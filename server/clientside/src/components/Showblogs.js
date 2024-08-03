import React from 'react';
import { useEffect,useState } from 'react';

function Showblogs() {

    const[blogs,setBlogs]=useState([])

const getTodos=async()=>{
    try{
const response=await fetch("http://localhost:5000/blogs")
const jsondata=await response.json();
setBlogs(jsondata)
    }
    catch(err){
console.error(err.message)
    }
}

useEffect(()=>{
getTodos()},[]);

return (
    <div> 
        {blogs.map((blog)=>(
    <div className="card w-75" key={blog.id}>
  <div className="card-body">
    <h5 className="card-title">{blog.title}</h5>
    <p className="card-text">{blog.description}</p>
    <button className="btn btn-primary">Edit</button>
    <button className="btn btn-primary">Delete</button>
  </div>
</div>))}
</div>
  );
}

export default Showblogs