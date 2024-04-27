import styled from "styled-components";

import { Link } from "react-router-dom";
import { LinkProps, TextProps, TitleProps } from "./types";

export const TitleContainer = styled.h2<TitleProps>`
  font-family: ${({ font }) =>
    font === "secondary" ? "Poppins, sans-serif" : "Roboto, sans-serif"};
  font-weight: 600;
  font-style: normal;
  display: flex;
  justify-content: center;
  margin: auto;
  background: transparent;
  width: 100%;
  color: ${({ color }) =>
    color === "primary"
      ? (props) => props.theme.colors.font
      : (props) => props.theme.colors.secondary};
`;

export const TextContainer = styled.p<TextProps>`
  font-family: ${({ font }) =>
    font === "secondary" ? "Poppins, sans-serif" : "Roboto, sans-serif"};
  font-weight: 400;
  color: ${({ color }) =>
    color === "primary"
      ? (props) => props.theme.colors.font
      : (props) => props.theme.colors.secondary};
  font-style: normal;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const LinkContainer = styled(Link)<LinkProps>`
  color: blue;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.success};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-family: ${({ font }) =>
    font === "secondary" ? "Poppins, sans-serif" : "Roboto, sans-serif"};
  font-weight: 400;
  font-style: normal;
`;
