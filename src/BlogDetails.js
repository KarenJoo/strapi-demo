import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete blog');
            }
            return response.json();
        })
        .then(() => {
            history.push('/');
        })
        .catch(error => {
            console.error('Error deleting blog:', error);
        });
    };
    

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading blogpost</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <img src={blog.image} alt={blog.title} />
                    <button onClick={handleClick}>Delete blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;