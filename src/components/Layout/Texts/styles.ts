import styled from "styled-components";

export const TitleContainer = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  margin: 1rem;
  margin: auto;
  padding: 1rem;
  width: 100%;
  color: #000;
`;

export const TextContainer = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: #000;
  font-style: normal;
  padding: 0;
  margin: 0;
`;

import { Link } from "react-router-dom";

export const LinkContainer = styled(Link)`
  color: blue;
  padding: 1rem;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
`;
