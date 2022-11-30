import "./Navbar.css";
import { Link } from "react-router-dom";
// import { auth } from "../firebase-config.js";
import LoginForm from "../Components/Forms/LoginForm.js";
import LogoBox from "../Components/LogoBox.js";

import useAuthContext from "../Hooks/useAuthContext.js";
import Popup from "../Components/Popup.js";

import { useLogout } from "../Hooks/useLogout.js";
import { useSignIn } from "../Hooks/useSignIn.js";
import RegisterForm from "../Components/Forms/RegisterFrom.js";

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
            {/* <button
              type="button"
              className="btn"
              onClick={() => {
                handlePopUp("login");
              }}
            >
              Log in
            </button> */}
            <button
              className="btn login-buton"
              onClick={() => {
                handlePopUp("login");
              }}
            >
              <span>Log in</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 544 464"
              >
                <path
                  d="m258 140 76 71c11 11 11 21 0 32l-104 98c-6 6-14 8-22 5-8-4-11-11-11-20v-44c0-5-2-7-7-7l-87 1c-15 0-26-9-26-26v-46c0-17 12-26 26-25h87c7 0 7 0 7-7v-44c0-11 5-19 15-21 7-2 13 2 18 6l28 27z"
                  fill="#fff"
                />
                <path
                  d="M323 100c-9-13-7-29 5-37 3-3 8-4 12-4h51c37 0 68 29 70 66l1 29v165a73 73 0 0 1-71 76h-50c-14 0-24-10-24-24 0-15 10-24 23-24h47c13 0 21-6 25-17l1-6V130c0-14-10-22-26-23h-45c-7 0-14-2-19-7z"
                  fill="#eee"
                />
              </svg>
            </button>

            {/* <LoginForm formFunction={signIn} name={"log in"} /> */}
          </>
        )}
        {registerPopUp === "login" && (
          <Popup handlePopUp={handlePopUp}>
            <LoginForm handlePopUp={handlePopUp} />
          </Popup>
        )}
        {registerPopUp === "register" && (
          <Popup handlePopUp={handlePopUp}>
            <RegisterForm handlePopUp={handlePopUp} />
          </Popup>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
