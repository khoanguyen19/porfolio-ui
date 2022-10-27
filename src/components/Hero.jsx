import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import cangsAvatar from "../assets/images/avatar.jpg";
import { init } from "ityped";
import ButtonTo from "./ButtonTo";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-image: url(${cangsAvatar});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Intro = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const IntroWrapper = styled.div`
  display: flex;
  height: 40%;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
`;

const Greet = styled.h2`
  font-size: 28px;
  font-weight: 400;
`;

const Text = styled.span`
  color: #cdef13;
  font-size: 36px;
  font-weight: 600;
`;

const Name = styled.h2`
  font-size: 60px;
  font-weight: 700;
`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 15px;
`;

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      strings: ["Video Editor", "Content Creator"],
    });
  });

  return (
    <Container>
      <Intro>
        <IntroWrapper>
          <Greet>
            <Text>Hello</Text>, My name is
          </Greet>
          <Name>Quy Nguyen</Name>
          <Title>
            Freelance <Text ref={textRef}></Text>
          </Title>
          <ButtonTo section="About me" toSection="about" />
        </IntroWrapper>
      </Intro>
    </Container>
  );
};

export default Hero;
