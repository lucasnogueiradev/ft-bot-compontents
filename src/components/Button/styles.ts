import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  height: ${({ size }) => {
    switch (size) {
      case "small":
        return "2rem";
      case "large":
        return "6rem";
      default:
        return "4.5rem";
    }
  }};
  cursor: ${({ loading }) => (loading ? "not-allowed" : "pointer")};
  font-family: "Roboto", sans-serif;
  font-size: 1.7rem;
  color: #fff;
  border: 0;
  padding: 1rem;
  margin: 2rem;
  border-radius: 8px;
  font-weight: 500;
  background: ${({ color }) => (color === "secondary" ? "#ff0000" : "#007bff")};

  &:disabled {
    opacity: 0.5;
  }
`;
