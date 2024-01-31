import React, { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author, image };

        

        // Clear the form fields after submission
        setTitle('');
        setBody('');
        setAuthor('');
        setImage('');
    };

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required 
                />
                <label>Blog Text:</label>
                <textarea 
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>
                <label>Blog Author:</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Artist Ro">Artist Ro</option>
                    <option value="Fontains">Fontains</option>
                    <option value="Laithang">Laithang</option>
                    <option value="Waldemar Arch">Waldemar Arch</option>
                </select>
                <label>Image URL:</label>
                <input 
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <button>Add blog</button>
                <h2>Preview new blogpost</h2>
                <p>New Title: { title }</p>
                <p>Author: {author}</p>
                <p>New blog text: { body }</p>
                {image && (
                <div>
                    <img src={image} alt="Preview" style={{ maxWidth: '100%' }} />
                </div>
            )}
            </form>
        </div>
     );
}
 
export default Create;
