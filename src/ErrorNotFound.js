import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ErrorNotFound = () => {
    return ( 
        <div className="error-not-found">
            <h2>Sorry</h2>
            <p>This page can not be found</p>
            <Link to="/">Back to the homepage</Link>
        </div>
     );
}
 
export default ErrorNotFound;