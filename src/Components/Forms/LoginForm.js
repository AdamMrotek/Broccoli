import "./Login.css";
import { useState } from "react";
import { useSignIn } from "../../Hooks/useSignIn.js";

function LoginForm({ formFunction, name }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, error, isPending } = useSignIn();

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        signIn(email, password);
      }}
    >
      {error && (
        <div className="error-message error-message--small">
          {error.slice(0, error.length > 50 ? 50 : error.length)}
        </div>
      )}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        id="email"
        required
      />
      <label htmlFor="email">Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        id="password"
        required
        minLength={6}
      />
      <button className="btn login-buton">{name}</button>
    </form>
  );
}
export default LoginForm;
