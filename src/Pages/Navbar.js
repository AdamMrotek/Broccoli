import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../firebase-config.js";
import LoginForm from "../Components/Forms/LoginForm.js";
import LogoBox from "../Components/LogoBox.js";

import useAuthContext from "../Hooks/useAuthContext.js";
import Popup from "../Components/Popup.js";
import { useSignIn } from "../Hooks/useSignIn.js";
import { useLogout } from "../Hooks/useLogout.js";

function Navbar({ handlePopUp, registerPopUp }) {
  const navigate = useNavigate();
  const user = useAuthContext();
  console.log(user);
  const { signIn, error, isPending } = useSignIn();
  const {
    logout,
    error: logoutError,
    isPending: logoutIsPending,
  } = useLogout();

  const testLogin = async () => {
    signIn("example@email.com", "123456");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <LogoBox />
        {user.user && (
          <>
            <div className="navbar__logout">
              <p>{user.user?.displayName}</p>
              <button
                className="btn btn--no-margin btn--priamary"
                onClick={logout}
              >
                sign Out
              </button>
            </div>
            <div className="links">
              <Link to="/main/search">Explore Recepies</Link>
              <Link to="/main/dashboard">Groceries Lists</Link>
            </div>
          </>
        )}

        {!user.user && (
          <>
            <LoginForm formFunction={signIn} name={"log in"} />
            <div className="links">
              <button
                type="button"
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
      </div>
    </nav>
  );
}

export default Navbar;
