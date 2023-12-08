import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

import styled from "@emotion/styled";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const StyledToolBar = styled(Toolbar)`
  display: flex;
  align-content: stretch;
`;

const StyledBox = styled.div`
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  padding: 1.2rem 4.8rem;
  text-decoration: none;
  color: white;
  &:hover {
    color: #33ffff;
  }
`;

const StyledLinks = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  padding: 1.2rem 4.8rem;
`;

function Navbar() {
  return (
    <StyledBox>
      <AppBar position="static">
        <StyledToolBar>
          <Logo />

          <StyledLinks>
            <StyledNavLink to="/catalogue">Catalogue</StyledNavLink>

            <StyledNavLink to="/createResource">Create Resource</StyledNavLink>
            <StyledNavLink to="/login">Login</StyledNavLink>
          </StyledLinks>
        </StyledToolBar>
      </AppBar>
    </StyledBox>
  );
}

{
  /* <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */
}

export default Navbar;
