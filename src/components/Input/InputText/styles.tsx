import styled from "styled-components";

// // Styles Input text
export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 1rem 0.3rem;
  border: none;
  font-size: 1rem;
  border-radius: 1rem;
  background: #ffffff;
  font-family: "Popins", sans-serif;
  -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
    font-size: 1rem;
    font-family: "Popins", sans-serif;
  }
  &:focus {
    border-color: none;
    outline: none;
    background: #fff;
  }
`;

export const Container = styled.div`
  margin: 2rem;
`;
export const Label = styled.label`
  justify-content: start;
  color: ${(props) => props.theme.colors.font};
  font-family: "Poppins", sans-serif;
  display: flex;
  width: 72%;
  padding: 0 0 7px 1rem;
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
  background: #fff;
  border: 1.5px solid #ccc;
  border-radius: 1rem;
  padding: 0 0 0 0.3rem;
  display: flex;
  margin: auto;
  &:focus-within {
    border-color: ${(props) => props.theme.colors.tertiary};
    outline: 1px solid ${(props) => props.theme.colors.tertiary};
    background: #fff;
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
  width: 70%;
  align-items: center;
  right: 13%;
  font-family: "Poppins", sans-serif;
  position: absolute;
  color: red;
  font-size: 0.6rem;
  bottom: -1rem;
`;

export const ContentInput = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: auto;
`;
