import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'New blog', body: 'lorem ipsum..', author: 'Jay', id: 1 },
        { title: 'Cool blog', body: 'lorem ipsum..', author: 'Kay', id: 2 },
        { title: 'Hello blog', body: 'lorem ipsum..', author: 'May', id: 3 }
    ]);

    return (  
        <div className="home">
            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author} </p>
                    </div>
                );
            })}
        </div>
    );
}
 
export default Home;
