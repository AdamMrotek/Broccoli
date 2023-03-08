import { useState } from "react";
import "./RegisterForm.css";
import { useSignUp } from "../../Hooks/useSignUp.js";
import { Navigate, useNavigate } from "react-router-dom";

function RegisterForm({ handlePopUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const navigation = useNavigate();

  // useSignup returns { register, error, isPending };
  const { register, error, isPending } = useSignUp();

  return (
    <div className="log-in__container">
      <form
        className="login-form animated"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await register(email, password, confirmPassword, displayName);
          } catch (err) {
            // console.log(err);
          }
        }}
      >
        {/* <div className="closing-icon" onClick={() => handlePopUp()}>
          x
        </div> */}
        <h2 className="heading-tertiary ">Create your account</h2>
        <p className="paragraph">Join the bandwagon!</p>
        {error && <div className="error-message">{error}</div>}
        <div className="form-field">
          <label className="login__label" htmlFor="email">
            Email:
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
          <label className="login__label" htmlFor="confirmPassword">
            Display Name:
          </label>
          <input
            className="login-form__input"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            name="displayName"
            id="displayName"
            required
            minLength={3}
          />
        </div>
        <div className="form-field">
          <label className="login__label" htmlFor="password">
            Password:
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
        <div className="form-field">
          <label className="login__label" htmlFor="confirmPassword">
            Confirm Password:
          </label>

          <input
            className="login-form__input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            id="confirmPassword"
            required
            minLength={6}
          />
        </div>

        {!isPending && (
          <button className="btn login-buton">
            {" "}
            <span> Register new account!</span>
          </button>
        )}
        {isPending && (
          <button className="btn login-buton" disabled>
            <span> Register new account!</span>
          </button>
        )}
      </form>
      <p className="paragraph-secondary mtop-s">
        Already with us?{" "}
        <span className="register-link" onClick={() => handlePopUp("login")}>
          Get in here!
        </span>
      </p>
    </div>
  );
}
export default RegisterForm;
