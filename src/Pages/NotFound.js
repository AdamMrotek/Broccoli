import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Page was not found</p>
      <Link to="/">Go to the list</Link>
    </div>
  );
};
export default NotFound;
