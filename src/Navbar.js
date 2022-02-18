import { Link } from "react-router-dom";
import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import UserForm from "./UserForm.js";

function Navbar({ user }) {
  const register = async (e, email, password) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async (e, email, password) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="navbar">
      <h1>Broccolli Menu</h1>
      <div className="links">
        <Link to="/main/search">Explore Recepies</Link>
        <Link to="/main/dashboard">Groceries Lists</Link>
        <Link to="/create">New Recepie</Link>
        <Link to="/profile">Your Profile</Link>
        {!user && <UserForm formFunction={login} name={"log in"} />}
        {user && <p>Currently logged in {user?.email}</p>}
        {user && <button onClick={logout}>sign Out</button>}
      </div>
    </nav>
  );
}

export default Navbar;
