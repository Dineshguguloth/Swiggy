import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="loginForm">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
