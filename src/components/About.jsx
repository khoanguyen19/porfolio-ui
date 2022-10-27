import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import ButtonTo from "./ButtonTo";

const StyledElement = styled(Element)`
  height: 100vh;
  padding: 50px 0;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  padding: 0 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #cdef13;
`;

const Content = styled.p`
  line-height: 1.5;
  font-size: 18px;
  margin-bottom: 16px;
`;

const About = () => {
  return (
    <StyledElement name="about" style={{ height: "100vh" }}>
      <Container>
        <Left>
          <ImageWrapper>
            <Image src="https://carbon-media.accelerator.net/0000000ldud/1CwJmsruf7kfTxgH6ceJel;350x350.png?auto=webp" />
          </ImageWrapper>
        </Left>
        <Right>
          <ContentWrapper>
            <Title>About me</Title>
            <Content>Hi there everyone!</Content>
            <Content>I'm Quy or known by the nickname "Xjanua".</Content>
            <Content>
              Since 2015, I have known and self-taught graphic design until now.
              I'm currently a freelance Video Editor / Designer, living and
              working in Da Nang, Viet Nam. And has more than 2 years of
              experience in the field of video / content production for
              Streaming and Esports
            </Content>
            <ButtonTo section="Show Reel" toSection="reel" />
          </ContentWrapper>
        </Right>
      </Container>
    </StyledElement>
  );
};

export default About;
