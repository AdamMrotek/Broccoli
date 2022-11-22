import "./Navbar.css";
import { Link } from "react-router-dom";
// import { auth } from "../firebase-config.js";
import LoginForm from "../Components/Forms/LoginForm.js";
import LogoBox from "../Components/LogoBox.js";

import useAuthContext from "../Hooks/useAuthContext.js";
import Popup from "../Components/Popup.js";

import { useLogout } from "../Hooks/useLogout.js";
import { useSignIn } from "../Hooks/useSignIn.js";

function Navbar({ handlePopUp, registerPopUp }) {
  const user = useAuthContext();
  const { signIn } = useSignIn();

  const {
    logout,
    error: logoutError,
    isPending: logoutIsPending,
  } = useLogout();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <LogoBox />
        {user.user && (
          <>
            <div className="links">
              <Link to="/main/search">Explore Recepies</Link>
              <Link to="/main/dashboard">Groceries Lists</Link>
            </div>
            <div className="navbar__logout">
              <p className="paragraph navbar__user-name">
                Welcome, {user.user?.displayName}
              </p>
              <button
                className="btn btn--no-margin btn--priamary"
                onClick={logout}
              >
                sign Out
              </button>
            </div>
          </>
        )}

        {!user.user && (
          <>
            <LoginForm formFunction={signIn} name={"log in"} />
            <div className="links">
              {/* <button
                type="button"
                className="btn"
                onClick={() => {
                  handlePopUp();
                }}
              >
                Create Account
              </button> */}
            </div>
          </>
        )}
        {registerPopUp && <Popup handlePopUp={handlePopUp} />}
      </div>
    </nav>
  );
}

export default Navbar;
