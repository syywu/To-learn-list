import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="404">
      <h1>Not Found</h1>
      <Link to="/">Back to Home</Link>;
    </div>
  );
};

export default NotFound;
