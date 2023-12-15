import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import { CircularProgress, Container, Grid, Toolbar } from "@mui/material";

import Logo from "./Logo";
import { useUserSession } from "../features/users/useUserSession";
import { Feedback } from "@mui/icons-material";

import { useLogout } from "../features/users/useLogout";
import CustomButton from "./CustomButton";

const StyledNavLink = styled(NavLink)`
  padding: 1.2rem 4.8rem;
  text-decoration: none;
  color: white;
  &:hover {
    color: #33ffff;
  }
`;

const UserCorner = styled(Grid)`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-end;
`;

function Navbar() {
  const { logout, isLoading } = useLogout();
  const { isAuthenticated } = useUserSession();

  function handleLogout() {
    logout();
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid item xs="auto">
            <Logo />
          </Grid>
          <Grid item sm={12} container>
            <Grid item sm={12} container direction="row">
              <StyledNavLink to="/catalogue">Catalogue</StyledNavLink>
              {!isAuthenticated ? (
                <div></div>
              ) : (
                <StyledNavLink to="/createResource">
                  Create Resource
                </StyledNavLink>
              )}
            </Grid>
          </Grid>
          <Grid item sm="auto">
            {!isAuthenticated ? (
              <UserCorner>
                <StyledNavLink to="/signup">Sign Up</StyledNavLink>
                <StyledNavLink to="/login">Log in</StyledNavLink>
              </UserCorner>
            ) : (
              <UserCorner>
                <StyledNavLink to="/provideFeedback">
                  <Feedback />
                </StyledNavLink>
                <StyledNavLink to="/profile">Profile</StyledNavLink>
                {/* <IconButton>
                  <PersonIcon fontSize="large" />
                  
                </IconButton> */}
                <CustomButton
                  disabled={isLoading}
                  handleClick={handleLogout}
                  variant="contained"
                  color="secondary"
                >
                  {!isLoading ? "Log out" : <CircularProgress />}
                </CustomButton>
              </UserCorner>
            )}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
