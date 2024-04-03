import React from "react";
import { StyledButton } from "./styles";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  ...rest
}) => {
  return (
    <StyledButton disabled={loading} {...rest}>
      {loading ? "Carregando..." : children}
    </StyledButton>
  );
};

export default Button;
