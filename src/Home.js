import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'New blog', body: 'lorem ipsum..', author: 'Jay', id: 1 },
        { title: 'Cool blog', body: 'lorem ipsum..', author: 'Kay', id: 2 },
        { title: 'Hello blog', body: 'lorem ipsum..', author: 'May', id: 3 }
    ]);

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="Alle blogs" />
        </div>
    );
}
 
export default Home;
