import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  width: 10rem;
  height: 3rem;
  /* height: ${({ size }) => {
    switch (size) {
      case "small":
        return "2rem";
      case "large":
        return "6rem";
      default:
        return "4.5rem";
    }
  }}; */

  cursor: ${({ loading }) => (loading ? "not-allowed" : "pointer")};
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  color: #fff;
  border: 0;
  padding: 2rem auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  display: flex;
  border-radius: 2.1rem;
  font-weight: 500;
  background: ${({ color }) =>
    color === "secondary"
      ? (props) => props.theme.colors.tertiary
      : (props) => props.theme.colors.info};

  &:disabled {
    opacity: 0.5;
  }
`;
