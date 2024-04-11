import styled from "styled-components";

export const Container = styled.div`
  width: 96%;
  max-width: 96%;
  height: 85%;
  max-height: 81vh;
  margin: 1rem;
  flex-direction: column;

  background: ${(props) => props.theme.colors.gray};
  color: #353535;
  border-radius: 1rem;
  padding: 1rem;
  overflow-x: hidden;
  display: flex;
  overflow-y: scroll;
  transition: all 0.5s;
`;
