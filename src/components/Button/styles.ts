import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  width: 8rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  /* font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "1rem";
      case "large":
        return "2rem";
      default:
        return "1.3rem";
    }
  }}; */

  cursor: ${({ loading }) => (loading ? "not-allowed" : "pointer")};
  font-family: "Poppins", sans-serif;
  color: ${({ color }) =>
    (color === "primary" && ((props) => props.theme.colors.white)) ||
    (color === "secondary" && ((props) => props.theme.colors.info))};
  border: 0;
  padding: 2rem auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  /* margin: 1rem auto; */
  display: flex;
  border-radius: 2.1rem;
  background: ${({ backgroundColor }) =>
    (backgroundColor === "primary" &&
      ((props) => props.theme.colors.warning)) ||
    (backgroundColor === "secondary" &&
      ((props) => props.theme.colors.secondary)) ||
    (backgroundColor === "tertiary" &&
      ((props) => props.theme.colors.tertiary)) ||
    (backgroundColor === "onlytext" && "transparent")};

  &:disabled {
    opacity: 0.5;
  }
`;
