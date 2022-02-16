import { useState } from "react";

function UserForm({ formFunction, name }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
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
      <button>{name}</button>
    </form>
  );
}
export default UserForm;
