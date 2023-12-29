import AppBar from "@mui/material/AppBar";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  Select,
  Toolbar,
} from "@mui/material";

import Logo from "./Logo";
import { useUserSession } from "../../features/users/useUserSession";
import { Feedback } from "@mui/icons-material";

import { useLogout } from "../../features/users/useLogout";
import { useRegion } from "../../features/contexts/RegionContext";
import { FlagIcon } from "../styled_components/navbar/FlagIcon";
import { UserCorner } from "../styled_components/navbar/UserCorner";
import { StyledNavLink } from "../styled_components/navbar/StyledNavLink";

function Navbar() {
  const { setRegion } = useRegion();
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

          <Select
            defaultValue="malaysia"
            onChange={(e) => setRegion(e.target.value)}
          >
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
