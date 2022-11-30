import "./Login.css";
import { useState } from "react";
import { useSignIn } from "../../Hooks/useSignIn.js";

function LoginForm({ handlePopUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, error, isPending } = useSignIn();

  return (
    <div className="log-in__container">
      <form
        className="login-form animated"
        onSubmit={(e) => {
          e.preventDefault();
          signIn(email, password);
        }}
      >
        <h3 className="heading-tertiary">Login to Broccoli</h3>
        <p className="paragraph">Welcome back! We missed you.</p>
        {error && (
          <div className="error-message error-message--small">
            {error.slice(0, error.length > 50 ? 50 : error.length)}
          </div>
        )}
        <div className="form-field">
          <label className="login__label" htmlFor="email">
            E-mail
          </label>
          <input
            className="login-form__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            required
          />
        </div>
        <div className="form-field">
          <label className="login__label" htmlFor="password">
            Password
          </label>
          <input
            className="login-form__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            required
            minLength={6}
          />
        </div>
        <button className="btn login-buton">
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
      </form>
      <p className="paragraph-secondary mtop-s">
        Don't have account?{" "}
        <span className="register-link" onClick={() => handlePopUp("register")}>
          Get one here!
        </span>
      </p>
    </div>
  );
}
export default LoginForm;
