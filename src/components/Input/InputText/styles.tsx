import styled from "styled-components";

// // Styles Input text
export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 1rem;
  border: none;
  font-size: 1rem;
  border-radius: 4px;
  background: #e0e0e0;
  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
    font-size: 1rem;
    font-family: "Popins", sans-serif;
  }
  &:focus {
    border-color: none;
    outline: none;
  }
`;

export const Container = styled.div`
  margin: 2rem;
`;
export const Label = styled.label`
  justify-content: start;
  color: ${(props) => props.theme.colors.gray};
  font-family: "Poppins", sans-serif;
  display: flex;
  width: 72%;
  padding: 0 0 7px 0;
  margin: auto;
`;
export const Adornment = styled.span`
  font-size: 2rem;

  align-items: center;
  margin: auto;
`;
export const ContainerInput = styled.div`
  width: 70%;
  max-width: 70%;
  background: #e0e0e0;
  border-radius: 10px;
  padding: 0rem 1rem;
  display: flex;
  margin: auto;
  &:focus-within {
    border-color: ${(props) => props.theme.colors.tertiary};
    outline: 1px solid ${(props) => props.theme.colors.tertiary};
    ${Adornment} {
      svg {
        color: ${(props) => props.theme.colors.tertiary};
      }
    }
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const StartAdornment = styled(Adornment)`
  font-size: 1.7rem;
  margin-right: 0.5rem;
  align-items: center;
  display: flex;
  svg {
    color: ${(props) => props.theme.colors.font};
  }

  &:focus-within {
    border-color: #007bff;
    outline: 1px solid rgb(51, 136, 228);
  }
`;

export const Error = styled.span`
  width: 10%;
  position: absolute;
  max-width: 10%;
  justify-content: start;
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  display: flex;
  width: 72%;
  color: red;
  padding: 0.4rem 0.5rem 0.5rem 0;
  margin: 0rem auto auto 3.9rem;
`;
