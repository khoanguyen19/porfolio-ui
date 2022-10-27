import React, { useState } from "react";
import styled from "styled-components";
import VideoItem from "./VideoItem";
import VideoModal from "./VideoModal";

const Container = styled.div`
  height: 100vh;
  padding: 0 52px;
`;

const Gallery = styled.div`
  width: 100%;
`;

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;

const VideoGallery = ({ open, toggleModal, channelId, videos, category }) => {
  const [url, setUrl] = useState("");

  const onOpenVideo = (url) => setUrl(url);

  return (
    <Container>
      <Gallery>
        <GalleryWrapper>
          {category === "streaming"
            ? videos
                .filter((v) => v.channelId === channelId)
                .map((v) => (
                  <VideoItem
                    key={v.url}
                    data={v}
                    openVideo={onOpenVideo}
                    toggleModal={toggleModal}
                  />
                ))
            : videos.map((v) => (
                <VideoItem
                  key={v.url}
                  data={v}
                  openVideo={onOpenVideo}
                  toggleModal={toggleModal}
                />
              ))}
          <VideoModal url={url} open={open} toggleModal={toggleModal} />
        </GalleryWrapper>
      </Gallery>
    </Container>
  );
};

export default VideoGallery;
