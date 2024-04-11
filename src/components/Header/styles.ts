import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 98%;
  height: 60px;
  margin: 1rem;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 0.8rem;
  align-items: center;
  display: flex;
  justify-content: center;
  .header-user {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: ${(props) => props.theme.colors.tertiary};
    }
  }
`;
export const HeaderContent = styled.header`
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 95%;
`;
