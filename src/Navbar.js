import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import LoginForm from "./forms/LoginForm.js";
import LogoBox from "./LogoBox.js";

function Navbar({ user }) {
  const navigate = useNavigate();
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
      navigate("/main/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };
  const testLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        "example@email.com",
        "123456"
      );
      navigate("/main/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="navbar">
      <LogoBox />
      {user && (
        <div className="links">
          <Link to="/main/search">Explore Recepies</Link>
          <Link to="/main/dashboard">Groceries Lists</Link>
          <Link to="/profile">Your Profile</Link>
          <div>
            <p>{user?.email}</p>
            <button
              className="btn btn--no-margin btn--priamary"
              onClick={logout}
            >
              sign Out
            </button>
          </div>
        </div>
      )}

      {!user && (
        <div className="links">
          <LoginForm formFunction={login} name={"log in"} />
          <button className="btn btn--no-margin btn--priamary" onClick={logout}>
            Create Account
          </button>
          <button
            className="btn btn--no-margin btn--priamary"
            onClick={testLogin}
          >
            Test Account
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
