import React, { useEffect, useState } from "react";
import styled from "styled-components";
import cangsLogo from "../assets/images/logo.png";
import "../App.css";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

const Container = styled.div`
  background-color: rgba(25, 25, 25, 0.6);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  transition: 0.8s all ease;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 52px;
`;

const Logo = styled.div`
  cursor: pointer;
  display: flex;
`;

const Img = styled.img`
  width: 60px;
`;

const Navbar = () => {
  const [backgroundChange, setBackgroundChange] = useState(false);

  useEffect(() => {
    const changeNavBackground = (e) => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setBackgroundChange(false);
      } else {
        setBackgroundChange(true);
      }
    };

    window.addEventListener("scroll", changeNavBackground, { passive: true });
    return () => window.removeEventListener("scroll", changeNavBackground);
  }, [backgroundChange]);

  return (
    <Container className={backgroundChange ? "navbar colorChange" : "navbar"}>
      <Wrapper>
        <Logo>
          <Link to="/">
            <Img src={cangsLogo} />
          </Link>
        </Logo>
        <NavMenu />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
