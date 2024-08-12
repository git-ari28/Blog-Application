import React, { useEffect, useState } from 'react';
import Editblogs from './Editblogs';
import './Showblogs.css'; // Import the CSS file for styles

function Showblogs() {
    const [blogs, setBlogs] = useState([]);

    const deleteBlog = async (id) => {
        try {
            const delBlog = await fetch(`http://localhost:5000/blogs/${id}`, {
                method: "DELETE"
            });
            if (delBlog.ok) {
                setBlogs(blogs.filter(blog => blog.id !== id));
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    const getBlogs = async () => {
        try {
            const response = await fetch("http://localhost:5000/blogs");
            const jsonData = await response.json();
            setBlogs(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <div className="showblogs-container">
            {blogs.map((blog) => (
                <div className="card" key={blog.id}>
                    <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">{blog.description}</p>
                        <Editblogs blog={blog} onUpdate={getBlogs} />
                        <button className="btn btn-danger" onClick={() => deleteBlog(blog.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Showblogs;


