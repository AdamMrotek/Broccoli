import { useState } from "react";
import "./RegisterForm.css";
import { useSignUp } from "../../Hooks/useSignUp.js";

function RegisterForm({ handlePopUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  // useSignup returns { register, error, isPending };
  const { register, error, isPending } = useSignUp();
  return (
    <div>
      <form
        className="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          register(email, password, confirmPassword, displayName);
          handlePopUp();
        }}
      >
        <h2 className="heading-secondary ">Create your account</h2>
        {error && <div className="error-message">{error}</div>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          required
        />
        <label htmlFor="confirmPassword">Display Name</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          name="displayName"
          id="displayName"
          required
          minLength={6}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
          required
          minLength={6}
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="confirmPassword"
          id="confirmPassword"
          required
          minLength={6}
        />

        {!isPending && (
          <button className="btn margin-medium">Register new account!</button>
        )}
        {isPending && (
          <button className="btn margin-medium" disabled>
            Register new account!
          </button>
        )}
      </form>
    </div>
  );
}
export default RegisterForm;
