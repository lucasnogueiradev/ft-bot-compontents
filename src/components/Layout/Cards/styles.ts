import styled from "styled-components";
import {
  CardBetweenProps,
  CardCenterProps,
  CardContainerProps,
  CardContentProps,
} from "./types";

export const BetweenContainer = styled.div<CardBetweenProps>`
  width: 100%;
  display: flex;
  margin: auto;
  padding: 1rem 0;
  height: auto;
  max-height: 100%;
  justify-content: space-between;
  background: ${({ color }) =>
    color === "secondary"
      ? (props) => props.theme.colors.white
      : (props) => props.theme.colors.white};
`;

export const CenterContainer = styled.div<CardCenterProps>`
  width: 100%;
  display: flex;
  height: auto;
  max-height: 100%;
  margin: 0.5rem auto auto auto;
  justify-content: center;
  color: ${(props) => props.theme.colors.font};
  background: ${({ color }) =>
    color === "secondary"
      ? (props) => props.theme.colors.white
      : (props) => props.theme.colors.white};
`;

// Card content
export const ContentContainer = styled.div<CardContentProps>`
  height: auto;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  background: ${({ bg }) =>
    bg === "secondary"
      ? (props) => props.theme.colors.tertiary
      : (props) => props.theme.colors.white};
`;
export const Content = styled.div<CardContentProps>`
  display: flex;
  flex-direction: column;
  height: auto;
  max-height: 100%;
  align-items: stretch;
  background: ${({ bg }) =>
    bg === "secondary"
      ? (props) => props.theme.colors.white
      : (props) => props.theme.colors.white};
`;

// Card container
export const ContainerWrapper = styled.div<CardContainerProps>`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  max-height: 100vh;

  background: ${({ bg }) =>
    bg === "secondary"
      ? (props) => props.theme.colors.tertiary
      : (props) => props.theme.colors.white};

  display: flex;
`;

// Card content
export const ContentContainerR = styled.div<CardContentProps>`
  height: auto;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border-radius: ${({ radius }) =>
    radius === "right" ? "0 10rem 10rem 0" : "10rem 0rem 0rem 10rem"};
  background: ${({ bg }) =>
    bg === "secondary"
      ? (props) => props.theme.colors.white
      : (props) => props.theme.colors.tertiary};
`;
export const ContentR = styled.div<CardContentProps>`
  display: flex;
  flex-direction: column;
  height: auto;
  max-height: 100%;
  align-items: stretch;
  background: ${({ bg }) =>
    bg === "secondary"
      ? (props) => props.theme.colors.white
      : (props) => props.theme.colors.white};
`;
