import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogWrite = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      description,
    };

    try {
      const response = await fetch('http://localhost:5000/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      });

      if (response.ok) {
        toast.success('Blog added successfully!'); // Show success toast
        // Reset the form after successful submission
        setTitle('');
        setDescription('');
      } else {
        toast.error('Failed to add blog'); // Show error toast
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error occurred while adding the blog'); // Show error toast
    }
  };

  const backgroundImageStyle = {
    backgroundImage: 'url("/assets/kelly-sikkema-Oz_J_FXKvIs-unsplash.jpg")', // Use the correct path to your image
    backgroundSize: 'cover', // Cover the entire area
    backgroundPosition: 'center', // Center the image
    height: '100vh', // Full viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // Text color
    textAlign: 'center',
    padding: '20px', // Padding for content
  };

  return (
    <div style={backgroundImageStyle}>
      <ToastContainer /> {/* Add ToastContainer for notifications */}
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            style={{ width: '100%', padding: '10px', margin: '10px 0' }} 
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
            style={{ width: '100%', padding: '10px', margin: '10px 0' }} 
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default BlogWrite;

