import { useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main>
      <Navbar />
      <form>
        <div>
          <label htmlFor="username">Email/Username</label>
          <input
            type="email"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </form>
    </main>
  );
}

export default Login;
