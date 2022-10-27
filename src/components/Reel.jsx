import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import Player from "./Player";

const StyledElement = styled(Element)`
  height: 100vh;
  padding: 50px 0;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ReelWrapper = styled.div`
  padding: 80px 50px;
`;

const Reel = () => {
  return (
    <StyledElement name="reel">
      <Container>
        <ReelWrapper>
          <Player url="https://www.dailymotion.com/video/k1563FExlPS0dZxSuin" />
        </ReelWrapper>
      </Container>
    </StyledElement>
  );
};

export default Reel;
