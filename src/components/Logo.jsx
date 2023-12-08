import { Link } from "react-router-dom";

import styled from "@emotion/styled";

const Header = styled.h2`
  color: white;
  &:hover {
    color: #33ffff;
  }
  margin-right: 1em;
`;

function Logo() {
  return (
    <Link to="/">
      <Header>Edcatus</Header>
    </Link>
  );
}

export default Logo;
