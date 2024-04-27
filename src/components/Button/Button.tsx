import React from "react";
import { StyledButton } from "./styles";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  size?: "small" | "medium" | "large";
  backgroundColor?: "primary" | "secondary" | "onlytext" | "tertiary";
  color?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  size = "medium",
  loading = false,
  color,
  ...rest
}) => {
  return (
    <StyledButton
      disabled={loading}
      {...rest}
      backgroundColor={backgroundColor}
      size={size}
      color={color}
    >
      {loading ? "Carregando..." : children}
    </StyledButton>
  );
};

export default Button;
