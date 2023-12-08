import styles from "./Footer.module.css";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  color: black;
`;

function Footer() {
  return (
    <StyledFooter>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by Edcatus
      </p>
    </StyledFooter>
  );
}

export default Footer;
