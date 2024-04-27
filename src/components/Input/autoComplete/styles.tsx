import styled from "styled-components";

// Estilos usando Styled Components

export const AutocompleteContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const OptionItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
