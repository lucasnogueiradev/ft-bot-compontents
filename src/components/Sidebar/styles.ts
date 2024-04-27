import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

interface ToggleButtonProps {
  isOpen: boolean;
}
const moveToRight = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    transition: opacity 3s linear 3s;
    opacity: 1;
  }
`;
export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.font};
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.5s;
  font-family: "Roboto", sans-serif;
`;
export const Navigation = styled.nav<ToggleButtonProps>`
  width: ${(props) => (props.isOpen ? "15rem" : "4rem")};
  height: 98%;
  margin: 0.5rem;
  display: inline-block;
  border-radius: 0.8rem;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.secondary};
  transition: ll 0.5s;
`;
export const List = styled.ul<ToggleButtonProps>`
  max-width: 100%;

  margin: 1rem 0 0 0.5rem;
  padding: ${(props) => (props.isOpen ? "0" : "0")};
  .list {
    list-style: none;
    padding: 1rem 0;
    display: flex;

    margin: auto 0;
    align-items: center;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    position: relative;
    cursor: pointer;
  }
  .active {
    margin: 0 0 0 0.5rem;
    background: ${(props) => props.theme.colors.font};
    a {
      color: ${(props) => props.theme.colors.primary};

      font-weight: 500;
    }
  }
  .active .bloco:nth-child(1) {
    background: ${(props) => props.theme.colors.font};
    top: -20px;
    position: absolute;
    width: 100%;
    height: 20px;
    display: none;
    padding: 0;
    margin: 0;
  }
  .active .bloco:nth-child(1)::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.secondary};
    border: none;
    outline: none;
    border-bottom-right-radius: 20px;
    padding: 0;
    margin: 0;
  }
  .active .bloco:nth-child(2) {
    background: ${(props) => props.theme.colors.font};
    bottom: -20px;
    position: absolute;
    width: 100%;
    height: 20px;
    display: none;
  }
  .active .bloco:nth-child(2)::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.secondary};
    border-top-right-radius: 20px;
  }
  .active .bloco:nth-child(1),
  .active .bloco:nth-child(2) {
    display: block;
  }
`;
export const ListItem = styled.li`
  display: inline-block;
  flex-direction: column;
`;
export const NavLink = styled(Link)`
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.colors.white};
  gap: 1rem;
  list-style: none;
  justify-content: start;
  text-align: start;
  margin: auto auto auto 5px;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
`;
export const Icon = styled.span`
  font-size: 1.3rem;
  margin: auto;
  align-items: center;
  display: flex;
  padding: 0 0.5rem;
  animation: ${moveToRight} 0.6s;
  z-index: 1;
`;
export const Title = styled.span<ToggleButtonProps>`
  animation: ${moveToRight} 0.6s;
  z-index: 1;
  font-weight: 400;
  font-size: 1rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
export const HeaderNav = styled.header<ToggleButtonProps>`
  display: flex;
  color: ${(props) => props.theme.colors.tertiary};
  justify-content: ${(props) => (props.isOpen ? "space-between" : "center")};
  margin-bottom: 1rem;
  padding-bottom: 2rem;
  svg {
    color: ${(props) => props.theme.colors.tertiary};
  }
`;
export const Logo = styled.h3<ToggleButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0.5rem auto 0 auto;
  justify-content: ${(props) => (props.isOpen ? "center" : "center")};
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: row;
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  animation: ${moveToRight} 0.6s;
  cursor: pointer;
  svg {
    color: red;
    margin: auto;
    font-size: 1.5rem;
    display: flex;
    color: ${(props) => props.theme.colors.tertiary};
  }
`;
export const Bar = styled.button<ToggleButtonProps>`
  padding: 1rem 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  background: transparent;
  border: none;
  font-size: 1.4rem;
  color: #fff;
  cursor: pointer;
`;
export const Bloco = styled.div`
  max-width: 100%;
`;
export const Main = styled.main`
  width: 100%;
`;
