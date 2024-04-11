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
  padding: 1rem;
  border-radius: 1rem;
  height: auto;
  max-height: 100%;
  justify-content: space-between;
  align-items: center;
  background: ${({ color }) =>
    color === "secondary"
      ? (props) => props.theme.colors.white
      : (props) => props.theme.colors.white};
`;

export const CenterContainer = styled.div<CardCenterProps>`
  width: 100%;
  display: flex;
  border-radius: 1rem;
  height: auto;
  max-height: 100%;
  margin: 0.5rem auto auto auto;
  justify-content: center;
  color: ${(props) => props.theme.colors.font};
  background: ${({ bg }) =>
    (bg === "primary" && ((props) => props.theme.colors.primary)) ||
    (bg === "secondary" && ((props) => props.theme.colors.secondary)) ||
    (bg === "white" && ((props) => props.theme.colors.white)) ||
    (bg === "tertiary" && ((props) => props.theme.colors.tertiary))};
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
    (bg === "primary" && ((props) => props.theme.colors.primary)) ||
    (bg === "secondary" && ((props) => props.theme.colors.secondary)) ||
    (bg === "white" && ((props) => props.theme.colors.white)) ||
    (bg === "tertiary" && ((props) => props.theme.colors.tertiary))};

  box-shadow: ${({ box }) =>
    (box === "primary" &&
      `-1px -0.5px 32px -3px ${(props: any) => props.theme.shadows.gray}`) ||
    (box === "secondary" &&
      `-1px -0.5px 32px -3px ${(props: any) => props.theme.shadows.secondary}`) ||
    (box === "none" && "none")};
  border-radius: 1rem;
`;
export const Content = styled.div<CardContentProps>`
  display: flex;
  flex-direction: column;
  height: auto;
  max-height: 100%;
  align-items: stretch;
  background: ${({ bg }) =>
    (bg === "primary" && ((props) => props.theme.colors.primary)) ||
    (bg === "secondary" && ((props) => props.theme.colors.secondary)) ||
    (bg === "white" && ((props) => props.theme.colors.white)) ||
    (bg === "tertiary" && ((props) => props.theme.colors.tertiary))};
`;

// Card container
export const ContainerWrapper = styled.div<CardContainerProps>`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  max-height: 100vh;

  background: ${({ bg }) =>
    (bg === "primary" && ((props) => props.theme.colors.primary)) ||
    (bg === "secondary" && ((props) => props.theme.colors.secondary)) ||
    (bg === "white" && ((props) => props.theme.colors.white)) ||
    (bg === "tertiary" && ((props) => props.theme.colors.tertiary))};

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
    (bg === "primary" && ((props) => props.theme.colors.primary)) ||
    (bg === "secondary" && ((props) => props.theme.colors.secondary)) ||
    (bg === "white" && ((props) => props.theme.colors.white)) ||
    (bg === "tertiary" && ((props) => props.theme.colors.tertiary))};
`;
export const ContentR = styled.div<CardContentProps>`
  display: flex;
  flex-direction: column;
  height: auto;
  max-height: 100%;
  align-items: stretch;
  background: ${({ bg }) =>
    (bg === "primary" && ((props) => props.theme.colors.primary)) ||
    (bg === "secondary" && ((props) => props.theme.colors.secondary)) ||
    (bg === "white" && ((props) => props.theme.colors.white)) ||
    (bg === "tertiary" && ((props) => props.theme.colors.tertiary))};
`;
