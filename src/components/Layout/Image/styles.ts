import styled from "styled-components";

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  margin: auto;
  background: ${(props) => props.theme.colors.tertiary};
`;
export const ContainerImage = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.tertiary};
`;
