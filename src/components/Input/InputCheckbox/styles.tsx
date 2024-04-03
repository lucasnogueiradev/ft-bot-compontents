import styled from "styled-components";

// Styles Input Checkbox
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  input[type="radio"],
  input[type="checkbox"] {
    border: 0px;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
export const CheckboxInput = styled.input`
  margin: 0 0.9rem 0 0;
  cursor: pointer;
  font-size: 1.7rem;
`;
export const CheckboxLabel = styled.label`
  font-size: 1.7rem;
  color: #000;
  font-family: "Roboto", sans-serif;
`;
