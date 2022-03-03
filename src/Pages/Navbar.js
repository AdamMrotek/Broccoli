import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config.js";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import LoginForm from "../Components/Forms/LoginForm.js";
import LogoBox from "../Components/LogoBox.js";

import useAuthContext from "../Hooks/useAuthContext.js";
import Popup from "../Components/Popup.js";

function Navbar({ user, handlePopUp, registerPopUp }) {
  const navigate = useNavigate();
  const contextUser = useAuthContext();

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
        <>
          <div className="links">
            <Link to="/main/search">Explore Recepies</Link>
            <Link to="/main/dashboard">Groceries Lists</Link>
          </div>
          <div className="navbar__logout">
            <p>{user?.email}</p>
            <button
              className="btn btn--no-margin btn--priamary"
              onClick={logout}
            >
              sign Out
            </button>
          </div>
        </>
      )}

      {!user && (
        <>
          <LoginForm formFunction={login} name={"log in"} />
          <div className="links">
            <button
              className="btn btn--no-margin btn--priamary"
              onClick={() => {
                handlePopUp();
              }}
            >
              Create Account
            </button>
            <button
              className="btn btn--no-margin btn--priamary"
              onClick={testLogin}
            >
              Test Account
            </button>
          </div>
        </>
      )}
      {registerPopUp && <Popup handlePopUp={handlePopUp} />}
    </nav>
  );
}

export default Navbar;
