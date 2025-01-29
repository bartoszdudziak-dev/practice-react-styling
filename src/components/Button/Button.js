import React from "react";

import { StyledButton } from "./Button.styled";

const Button = ({ children, variant, size, disabled, active }) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      active={active}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
