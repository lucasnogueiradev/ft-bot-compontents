import styled from "styled-components";

export const Container = styled.button`
  max-width: 100%;
  width: 50px;
  background-color: ${(props) => props.theme.colors.info};

  color: ${(props) => props.theme.colors.white};
  font-family: "Roboto", sans-serif;
  font-size: 1.7rem;

  border: 0;
  padding: 1rem;
  width: 90%;
  margin: 1rem auto;
  display: flex;
  text-align: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
