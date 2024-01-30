import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'New blog', body: 'lorem ipsum..', author: 'Jay', id: 1 },
        { title: 'Cool blog', body: 'lorem ipsum..', author: 'Kay', id: 2 },
        { title: 'Hello blog', body: 'lorem ipsum..', author: 'May', id: 3 }
    ]);

    const [name, setName] = useState('Vera');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]); 

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Jay')} title="Jays blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('Navi')}>Change name</button>
            <p>{ name }</p>

        </div>
    );
}
 
export default Home;
