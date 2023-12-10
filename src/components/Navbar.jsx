import { Link, NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import { Container, Grid, IconButton, Toolbar } from "@mui/material";

import Logo from "./Logo";
import Logout from "./Logout";
import { useUserSession } from "../features/users/useUserSession";
import PersonIcon from "@mui/icons-material/Person";

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
  const { isAuthenticated } = useUserSession();

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
              <StyledNavLink to="/createResource">
                Create Resource
              </StyledNavLink>
            </Grid>
          </Grid>
          <Grid item sm="auto">
            {!isAuthenticated ? (
              <StyledNavLink to="/login">Log in</StyledNavLink>
            ) : (
              <UserCorner>
                <StyledNavLink to="/profile">Profile</StyledNavLink>
                {/* <IconButton>
                  <PersonIcon fontSize="large" />
                  
                </IconButton> */}
                <Logout />
              </UserCorner>
            )}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
