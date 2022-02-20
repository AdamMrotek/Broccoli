import { useState } from "react";

function RegisterForm({ formFunction, name }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form
      className="register-form"
      onSubmit={(e) => {
        formFunction(e, email, password);
      }}
    >
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
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        name="confirmPassword"
        id="confirmPassword"
        required
        minLength={6}
      />
      <button className="btn">{name}</button>
    </form>
  );
}
export default RegisterForm;
