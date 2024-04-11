import React from "react";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import {
  Container,
  Icon,
  ListItem,
  Navigation,
  NavLink,
  List,
  Title,
  Bar,
  Logo,
  Bloco,
  Main,
  HeaderNav,
} from "./styles";
import { FaBarsStaggered, FaUser, FaUserTag, FaWindows } from "react-icons/fa6";
import {
  FaChevronLeft,
  FaWalking,
  FaUsersCog,
  FaUserEdit,
  FaInstagram,
} from "react-icons/fa";

import { ReactNode } from "react";
import IconChat from "../Layout/Icons/IconChat";
import Content from "../Content/Content";

interface Ipros {
  children: ReactNode;
}

const SiderBar = ({ children }: Ipros) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const listItems = document.querySelectorAll(".list");
    const handleClick = (index: number) => {
      listItems.forEach((item, i) => {
        console.log(item.className);
        item.className = i === index ? "list active" : "list";
      });
    };

    listItems.forEach((item, index) => {
      item.addEventListener("click", () => handleClick(index));
    });

    return () => {
      listItems.forEach((item, index) => {
        item.removeEventListener("click", () => handleClick(index));
      });
    };
  }, []);

  return (
    <Container>
      <Navigation isOpen={isOpen}>
        <HeaderNav isOpen={isOpen}>
          <Logo isOpen={isOpen}>
            <IconChat size="1.5rem" />
            ChatBot
          </Logo>
          <Bar isOpen={isOpen} onClick={toggleSidebar}>
            {isOpen ? <FaChevronLeft /> : <FaBarsStaggered />}
          </Bar>
        </HeaderNav>

        <List className="list-item" isOpen={isOpen}>
          <ListItem className="list active">
            <Bloco className="bloco"></Bloco>
            <Bloco className="bloco"></Bloco>
            <NavLink to="">
              <Icon>
                <FaWindows />
              </Icon>
              <Title isOpen={isOpen}>Home</Title>
            </NavLink>
          </ListItem>

          <ListItem className="list">
            <Bloco className="bloco"></Bloco>
            <Bloco className="bloco"></Bloco>
            <NavLink to="/bots">
              <Icon>
                <FaUser />
              </Icon>
              <Title isOpen={isOpen}>Bots</Title>
            </NavLink>
          </ListItem>

          <ListItem className="list">
            <Bloco className="bloco"></Bloco>
            <Bloco className="bloco"></Bloco>
            <NavLink to="">
              <Icon>
                <FaUserEdit />
              </Icon>
              <Title isOpen={isOpen}>Messages</Title>
            </NavLink>
          </ListItem>

          <ListItem className="list">
            <Bloco className="bloco"></Bloco>
            <Bloco className="bloco"></Bloco>
            <NavLink to="" className="link">
              <Icon>
                <FaUsersCog />
              </Icon>
              <Title isOpen={isOpen}>Settings</Title>
            </NavLink>
          </ListItem>

          <ListItem className="list">
            <Bloco className="bloco"></Bloco>
            <Bloco className="bloco"></Bloco>
            <NavLink to="">
              <Icon>
                <FaUserTag />
              </Icon>
              <Title isOpen={isOpen}>Theme</Title>
            </NavLink>
          </ListItem>

          <ListItem className="list">
            <Bloco className="bloco"></Bloco>
            <Bloco className="bloco"></Bloco>
            <NavLink to="">
              <Icon>
                <FaUserEdit />
              </Icon>
              <Title isOpen={isOpen}>Help</Title>
            </NavLink>
          </ListItem>

          <ListItem className="list">
            <Bloco className="bloco"></Bloco>
            <Bloco className="bloco"></Bloco>
            <Bloco></Bloco>
            <NavLink to="">
              <Icon>
                <FaWalking />
              </Icon>
              <Title isOpen={isOpen}>Exit</Title>
            </NavLink>
          </ListItem>
        </List>
      </Navigation>
      <Main>{children}</Main>
    </Container>
  );
};

export default SiderBar;
