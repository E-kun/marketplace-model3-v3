import { Copyright } from "../styled_components/footer/Copyright";
import { StyledFooter } from "../styled_components/footer/StyledFooter";

function Footer() {
  return (
    <StyledFooter>
      <Copyright>
        &copy; Copyright {new Date().getFullYear()} by Edcatus
      </Copyright>
      <p>Alpha version 1.0.0</p>
    </StyledFooter>
  );
}

export default Footer;
