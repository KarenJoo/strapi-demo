import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title, handleDelete }) => {
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
                        {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}> 
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author} </p>
                        </Link>
                       
                          <img src={blog.image} alt={blog.title} />
                       
                    </div>
                );
            })}
        </div>
     );
}
 
export default BlogList;