import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  confirmPasswordReset,
} from "firebase/auth";
import LoginForm from "./forms/LoginForm.js";
import LogoBox from "./LogoBox.js";
import { useState } from "react";
import RegisterForm from "./forms/RegisterFrom.js";
function Navbar({ user }) {
  const navigate = useNavigate();
  const [registerPopUp, setRegisterPopUp] = useState(false);

  const register = async (e, email, password, confirmPassword) => {
    e.preventDefault();
    try {
      if (password && password !== confirmPassword) {
        throw Error("Passwords need to match");
      }
      const user = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/main/dashboard");
      setRegisterPopUp(false);
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
  const handlePopUp = () => {
    setRegisterPopUp((registerPopUp) => !registerPopUp);
  };

  return (
    <nav className="navbar">
      <LogoBox />
      {user && (
        <div className="links">
          <Link to="/main/search">Explore Recepies</Link>
          <Link to="/main/dashboard">Groceries Lists</Link>

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
      )}
      {registerPopUp && (
        <div className="registerPopUp">
          <div
            onClick={() => handlePopUp()}
            className="register-pop-up__background"
          ></div>
          <RegisterForm formFunction={register} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
