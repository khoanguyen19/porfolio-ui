import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowDropDown } from "@styled-icons/remix-line/ArrowDropDown";

const SubMenu = styled.div`
  width: 180px;
  position: absolute;
  top: 40px;
  background-color: #191919;
  display: none;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.4);
`;

const Container = styled.div`
  padding-bottom: 2px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  position: relative;
  transition: all 0.3s ease;

  &:before {
    content: "";
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top: 0;
    border-bottom: 20px solid rgba(255, 255, 255, 0.7);
    position: absolute;
    top: 32px;
    left: 8px;
    display: none;
  }

  &:after {
    content: "";
    width: 80px;
    height: 20px;
    background-color: transparent;
    position: absolute;
    top: 20px;
    left: 0px;
  }

  &:hover {
    color: #f0c3c3;
    border-bottom-color: #f0c3c3;
    transition: all ease 0.3s;

    &:before {
      display: block;
    }

    ${SubMenu} {
      display: block;
    }
  }
`;
const DropDown = styled(ArrowDropDown)`
  width: 24px;
  height: 24px;
`;

const SubMenuLink = styled(Link)`
  display: block;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  padding: 16px 0px;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #383838;
  }
`;

const NavHoverLink = ({ name, path, items }) => {
  return (
    <Container>
      <span>{name}</span>
      <DropDown />
      <SubMenu>
        {items.map((i) => (
          <SubMenuLink key={i.subPath} to={`${path}${i.subPath}`}>
            {i.name}
          </SubMenuLink>
        ))}
      </SubMenu>
    </Container>
  );
};

export default NavHoverLink;
