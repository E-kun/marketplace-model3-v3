import { Link } from "react-router-dom";

import styled from "@emotion/styled";

const Header = styled.h2`
  text-align: center;
  color: white;
  &:hover {
    color: #33ffff;
  }
  margin-right: 1em;
`;

const StyledLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
`;

function Logo() {
  return (
    <StyledLink to="/">
      <Header>Edcatus</Header>
    </StyledLink>
  );
}

export default Logo;
