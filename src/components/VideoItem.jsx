import React from "react";
import styled from "styled-components";
import { PlayFill } from "@styled-icons/bootstrap/PlayFill";

const HoverModal = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.3s ease;
`;

const Container = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  width: 400px;
  position: relative;

  &:hover {
    ${HoverModal} {
      opacity: 1;
    }
  }
`;

const StyledPlayFill = styled(PlayFill)`
  width: 100px;
  height: 100px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Video = ({ data, openVideo, toggleModal }) => {
  const onVideoClick = (url) => {
    toggleModal();
    openVideo(url);
  };

  return (
    <Container
      onClick={() => {
        onVideoClick(data.url);
      }}
    >
      <HoverModal>
        <StyledPlayFill />
      </HoverModal>
      <Image src={data.img} />
    </Container>
  );
};

export default Video;
