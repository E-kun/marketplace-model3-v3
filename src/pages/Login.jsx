import { useState } from "react";
// import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";

import styled from "@emotion/styled";

const StyledLoginInput = styled(FormControl)`
  margin: 1rem;
  padding: 1rem;
`;

const StyledLoginInputBox = styled.form`
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-color: #eee7e7;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main>
      <Navbar />

      <StyledLoginInputBox>
        <StyledLoginInput>
          <InputLabel htmlFor="username">Username</InputLabel>
          <OutlinedInput id="username" label="Username"></OutlinedInput>
        </StyledLoginInput>
        <StyledLoginInput>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput id="password" label="Password"></OutlinedInput>
        </StyledLoginInput>
        {/* App authenticates user after user clicks button */}
        <div>
          <Button variant="contained">Login</Button>
        </div>
      </StyledLoginInputBox>

      <Footer />
    </main>
  );
}

export default Login;
