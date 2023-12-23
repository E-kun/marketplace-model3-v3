import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  MenuList,
  Select,
  Toolbar,
} from "@mui/material";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import Logo from "./Logo";
import { useUserSession } from "../features/users/useUserSession";
import { Feedback, Flag } from "@mui/icons-material";

import { useLogout } from "../features/users/useLogout";

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

const FlagIcon = styled.img`
  width: 45px;
  padding: 0 auto;
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

          <Select defaultValue="malaysia">
            <MenuItem value="malaysia">
              <FlagIcon src="/MY-Malaysia-Flag-icon.png" />
              
            </MenuItem>
            <MenuItem value="brunei">
              <FlagIcon src="/brunei-flag-icon.png" />
            </MenuItem>
            <MenuItem value="singapore">
              <FlagIcon src="/SG-Singapore-Flag-icon.png" />
            </MenuItem>
            <MenuItem value="indonesia">
              <FlagIcon src="/indonesia-flag-icon.png" />
            </MenuItem>
          </Select>

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
                <Button
                  disabled={isLoading}
                  onClick={handleLogout}
                  variant="contained"
                  color="secondary"
                >
                  {!isLoading ? "Log out" : <CircularProgress />}
                </Button>
              </UserCorner>
            )}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
