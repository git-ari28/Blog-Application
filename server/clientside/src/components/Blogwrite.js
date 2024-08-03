import React from 'react'
import {useState} from "react"

function Blogwrite() {
const [description,setdescription]=useState("");
const [title,settitle]=useState("")
const onSubmitForm=async e=>{
    e.preventDefault()
    try{
const body={description,title};
const response= await fetch("http://localhost:5000/blogs",{
    method:"Post",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(body)
})
window.location="/";
    }
    catch(err){
console.error(err.message)
    }
}


  return (
    <div className='blogwriting'>
    <h1 className='text-center'>Hey!!What are your thoughts?</h1>
    <form onSubmit={onSubmitForm}>
    <div className="form-group col-md-5">
      <label htmlForfor="Title">Title</label>
      <input type="text" className="form-control" id="title" value={title} onChange={e=>settitle(e.target.value)}/>
    </div> 

    <div className="form-group col-md-5">
      <label htmlFor="Description">Description</label>
      <textarea type="text" className="form-control" id="description" rows="5" cols="50" value={description} onChange={e=>setdescription(e.target.value)}/>

    </div>
    <div>
    <button type="submit" className="btn btn-success">Add</button>
</div>
    </form>
    </div>
  )
}

export default Blogwrite