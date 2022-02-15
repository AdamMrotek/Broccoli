import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <h1>Broccolli Menu</h1>
      <div className="links">
        <Link to="/search">Explore Recepies</Link>
        <Link to="/">Groceries Lists</Link>
        <Link to="/create">New Recepie</Link>
        <Link to="/profile">Your Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;
