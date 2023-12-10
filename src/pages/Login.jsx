import { useState } from "react";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import styled from "@emotion/styled";
import useLogin from "../features/users/useLogin";

const StyledLoginInput = styled(FormControl)`
  margin: 1rem;
  padding: 1rem;
`;

const StyledLoginForm = styled.form`
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-color: #eee7e7;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticateUser, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    authenticateUser(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <>
      <h1>Log In</h1>
      <StyledLoginForm onSubmit={handleSubmit}>
        <StyledLoginInput>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          ></OutlinedInput>
        </StyledLoginInput>
        <StyledLoginInput>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          ></OutlinedInput>
        </StyledLoginInput>
        {/* App authenticates user after user clicks button */}
        <div>
          <Button
            variant="contained"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {!isLoading ? "Login" : <CircularProgress />}
          </Button>
        </div>
      </StyledLoginForm>
    </>
  );
}

export default Login;
