import styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledButton = styled(Button)`
  margin: 0 10px;
`;

function CustomButton({ children, onClick, variant, color, type }) {
  return (
    <StyledButton variant={variant} onClick={onClick} color={color} type={type}>
      {children}
    </StyledButton>
  );
}

export default CustomButton;
