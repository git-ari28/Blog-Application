import React, { useState } from 'react';

const Editblogs = ({ blog, onUpdate }) => {
  const [title, setTitle] = useState(blog.title);
  const [description, setDescription] = useState(blog.description);

  const handleEdit = async () => {
    const updatedBlog = {
      title,
      description,
    };

    try {
      const response = await fetch(`http://localhost:5000/blogs/${blog.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBlog),
      });

      if (response.ok) {
        console.log('Blog updated successfully');
        onUpdate(); // Call the callback to refresh the blog list
      } else {
        console.error('Failed to update blog');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const updateTitle = () => {
    setTitle(title); // Update the title state
    handleEdit(); // Call handleEdit to update the blog
  };

  const updateDescription = () => {
    setDescription(description); // Update the description state
    handleEdit(); // Call handleEdit to update the blog
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
        Edit
      </button>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="form-control"
              ></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-success" onClick={updateTitle} data-dismiss="modal">
                Update Title
              </button>
              <button type="button" className="btn btn-success" onClick={updateDescription} data-dismiss="modal">
                Update Description
              </button>
              <button type="button" className="btn btn-success" onClick={handleEdit} data-dismiss="modal">
                Update Both
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editblogs;


