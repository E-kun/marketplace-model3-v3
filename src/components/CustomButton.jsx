import styled from "@emotion/styled";
import { Button } from "@mui/material";

function CustomButton({ children, handleClick, variant, color }) {
  const StyledButton = styled(Button)`
    margin: 0 10px;
  `;

  return (
    <StyledButton variant={variant} onClick={handleClick} color={color}>
      {children}
    </StyledButton>
  );
}

export default CustomButton;
